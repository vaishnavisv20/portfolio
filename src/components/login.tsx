"use client"
import React, { useState } from "react";

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <div>
            <div>
                
                <form action= "" className="contact-form">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email"  onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password"  onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="submit-btn" >Submit</button>
                    
                </form>
            </div>
        </div>
    )

}