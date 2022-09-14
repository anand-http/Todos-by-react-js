import React from 'react';
import { TodoItems } from './TodoItem';

const Todos = (props) => {

    let footerStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }


    return (

        <div className="Container" style={footerStyle}>
            <h1 className='my-3' >My To do List</h1>
            <br />
            {

                props.todos.length === 0 ? <h1>"NO Todos to display"</h1> :
                    props.todos.map((todoo) => {

                        return (
                            
                                <TodoItems todoo={todoo} onDelete={props.onDelete} key={todoo.Sno} />
                                
                            
                        )


                    })
            }


        </div>

    )
}

export default Todos;