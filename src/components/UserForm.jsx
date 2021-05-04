import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordConf] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, passwordconf };
        console.log("Welcome", newUser);
    };

    return (
        <>
            <form onSubmit={createUser}>
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setPasswordConf(e.target.value)} value={passwordconf} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>EmaiI: {email}</p>
            <p>Password: {password}</p>
            <p>Password Confirmation: {passwordconf}</p>

        </>
    );

};

export default UserForm;
