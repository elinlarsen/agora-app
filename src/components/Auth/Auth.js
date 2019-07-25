import React from "react";
import { Link } from "react-router-dom";

//components
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

//style
import {AuthWrapper} from "../Utils/StyledComponents"

export default function Auth(props) {
    const wantToSignIn = props.location.pathname === "/login";

    var message = wantToSignIn
        ? "Don't have an account yet"
        : "Already have an account";

    var path = wantToSignIn ? "/signup" : "/login";

    function redirect(path) {
        console.log("@redirect");
        props.history.push(path);
    }

    return (
         <AuthWrapper>
            {wantToSignIn ? (
                <LogInForm redirect={redirect} />
            ) : (
                <SignUpForm redirect={redirect} />
                )}

            <Link className="link" to={path}
                        style = {{textDecoration : "none", color : "#212121"}}>
                        {message} ?
            </Link>          

        </AuthWrapper> 
    );
}
