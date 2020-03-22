import React from "react"
import Spots from "./Spots"
import vacationData from "./vacationData"

function App(){
    const vacationSpots = vacationData.map(vacation => <Spots place={vacation.place} price={vacation.price} timeToGo={vacation.timeToGo} />)
    return(
        <div>
            <h1 className="title">Vacation Spots</h1>
            <div className="largerCard">
                {vacationSpots}
            </div>
        </div>
    )
}

export default App