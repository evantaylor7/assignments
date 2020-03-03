import React, {useState} from "react"
import AddBounty from "./AddBounty"

function Bounty(props){
    const {firstName, lastName, imgURL, bountyAmount, type, deleteBounty, editBounty, _id} = props
    const living = JSON.parse(props.living)

    const [editToggle, setEditToggle] = useState(false)
    
    return(
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>{firstName} {lastName}</h1>
                    <img src={imgURL} style={{width: "200px"}} />
                    <h2>{type}</h2>
                    <h3>Alive: {living ? "Yes" : "No"}</h3>
                    <p>Bounty: ${bountyAmount}</p>
                    <button onClick={() => deleteBounty(_id)}>X</button>
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Bounty</button>
                </>
            :
                <>
                    <AddBounty 
                        btnText="Save Edits"
                        firstName={firstName}
                        lastName={lastName}
                        imgURL={imgURL}
                        living={living}
                        bountyAmount={bountyAmount}
                        type={type}
                        deleteBounty={deleteBounty}
                        submit={editBounty}
                        _id={_id}
                        toggle={setEditToggle}
                        style={{flexDirection: "column", width: "100px"}}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
                </>
            }
        </div>
    )
}

export default Bounty