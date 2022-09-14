import React from "react";

export const TodoItems = ({ todoo ,onDelete}) => {
    return (
        <>
        <div>
            <h4>{todoo.title}</h4>
            <p>{todoo.description}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoo)}}>Delete</button>
        </div>
        <hr></hr>
        </>
    )
}
