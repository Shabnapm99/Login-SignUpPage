import React from 'react'

function LoginPage() {
  return (
    <div className='container bg-secondary-subtle rounded'>
      <div className="header m-5 pt-4"><h1>Login</h1></div>
      <div className="inputs">
        <div className="input">
            <img src='' alt=''></img>
            <input type='text' placeholder='username'></input>
        </div>
        <div className="input">
            <img src='' alt=''></img>
            <input type='password' placeholder='password'></input>
        </div>
      </div>
      <div className="buttons">
      <button>SignUp</button>
        <button type='submit'>Login</button>
      </div>
    </div>
  )
}

export default LoginPage