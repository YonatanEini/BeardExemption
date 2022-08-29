import {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import React,{Component} from "react";
import './SignInFornStyle.css'

export class SignInComponent extends Component {
    
    componentDidMount() {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
        signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
    }

    render() {
      return (
<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Welcome</title>
  <div className="container" id="container">
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-container">
         
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
         
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <br></br>
        <button>Login</button>
      </form>
    </div>
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Hello friend!</h1>
          <p>Login to your account</p>
          <button className="ghost" id="signIn">
            Login
          </button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Welcome Back!</h1>
          <p>
            Dont have an account? <br /> Join us now
          </p>
          <button className="ghost" id="signUp">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</>

      );
    }
   
}