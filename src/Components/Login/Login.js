import React, { useState, useEffect } from 'react';
import './Login.css';


const Login = () => {

  useEffect(() => {document.title = "Strona logowania"}, [])

  const [userDto, setUserDto] = useState({});

  const hadnleOnSubmit = (e) => {
    e.preventDefault();
    console.log(userDto)
  }

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserDto({
      ...userDto,
      [name]: value,
    })
  }

    return(
        <div className='login-main'>
            <form className='login-form' onSubmit={hadnleOnSubmit}>
              <div className='login'>
                <div className='login-label' >Login:</div> 
                <div className='login-input-div'>
                  <input className='login-input' onChange={handleOnChange} type="text" name="email" />
                </div>
                <div className='login-label'>Password:</div>
                <div className='login-input-div'>
                  <input className='login-input' onChange={handleOnChange} type="password" name="password" />
                </div>
              </div>
              <button className="login-button" type="submit" >Zaloguj</button>
            </form>
        </div>
    )
}

export default Login;