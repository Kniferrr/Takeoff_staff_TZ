import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
    <h2>Login</h2>
    <form>
    <label for="POST-login">Login</label>
    <input id="POST-login" type="text" name="login"/>
    <label for="POST-password">Password</label>
    <input id="POST-password" type="password" name="password"/>
    <button>OK</button>
    </form>
    <Link to="/register">Register</Link>
    </>
  )
}

export default LoginPage