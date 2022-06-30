import React, { createContext, useContext, useState } from 'react'
const Global=createContext()

export const Contxt=()=>useContext(Global)

export function Context({children}) {
    const [data, setdata] = useState([])
    const [current, setcurrent] = useState([])
    return (
        <Global.Provider value={{
        data,
        set:setdata,
        current,
        setcr:setcurrent,
        }}>
            {children}
        </Global.Provider> 
    )
}

