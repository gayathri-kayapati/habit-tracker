import {useContext,useState,useEffect} from "react";
import "./habitModal.css"
import {DataProvider} from "../../Context/DataProvider"

const DEFAULT_HABIT = {
    name:'',
    repeatCycle:'daily',
    goal:'once',
    time:'',
    startDate:'',
}
export default function HabitsModal({showHabitModal}){

    const {addNewHabit}=useContext(DataProvider)
    const [habit,setHabit]=useState(DEFAULT_HABIT)

    const handleHabitChange=(e,keyName)=>{
        const habitInfo={...habit}
        habitInfo[keyName]=e.target.value
        setHabit(habitInfo)
    }

    return(
            <div className="modal">
                <div className="content">
                    <h3>New Habit</h3>
                    <div>
                        <label>NAME</label><br/>
                        <input type="text"  placeholder="Habit Name" value={habit.name} onChange={(e)=>handleHabitChange(e,"name")}/>
                    </div>
                    <div>
                        <div>
                            <label>REPEAT</label><br/>
                            <select value={habit.repeatCycle} onChange={(e)=>handleHabitChange(e,"repeatCycle")}>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label>GOAL</label><br/>
                            <select value={habit.goal} onChange={(e)=>handleHabitChange(e,"goal")}>
                                <option value="once">Once</option>
                                <option value="twice">Twice</option>
                                <option value="thrice">Thrice</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>TIME OF DAY</label><br/>
                            <input type="time" value={habit.time} onChange={(e)=>handleHabitChange(e,"time")}/>
                        </div>
                        <div>
                            <label>START DATE</label><br/>
                            <input type="date" value={habit.startDate} onChange={(e)=>handleHabitChange(e,"startDate")}/>
                        </div>

                    </div>
                    <div>
                        <button onClick={()=>{setHabit(DEFAULT_HABIT)
                            showHabitModal()}}>Discard</button>
                        <button onClick={()=>{addNewHabit(habit)
                            showHabitModal()
                        }}>Save</button>
                    </div>
                </div>
            </div>
    )
}