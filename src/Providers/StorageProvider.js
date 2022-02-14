import React, { createContext, useState, useEffect } from 'react';
import { getInformations } from './../Services/API'

export const StorageContext = createContext()

export const StorageProvider = (props) => {

    let [ information, setInformation ] = useState([])

    useEffect(() => { 
            
            getInformations().then((data) => {
                setInformation(data) 
                console.log((data))
            })

    }, [])

    return (
        
        <StorageContext.Provider value={{information, setInformation}} >
            {props.children}
        </StorageContext.Provider>
    )

}