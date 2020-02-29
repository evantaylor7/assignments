import React, {useState, useEffect} from "react"
import axios from "axios"
import Bounty from "./components/Bounty"
import AddBounty from "./components/AddBounty"

function App(){
    const [bounties, setBounties] = useState([])
    
    function getBounties(){
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function postBounty(newMovie){
        axios.post("/bounties", newMovie)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data.newBounty])
            })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getBounties()
    }, [])
    
    return(
        <div>
            <h1 className="title">Bounties!</h1>
            <AddBounty postBounty={postBounty}/>
            <div className="bounty-container">
                {bounties.map(bounty => 
                    <Bounty 
                        {...bounty}
                        key={bounty._id}
                    />
                )}
            </div>
        </div>
    )
}

export default App