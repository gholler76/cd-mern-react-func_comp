import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordconf, setPasswordConf] = useState("");
    const [passwordconfError, setPasswordConfError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, passwordconf };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2) {
            setFirstnameError("First name must be 2 characters");
        }
    }
    const handleLastname = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2) {
            setLastnameError("Last name must be 2 characters");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5) {
            setEmailError("Email must be 5 characters");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters");
        }
    }
    const handlePasswordconf = (e) => {
        setPasswordConf(e.target.value);
        if (e.target.value != setPassword.value) {
            setPasswordConfError("Passwords must match");
        }
    }

    return (
        <>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>Firstname: </label>
                    <input type="text" onChange={handleFirstname} />
                    {
                        firstnameError ?
                            <p>{firstnameError} </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Lastname: </label>
                    <input type="text" onChange={handleLastname} />
                    {
                        lastnameError ?
                            <p>{lastnameError} </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError ?
                            <p>{emailError} </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError ?
                            <p>{passwordError} </p> :
                            ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={handlePasswordconf} />
                    {
                        passwordconfError ?
                            <p>{passwordconfError} </p> :
                            ''
                    }
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
