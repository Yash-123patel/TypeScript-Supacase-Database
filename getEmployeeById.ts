import supabase from "./supabaseClient.ts";

async function getEmployeeById(empid:number){
    const{data,error}=await
        supabase.from('employee')
        .select('*')
        .eq('empid',empid)
        .single();

        if(error)
            console.log("Getting Error",error);
      
        else
            console.log(data);
}
let empid:number=0;
 function promptForEmployeeDetails  () {
    const employeeid=  prompt("Please enter employee ID: ");
    if(employeeid){
        empid=parseInt(employeeid);
    }

   

   
};
 promptForEmployeeDetails();
 getEmployeeById(empid);
