

import React, { createContext,useState,useContext} from "react";

export const FormContext=createContext();

// export const useFormContext = () => useContext(FormContext);



export const FormProvider=({children})=>{
    const[formData,setFormData]=useState({
        Name:"",
        Email:"",
        Phone:"",
        BloodGroup:"",
        Address:"",
        Position:"",
        Company:"",
        Salary:"",
        Department:"",
        Qualification:"",
        DateofJoining:"",
        Roles:"",
        Skills:"",
        
    });

    return(
        <FormContext.Provider value={{formData,setFormData}}>
            
            {children}

        </FormContext.Provider>
            
        
    );
}
export const useFormContext = () => useContext(FormContext);