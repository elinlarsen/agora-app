import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";

export default function Auth(props) {
    const wantToSignIn = props.location.pathname === "/signin";

    var message = wantToSignIn
        ? "Don't you have an account yet"
        : "Already have an account";

    var path = wantToSignIn ? "/signup" : "/signin";

    function redirect(path) {
        console.log("@redirect");
        props.history.push(path);
    }

    return (
        <React.Fragment>
            <p>
                <Link className="link" to={path}>
                    {message} ?
                </Link>
            </p>

            {wantToSignIn ? (
                <LogInForm redirect={redirect} />
            ) : (
                    <SignUpForm redirect={redirect} />
                )}

        </React.Fragment>
    );
}
