import React from 'react'
import Access from "../Components/Access"

const Login = () => {
  const loginProps = {
    text : 'Login',
    option : 'Create an account',
    functionName: "signin",
    optionPath: "/signup"
  }
  
  return (
    <div>
        <Access {...loginProps}/>
    </div>
  )
}

export default Login