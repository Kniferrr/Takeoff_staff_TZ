import React from 'react';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <>
    <h2>Register</h2>
    <form>
    <label for="POST-register">Login</label>
    <input id="POST-register" type="text" name="login"/>
    <label for="POST-register">Password</label>
    <input id="POST-register" type="password" name="password"/>
    <button>OK</button>
    </form>
    <Link to="/login">Login</Link>
    </>
  )
}

export default RegisterPage