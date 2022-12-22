import React from "react";
import {useCssHandles} from "vtex.css-handles";
import "./styles.css"


type Props={
    departments:[Category],
    handleSetSlug:any
}
type Category={
    id: number,
    name: string,
    slug: string
}

const DepartmentGroup = ({departments,handleSetSlug}: Props)=>{
    console.log(departments)
    const CSS_HANDLES = [
        "department__group",
        "department__group--options",
        ]
        
    const handles = useCssHandles(CSS_HANDLES)
    const onHandleSetSlug=(event:any)=>{
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    }

    const departmentOptions: any = departments.map((department:Category)=>{
        return (
            <option value={department.slug}
                    key={department.id}
                    className={handles["department__group--options"]}
            >{department.name}</option>
        )
    })
    return (
        <select
            defaultValue="value0"
            onChange={onHandleSetSlug}
            className={handles.department__group}
        >
            <option disabled value="value0"
                className={handles["department__group--options"]}
            >Todos los departamentos</option>
            {departmentOptions}
        </select>
    )
}

export default DepartmentGroup