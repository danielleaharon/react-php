import React from "react";
import TaskListComponent from "./TaskListComponent";
import NewTasks from "./newtask";
const API_PATH = 'http://127.0.0.1:8080/server.php';


function Home() {
    const [newTasks, setNewTasks] = React.useState(false);
    const [tasks, setTasks] = React.useState([]);

    //Receive all tasks in db while loading
    React.useEffect(() => {
    
        fetch(API_PATH)
            .then(response => response.json()).then(
                data =>{ setTasks(data.tasks)
              }  )
    }, []);

  
//Opening the option to enter a new task
    const onClick = () => {
        setNewTasks(!newTasks);
    }



    return (
        <>
                   <div >
               
                   <div className="w3-container w3-card w3-round w3-margin">
                    <h2 className="title">הרשימות שלי</h2>
                    </div>
                    <TaskListComponent tasks={tasks}  />
                    {newTasks?(<div><NewTasks setNewTasks={setNewTasks} tasks={tasks} setTasks={setTasks} /><button className="buttonNewTask" onClick={onClick}>ביטול</button>
                     </div>):  <button className="buttonNewTask" onClick={onClick}>הוסף משימה חדשה</button>
                    }

            </div>
       

        </>
    );
}

export default Home;
