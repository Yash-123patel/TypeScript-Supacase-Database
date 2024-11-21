import supabase from "./supabaseClient.ts";

interface EMPLOYEE{
    empid:number;
    empname:string;
}

async function getEmployee() {
    const{data:getData,error}=await
          supabase.from('employee')
          .select('*');
        
          if(error){
            console.log("Getting Error!!!",error);
          }
          else{
            for(const emp of getData){
                console.log(emp);
            }
          }
    
}
getEmployee();