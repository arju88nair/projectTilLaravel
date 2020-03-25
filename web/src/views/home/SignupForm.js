import React from 'react';
import Signup from '../css/Signup.css'
import {useDispatch, useSelector} from "react-redux";
import {MiscActions} from "../../_actions";

export function LoginWrapper()
{
    const dispatch = useDispatch();
    const view = useSelector(state => state.HomeReducers.currentView);

    const changeView = (view) => {
        dispatch(MiscActions.loginView(view));
    };

    const currentView = () => {
        switch(view) {
            case "signUp":
                return (
                    <form>
                        <h2>Sign Up!</h2>
                        <fieldset>
                            <legend>Create Account</legend>
                            <ul>
                                <li>
                                    <label for="username">Username:</label>
                                    <input type="text" id="username" required/>
                                </li>
                                <li>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" required/>
                                </li>
                                <li>
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" required/>
                                </li>
                            </ul>
                        </fieldset>
                        <button id="formButton">Submit</button>
                        <button id="formButton" type="button" onClick={ () => changeView("logIn")}>Have an Account?</button>
                    </form>
                )
                break
            case "logIn":
                return (
                    <form>
                        <h2>Welcome Back!</h2>
                        <fieldset>
                            <legend>Log In</legend>
                            <ul>
                                <li>
                                    <label for="username">Username:</label>
                                    <input type="text" id="username" required/>
                                </li>
                                <li>
                                    <label for="password">Password:</label>
                                    <input type="password" id="password" required/>
                                </li>
                                <li>
                                    <i/>
                                    <a onClick={ () => changeView("PWReset")} href="#">Forgot Password?</a>
                                </li>
                            </ul>
                        </fieldset>
                        <button id="formButton">Login</button>
                        <button type="button" onClick={ () => changeView("signUp")} id="formButton">Create an Account</button>
                    </form>
                )
                break
            case "PWReset":
                return (
                    <form>
                        <h2>Reset Password</h2>
                        <fieldset>
                            <legend>Password Reset</legend>
                            <ul>
                                <li>
                                    <em>A reset link will be sent to your inbox!</em>
                                </li>
                                <li>
                                    <label for="email">Email:</label>
                                    <input type="email" id="email" required/>
                                </li>
                            </ul>
                        </fieldset>
                        <button>Send Reset Link</button>
                        <button type="button" onClick={ () => changeView("logIn")}>Go Back</button>
                    </form>
                )
            default:
                break
        }
    }

    return (
        <section id="entry-page">
            {currentView()}
        </section>
    )
}

