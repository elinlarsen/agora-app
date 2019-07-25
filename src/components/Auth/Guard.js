import React from "react";
import axios from "axios";

const apiAuthHandler = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_URL_
});

const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      loginStatus: {},    
      user: {
        agora: [],
        email: "",
        first_name: "",
        interests: [],
        last_name: "",
        picture: "",
        username: "",
        _id: "",
      }
    };
  }

  componentDidMount() {
    this.isLoggedIn();
  }

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
        console.log("serverRes in isLoggedIn -----", serverRes)
        this.updateState(serverRes.data)})
      .catch(serverErr => {
        console.error(serverErr);
        this.setState({ loginStatus: false });
      });
  };

  signin = (clbk, data) => {
    apiAuthHandler
      .post("/login", data)
      .then(async serverRes => {
        await this.updateState(serverRes.data); 
        clbk(serverRes.data.loginStatus);
      })
      .catch(serverErr => {
        this.setState({ isLoggedIn: false })
        console.log("error while logging in signin function - guard: ", serverErr)
    });
  };

  signout = clbk => {
    apiAuthHandler.post("/signout")
    .then(serverRes => {
      this.setState({ loginStatus: false }, () => {
        console.log( "signout info ---",serverRes )
        clbk(this.isLoggedIn)});
    });
  };

  render() {

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
