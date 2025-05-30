import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://api.github.com/users/Arshadfarazusmani")
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setdata(data)
            
        })
    },[])
    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers : {data.followers}</div>
        <img src={data.avatar_url} alt="picture" width={300} />
        </>
    )
}

export default Github
