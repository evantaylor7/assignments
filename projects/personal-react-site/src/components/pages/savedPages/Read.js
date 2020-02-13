import React, {useContext} from "react"

import {APIContext} from "../../../APIContext"


function Read(){
    const {read} = useContext(APIContext)
    
    return(
        <div className="content">
            Read Page!!
        </div>
    )
}

export default Read