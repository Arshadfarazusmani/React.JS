import React from 'react'
import { useParams } from 'react-router-dom'


function Usercomponent() {
    const {userid}=useParams()
    return (
        <>
        <h1>USER:{userid}</h1>
        </>
    )
}

export default Usercomponent

