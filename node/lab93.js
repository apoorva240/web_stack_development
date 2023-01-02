const fs=require('fs') 
let new_emp={"id":5,"name":"bidura","age":21}
const {load}=require("./lab91.js")
var employee=load()
console.log(employee)
employee.people.push(new_emp)

fs.writeFile("emp.json",JSON.stringify(employee),(err)=>{
    if(err)
    console.log(err)
    else
    console.log("Done writing")
})


console.log(employee)