import React from "react";
import axios from "axios";

const apiAuthHandler = axios.create({
  withCredentials: false,
  baseURL: process.env.REACT_APP_API_URL_
});

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: {}, // by default, user is not signed-in...
      // i started with a false value but then ...
      // i've put an object literal here just to avoid a weird refresh bug ... still investigating
      user: null
    };
  }

  componentDidMount() {
    this.isLoggedIn(); // check if user is signed-in when AuthConsumer is mounted
  }

  // check mdn @ : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/get
  get user() {
    return this.state.user;
  }

  updateState(data) {
    const { loginStatus, user } = data;
    this.setState({ loginStatus: loginStatus, user: user });
  }

  isLoggedIn = () => {
    apiAuthHandler
      .get("/loggedin", null)
      .then(serverRes => {
        // server accepted the request (this user is stored into session)
        // let's update the state loginStatus + user key/value pairs
        this.updateState(serverRes.data);
      })
      .catch(serverErr => {
        // console.error(serverErr);
        this.setState({ loginStatus: false });
      });
  };

  signin = (clbk, data) => {
    apiAuthHandler
      .post("/signin", data)
      .then(async serverRes => {
        // once loggedin, the state is updated =>
        // this will prevent the ProtectedRoute component redirect to /signin
        // check src/auth/ProtectedRoute.js
        await this.updateState(serverRes.data); // wait state update
        // then ... exec the callback (leading to a redirect)
        clbk(serverRes.data.loginStatus);
      })
      .catch(serverErr => this.setState({ isLoggedIn: false }));
  };

  signout = clbk => {
    // send a request to the server : session will be destroyed there
    apiAuthHandler.post("/signout").then(serverRes => {
      this.setState({ loginStatus: false }, () => clbk(this.isLoggedIn));
    });
  };

  render() {
    // return a context Provider ...
    return (
      <AuthContext.Provider
        // below, the values exposed by the provider (to be consumed later ;)
        value={{
          // exposed properties
          user: this.user,
          loginStatus: this.state.loginStatus,
          // exposed methods
          isLoggedIn: this.isLoggedIn,
          signin: this.signin,
          signout: this.signout
        }}
      >
        {/* here, the provider children tags will be inserted */}
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
