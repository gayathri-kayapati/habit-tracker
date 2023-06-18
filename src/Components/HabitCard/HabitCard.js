import {useContext} from "react";

import "./habitCard.css"
import {DataProvider} from "../../Context/DataProvider";
export default function HabitCard({habit,showHabitModal}){
    const {deleteHabit,editHabit}=useContext(DataProvider)
    return(
        <div className="card">
           <h3>{habit.name}</h3>
            <div>
                <button className="btn" onClick={()=>{editHabit(habit.id)
                    showHabitModal()}}>edit</button>
                <button className="btn" onClick={()=>deleteHabit(habit.id)}>Delete</button>
                <button className="btn">Archive</button>
            </div>
        </div>
    )
}