import axios  from 'axios';
const SERVER = `http://localhost:8080`
export const memberBmi  = (bmiRequest) =>   axios.get(`${SERVER}/member/bmi`)
export const membercalc = (calcRequest) => axios.get(`${SERVER}/member/calc`)
export const membergrade = (gradeRequest) => axios.get(`${SERVER}/member/grade`)
export const memberlogin = (loginRequest) => axios.get(`${SERVER}/member/login`)
