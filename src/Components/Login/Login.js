import React, { useState, useEffect } from 'react';
import './Login.css';


const Login = ({ user, loginUser }) => {

  useEffect(() => {document.title = "Strona logowania"}, [])

  const [userDto, setUserDto] = useState({
    name: '',
    email: '',
    role: ''
  });

  const hadnleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(userDto.email);

 
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
                  <input disabled className='login-input' onChange={handleOnChange} type="password" name="password" />
                </div>
              </div>
              {user.email === '' ? <button className="login-button" type="submit" >Zaloguj</button> : <div>Zalogowany</div>}
            </form>
        </div>
    )
}

export default Login;