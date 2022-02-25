import React, {useState} from 'react';
import Layout from '../containers/Layout';
export default function Login(){
    const[inputs, setInputs] = useState({})
    const {username, password} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs,[name]: value})
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const loginRequest = {username, password}
        alert(`사용자이름: ${JSON.stringify(loginRequest)}`)
    }
    return (<Layout><div><h1>로그인폼</h1>
    <form>
    <div>
    <label><b>Username</b></label><br/>
    <input type="text" name="username" onChange={handleChange}/><br />
    <label><b>Password</b></label><br/>
    <input type="text" name="password" onChange={handleChange}/><br />
    <button onClick={handleClick}>Login</button>
    <label><input></input>Remember me </label>
    </div> 
    <div>
    <button>Cancel</button><br/>
    <span>Forgot<a>Password?</a></span>
    </div>
    </form>
    </div>
    </Layout>)

}

