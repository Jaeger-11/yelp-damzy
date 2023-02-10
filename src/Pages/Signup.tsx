import React from 'react'
import Access from '../Components/Access'

const Signup = () => {
  const signUpProps = {
    text : 'Create an account',
    option : 'Sign in',
    functionName: "",
    optionPath: "/login"
  }
  return (
    <div>
        <Access {...signUpProps}/>
    </div>
  )
}

export default Signup