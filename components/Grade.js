import React, {useState} from 'react';
import Layout from '../containers/Layout';
import axios from 'axios';
export default function Grade(){
    const [inputs, setInputs] = useState({})
    const{username, kor, eng, math} = inputs;

    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
        setInputs({...inputs, [name]: value})
    }
    const handleClick = (e) =>{
        e.preventDefault()
        const gradeRequset = {username, kor, eng, math}
        alert(`사용자 이름: ${JSON.stringify(gradeRequset)}`)
    }


   /* const[username, setUsername] = useState ("")
    const[kor, setKor] =useState(0)
    const[eng, setEng] =useState(0)
    const[math, setMath] =useState(0)
    const[result, setResult]= useState(0)
    const[total, setTotal]= useState(0)
   
    const a =()=>{
        let username= document.getElementById('username').value
        console.log(username)
        let kor= document.getElementById('kor').value
        console.log(kor)
        let eng= document.getElementById('eng').value
        console.log(eng)
        let math= document.getElementById('math').value
        console.log(math)
        setUsername(username)
        setKor(kor)
        setEng(eng)
        setMath(math)
        setResult('이름 : '+(username)+ " 국어 : "+ Number(kor)+ " 영어 : "+ Number(eng)+ " 수학 : "+Number(math))
        setTotal('총점 : '+(Number(kor)+Number(eng)+Number(math)) + ' 평균 : ' +(Number(kor)+Number(eng)+Number(math))/3)
    }
    */

    
    return (<Layout><form><h1>성적표</h1>
    <div>
    
    <label><b>Username</b></label><br/>
    <input type = "text" name= "username" onChange={handleChange}/><br/>
    <label><b>Kor</b></label><br/> 
    <input type = "text" name = "kor" onChange={handleChange}/><br/>
    <label><b>Eng</b></label><br/>
    <input type= "text" name = "eng" onChange={handleChange}/><br/>
    <label><b>Math</b></label><br/>
    <input type = "text"name = "math" onChange={handleChange}/><br/>
    
    <button onClick={handleClick}>성적 체크</button><br/>
   
   
        
    </div>
    </form>

    </Layout>)
}
;
