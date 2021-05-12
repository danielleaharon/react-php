import React from "react";
import { useHistory } from 'react-router-dom';

const API_PATH = 'http://127.0.0.1:8080/server.php';




function Task({ post }) {
    const his=useHistory();
  

    const [isToggled, setIsToggled] = React.useState(false);
   
    React.useEffect(() => {
        if(post.done=="true"){
            setIsToggled(!isToggled);
    
        }
    }, []);
      
    //Task Performance Update
    const onClick = () => {
        var done ="";
        if(!isToggled) done="true"
        else done="false"
        setIsToggled(!isToggled);
        fetch(API_PATH, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: post.id,
                done: done,

              
            })
        }).then(response => response.json()).then(
            data => {
                console.log(data)
                if (data.status === "success") {
                    console.log('success')

                }
            }
            
        )
    }
//Request to delete a task from the server

    const onDelete = () => {
    
            fetch(API_PATH, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: post.id
                  
                })
            }).then(response => response.json()).then(
                data => {
                    console.log(data)
                    if (data.status === "success") {
                        console.log('success')
                        his.go(0)

                    }
                }
                
            )
            }
         

 
    return (
        <>
            <div className="Tasklist">
                <div className="w3-container w3-card w3-white w3-round w3-margin" ><br />
                {!isToggled?(   <div className='w3-right w3-opacity'>
                   
                    <td> <h4 className="title">{post.title}</h4></td>
                     <td>   
                     <button className="checkbox" onClick={onClick}><i class="fa fa-check"></i></button>
                     </td> 
                    
                    </div>
                    ):(<div className='w3-right w3-opacity'>
                    <td> <h4 className="title">	<strike>{post.title}</strike></h4></td>
                     <td>   
                     <button className="checkboxCheck" onClick={onClick}><i class="fa fa-check"></i></button>
                     </td> 
                   
                    </div>)}
                    <div className='w3-left w3-opacity'>
                    <td>   
                     <button className="deleteButton" onClick={onDelete}><i class="fa fa-trash"></i></button>
                     </td> 
                        </div>

                    <br />
                </div>
            </div>









        </>
    );
}

export default Task;
