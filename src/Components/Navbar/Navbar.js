import "./navbar.css"
export default function Navbar({showHabitModal}){
    return(
        <div className="nav">
            <div>
                <h1>Habit Tracker</h1>
            </div>
            <div>
                <button className="addBtn" onClick={showHabitModal}>Add a Habit</button>
            </div>
        </div>
    )
}