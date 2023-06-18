import {useContext} from "react";

import "./habitsList.css"
import HabitCard from "../../Components/HabitCard/HabitCard";
import {DataProvider} from "../../Context/DataProvider";

export default function HabitsList({showHabitModal}){
    const {habits}=useContext(DataProvider)
    return(
        <div className="list">
            {habits.map(habit=>
            <HabitCard showHabitModal={showHabitModal} habit={habit}/>
            )}
        </div>
    )
}