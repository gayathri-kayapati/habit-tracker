import {createContext, useEffect, useState} from "react";


 export const DataProvider=createContext()
export default function ContextProvider({children}){
    const [habits,setHabits]=useState([])

    const addNewHabit=(habit)=>{
        const habitsData=[...habits,habit]
        setHabits(habitsData)
    }
    useEffect(()=>{
        console.log(habits)
    },[habits])
    return(
        <div>
            <DataProvider.Provider value={{habits,addNewHabit}}>
                {children}
            </DataProvider.Provider>
        </div>
    )
}