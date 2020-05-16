import React from 'react';

const RenderProfile = ({data}) => {
    const {name, email, password, gender, address} = data;
    return(
        <div>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Gender: {gender}</p>
            <text>
                {address}
            </text>
        </div>
    )
}

export default RenderProfile