import React from 'react'

export default function Token() {
    const handleToken = (data) => {
        console.log('Tokendata', data)
        axios.post("https://adminbackend.unentrance.com/auth/v1/token/access/", data)
    }
    return (
        <div>
            
        </div>
    )
}
