import React from 'react'

function Employee(props) {
    return (
        <div>
            <h1>  {props.name},{props.age}</h1>
        </div>
    )
}

export default Employee
