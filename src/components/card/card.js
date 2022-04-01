import React from 'react';

const Card =({id, name, email})=>{
    return(
        <div className="">
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}/>
            <div className="">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;