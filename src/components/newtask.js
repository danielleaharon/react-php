import React  from "react";

const API_PATH = 'http://127.0.0.1:8080/server.php';

export default function newtask( { tasks, setTasks,setNewTasks }) {
    const titleRef = React.useRef;

    //Sending a request to the server to add the task
    const onClick = () => {
        if( titleRef.current.value!="" ){
            console.log(titleRef.current.value)
            setNewTasks(false);
            fetch(API_PATH, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: titleRef.current.value,
                  
                })
            }).then(response => response.json()).then(
                data => {
                    console.log(data)
                    if (data.status === "success") {
                        console.log(data.tasks);
                        setTasks(data.tasks);

                    }
                }
            )
            }
            else{
    
                setNewTasks(true);
            }

    }

    return (
        <div className="Tasklist">
            <div className="w3-container w3-card w3-white w3-round w3-margin" ><br />
     

                    <input ref={el => { titleRef.current = el}} placeholder="משימה חדשה.." className="textareatitle" />
                    <br></br>
                    <br></br>
                        <button onClick={onClick} type="button" className="buttonUpload"> &nbsp;הוסף</button>

                <br />
            </div>
        </div>

     
    );

}