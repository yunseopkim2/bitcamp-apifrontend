import React from "react";
import Layout from "../containers/Layout";
export default function Calc (){
    return (<Layout><div><h1>계산기</h1>
    <form>
    <div>
    
    </div>
    <div><label><b>숫자</b></label><br/>
    <input></input><br/>
    <label><b>연산자</b></label><br/>
    <input></input><br/>
    <label><b>숫자</b></label><br/>
    <input></input><br/>
    <button>계산</button><br/>
    </div>
    <div>
    <button>Cancel</button><br/>
   
    </div>
    </form>
    </div>
    </Layout>)
}
