import supabase from './supabaseClient.ts'


interface EMPLOYEE{
    empid:number;
    empname:string;
}

async function insertEmployeeData(emp:EMPLOYEE){
   const {data:insertedData,error}=await 
            supabase.from('employee').insert(emp)

        if(error){
            console.log("Something wrong!!",error);
        }
        else{
            console.log("Data Inserted Succsessfully: "+ insertedData);
        }
}
let employee:EMPLOYEE={
    empid:12,
    empname:"Godarshan"
}

 function promptForEmployeeDetails () {
    const employeeid=  prompt("Please enter employee ID: ");
    const employeeName =  prompt("Please enter employee name: ");

    if(employeeid&&employeeName){
        employee.empid=parseInt(employeeid);
        employee.empname=employeeName;
    } 
};
 promptForEmployeeDetails();
 insertEmployeeData(employee);
