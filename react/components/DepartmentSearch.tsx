import React, { useState } from "react";
import { useQuery } from "react-apollo";
import QUERY_VALUE from "../graphql/getDepartment.graphql";
import DepartmentGroup from "./DepartmentGroup";


// import {SearchBar} from "vtex.store-components"

const DepartmentSearch = ()=> {
    const {data, loading}=useQuery(QUERY_VALUE)
    const [slug,setSlug]= useState("")
    console.log("query", data);
    console.log("slug", slug);
    
    
   return (
    loading 
    ? 
    <div>Loading...</div> : 
    <>
        <DepartmentGroup
         departments={data?.categories[0]?.children}
         handleSetSlug={setSlug}
        />
        
    </>
    
   ) 
}
export default DepartmentSearch