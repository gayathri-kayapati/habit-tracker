import {createContext, useEffect, useState} from "react";
import {v4 as uuid} from "uuid";
const DEFAULT_HABIT = {
    id:uuid(),
    name:'',
    repeatCycle:'daily',
    goal:'once',
    time:'',
    startDate:'',
}
 export const DataProvider=createContext()
export default function ContextProvider({children}){
    const [habits,setHabits]=useState([])
    const [curEditingHabit,setEditingHabit]=useState(DEFAULT_HABIT)

    const addNewHabit=(habit)=>{
        const index=habits.findIndex(curHabit=>curHabit.id===habit.id)
        const habitsData=[...habits]
        if(index===-1){
            habitsData.push(habit)
        }
        else{
            habitsData[index]=habit
        }
        setHabits(habitsData)
    }

    const deleteHabit=(id)=>{
        const temp=habits.filter(habit=>id!==habit.id)
        setHabits(temp)
    }

    const editHabit=(id)=>{
        const temp=habits.find(habit=>id===habit.id)
        setEditingHabit(temp)
    }
    return(
        <div>
            <DataProvider.Provider value={{habits,addNewHabit,deleteHabit,curEditingHabit,editHabit}}>
                {children}
            </DataProvider.Provider>
        </div>
    )
}