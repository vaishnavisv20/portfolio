import {Login} from "../../components/login";
import React from "react";
export default function Auth() {
    let islogin = false;

    let user = {
        name: "Arun",
        email: "arun@gmail.com"
    };

    return (
        <div>
            {
                islogin ? (
                    <div>
                        <p>Email: {user.email}</p>
                        <p>Name: {user.name}</p>
                    </div>
                ) : (
                    <div>
                        <button>Login</button>
                    </div>
                )
            }

            <div>
                <Login />
            </div>
        </div>
    );
}