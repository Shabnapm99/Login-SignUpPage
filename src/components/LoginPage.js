import React,{useState} from 'react'


function LoginPage(props) {
    const [action, setHeader] = useState("Login")
    //const[isLogin, setAction] = useState("Login")
  return (
    <div className='position-relative vh-100'>
        <div className='container bg-secondary-subtle rounded-5 position-absolute top-50 start-50 translate-middle pb-5 pt-5npm'>
      <div className="header pb-3"><h1 className=''><u>{action}</u></h1></div>
      {/* <div className="row"> */}
    {/*Use ternary operator to show required page*/}
      {action==="Login"?
        <><div className="inputs">
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i className="fa-solid fa-user p-2"></i>{/*This is from font awesome.Add script tag to index.html to use these icons */}
            <input type='text' placeholder='username' className='rounded p-2 w-50'></input>
        </div>
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i className="fa-solid fa-lock p-2"></i>
            <input type='password' placeholder='password' className='rounded p-2 w-50'></input>
        </div>
      </div>
      <div className="buttons m-3">
      <button type='button' className='btn btn-primary m-3' onClick={()=>{setHeader("SignUp")
      }}>SignUp</button>
     <button type='submit' className='btn btn-primary m-3' onClick={()=>setHeader("Login")}>Login</button>
      </div>
      <div className="forgotPassword">forgot password?</div>
        </>
      :
      <div className='SignUp inputs'>
        <div className="input m-3">
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i className="fa-solid fa-user p-2"></i>
            <input type='text' placeholder='name' className='rounded p-2 w-50'></input>
        </div>
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i class="fa-solid fa-envelope p-2"></i>
            <input type='email' placeholder='email' className='rounded p-2 w-50'></input>
        </div>
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i className="fa-solid fa-lock p-2"></i>
            <input type='password' placeholder='password' className='rounded p-2 w-50'></input>
        </div>
        <div className="input m-3">
            {/* <img src='' alt=''></img> */}
            <i className="fa-solid fa-user p-2"></i>
            <input type='text' placeholder='preferred username' className='rounded p-2 w-50 '></input>
        </div>
        <button type='submit' className='btn btn-primary m-3 mb-0'>Register</button>
    
        </div>
        <div className='pb-2'>Already have an account?
        {/* <p><i onClick={()=>setHeader("Login")}>Login</i></p> */}
        </div>
        <div>
        <button className='btn btn-primary m-3' onClick={()=>setHeader("Login")}>Login</button>
        </div>
      </div>
} 
      {/* </div> */}

    </div>
    </div>
  )
}

export default LoginPage