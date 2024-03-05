import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha'

export const Login = (props) => {
    const recaptcha = useRef()
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');





    const handleSubmit = (e) => {
        e.preventDefault();

        const captchaValue = recaptcha.current.getValue()
        if (!captchaValue) {
          alert('Please verify the reCAPTCHA!')
        } else {
          // make form submission
          alert('Form submission successful!')
        }
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
                <ReCAPTCHA ref={recaptcha} sitekey={process.env.REACT_APP_SITE_KEY} />
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}