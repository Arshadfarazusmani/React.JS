import React, {useContext} from 'react'
import UserContext from '../context/user.context'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>Please LOgIn </div>

  else { return <div> Welcome {user.username}</div>
}}

export default Profile