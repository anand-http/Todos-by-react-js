import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';


const Addtodo = (props) => {

    const [title, setTitle] = useState('');
    const [desc, setdesc] = useState('');

    const Submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and description can't be empty");
        }
        else{
            props.addTodo(title,desc)
            setTitle("");
            setdesc("");
        }

    }

    return (
        <>
            <h2>Add To do List</h2>
            <Form onSubmit={Submit}>
                <Form.Group className="mb-3 " controlId="title">
                    <Form.Label style={{fontWeight:"bold"}}>Todo Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Add to do List" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="desc">
                    <Form.Label style={{fontWeight:"bold"}}>Description</Form.Label>
                    <Form.Control type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} placeholder="Add desc of your To do List" />
                </Form.Group>

                <Button className="btn-sm" variant="success" type="submit">
                    AddToDo
                </Button>
            </Form>
            <hr />
            <br />
        </>
    )
}

export default Addtodo;