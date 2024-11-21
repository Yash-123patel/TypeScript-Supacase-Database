import supabase from "./supabaseClient.ts";

interface EMPLOYEE{
    empid:number;
    empname:string;
}

async function updateEmployee(emp:EMPLOYEE) {
    const{data:updatedEmployee,error}=await
    supabase.from('employee')
    .update(emp)
    .eq('empid',emp.empid);

    if(error)
        console.log("Something Wrong!!",error);
    else
        console.log("updated Successfully :"+updatedEmployee);
    
}

const employee:EMPLOYEE={
    empid:12,
    empname:"Munna"
}
 function promptForEmployeeDetails  () {
    const employeeid=  prompt("Please enter employee ID: ");
    const employeeName =  prompt("Please enter employee name: ");

    if(employeeid&&employeeName){
        employee.empid=parseInt(employeeid);
        employee.empname=employeeName;
    } 
};
 promptForEmployeeDetails();
 updateEmployee(employee);