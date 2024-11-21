import supabase from "./supabaseClient.ts";

async function deleteById(empid:number) {
    const{data:deleteData,error}=await
        supabase.from('employee')
        .delete()
        .eq('empid',empid);

        if(error)
            console.log("something wrong");
        else
            console.log("Deleted successfully : "+deleteData)
    
}
let empid:number=0;

 function promptForEmployeeDetails  () {
    const employeeid=  prompt("Please enter employee ID: ");
    
    if(employeeid){
        empid=parseInt(employeeid);
    }

   
   
};
 promptForEmployeeDetails();
 deleteById(empid);
