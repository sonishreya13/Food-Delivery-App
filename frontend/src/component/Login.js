import { red } from '@mui/material/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/home');
  }
  return (
    <div>
      <h1 className= 'h1'>Start your <span style={{color:"red"}}>ZAIKA</span>-licious journey</h1>
      <form className='form2'>
        <label>
          Email:
          <input type="email" />
        </label>
        <br></br>
        <label>
          Password:
          <input type="password" />
        </label>
        <br></br>
        <input type="submit" value="Login" onClick={routeChange} />
      </form>
    </div>
  )
}

export default Login;