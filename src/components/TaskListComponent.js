import React from "react"
import Task from "./task"

export default function TaskListComponent({ tasks }) {

   
    //console.table(tasks);
    //Extract all tasks and view each task

    return (
        <>
            {tasks.map((data, key) => {
               return  <Task key={key} post={data}  />
            })}
        </>
    );
}