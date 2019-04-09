import React from 'react'

export default function ToDoList(props){
    console.log(props)
    return (
        <h1>{ props.task}</h1>
    )
}