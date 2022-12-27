const fs=require('fs') 
let new_emp={"id":5,"name":"bidura","age":21}
var filearr=JSON.parse(fs.readFileSync('emp.json'))
var arr=[]
for(var i in filearr)
arr.push(filearr[i])
arr.push(new_emp)
console.log(arr)
fs.writeFile("emp.json",JSON.stringify(arr),(err)=>{
    if(err)
    console.log(err)
    else
    console.log("Done writing")
})