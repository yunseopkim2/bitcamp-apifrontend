import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Calc (){
    const[inputs, setInputs] = useState({})
    const{num1, opcode, num2} = inputs;
    const handleChange = (e) =>{
        e.preventDefault()
        const{value, name} = e.target;
            setInputs({ ...inputs, [name]: value})
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const calcRequest = {num1, opcode, num2}
        alert(`계산기: ${JSON.stringify(calcRequest)}`)
    }
   

    return <Layout><form><h1>계산기</h1>  
    <div>
    <label><b>num1</b></label>
    <input type = "text" name = "num1" onChange={handleChange}/><br/>

    <label htmlFor=""><b>opcode</b></label>
    <select type = "text" name="opcode" onChange={handleChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
    </select>
    <br/>
    <label htmlFor=""><b>num2</b></label>
    <input type= "text" name ="num2" onChange={handleChange}/><br/>
    <button onClick={handleClick}>CALC</button>
    </div>
    </form>
    </Layout>
}
   /* const[opcode, setopcode] = useState("")
    const[num2, setNum2] = useState(0)
    const [result, setResult] = useState(0)
    const sum =()=>{
        let num1 = document.getElementById('num1').value
        console.log('숫자 1 :' +num1)
        let num2 = document.getElementById('num2').value
        console.log('숫자 2: '+num2)
        setNum1(num1) 
        setNum2(num2) 
        setResult(Number(num1) + Number(num2))
        console.log('결과 : '+result)
        <button onClick={()=>{sum() }}>더하기 실행</button>
    </form>
    <div>결과: {result}</div>
    }*/