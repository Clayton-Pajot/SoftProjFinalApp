import React, { useState } from "react";
import './App.css';

function TextInput() {
  //const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("ticket info here");
  const [ticketName, setTicketName] = useState("ticket name here");

  const [memberName, setMemberName] = useState("");
  const TeamMembers= [{name: 'Clayton', role: 'Owner'},{name: 'Samuel', role: ''},{name: 'Josh', role: ''}];
  const Members= [{name: 'Clayton', role: 'Owner'}];
  const [allMembers, setMember] = React.useState(Members);
  //const displayMembers = allMembers.map((member) =>
   //     <li>{member.name } ({member.role})</li>);

  const [taskName, setTaskName] = useState("");
  const Tasks = [{task: "task 1", id: 1},{task: "task 2", id: 2},{task: "task 3", id: 3}];
  const [allTasks, setTask] = React.useState(Tasks);
  const displayTasks = allTasks.map((task) => <li key={task.toString()}>{task}</li>);
    

  // ======= MEMBER FUNCTIONS =============================================
  function DisplayMembersAndRoles(memberName, memberRole){

    const displayMembers = allMembers.map((member) =>
        <li>
            {member.name } ({member.role})
        </li>);

    return <ul>{displayMembers}</ul>    
  }
    


  function handleMemberChange(event) {
    setMemberName(event.target.value);
  }

  function handleMemberAdd(){
    const addMember = allMembers.concat({name: memberName})
    setMember(addMember);
  }
  

  // ======= TASK FUNCTIONS =============================================
  function DisplayAllTasks(){

    const displayTasks = allTasks.map((task, index) => 
    //<li>{task.task}</li>);
    <li key={task.id = index +1}>
        <span>{task.task}  </span>
        <button type="button" onClick={()=> handleEditTask(task.id)}> Edit</button>
        <button type="button" onClick={()=> handleRemoveTask(task.id)}> Remove</button>
    </li>);
  
    return <ul>{displayTasks}</ul>
  }


  function handleTaskChange(event) {
    setTaskName(event.target.value);
  }

  function handleTaskAdd(){
    const addTask = allTasks.concat({task: taskName, id: allTasks.at()})
    setTask(addTask);
  }

  function handleRemoveTask(id){
    const newList = allTasks.filter((item) => item.id !== id);

    setTask(newList);
  }

  function handleEditTask(id){
    console.log(id);
    const newList = allTasks.filter((item) => item.task !== id);

    setTask(newList);
  }


  // ========== MAIN BODY ===============================================
  return (
    <div className="Container">
        <div className="TicketBody">
            
            <div>
                <div  >
                    <div  className="Title" contenteditable={true}>
                        {ticketName}
                    </div>
                    

                    <div className ="TicketDetails" contentEditable={true}>
                        {text} 
                    </div>
                    <div>
                        <ul>
                            {DisplayAllTasks()}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h3 htmlFor="task-input">Add task to Ticket: </h3>
                <input
                    type="text"
                    id="task-input"
                    name="task-input"
                    placeholder="Enter task here"
                    value={taskName}
                    onChange={handleTaskChange}
                />
                <button onClick={handleTaskAdd}>Submit</button>
            </div>
        </div>
        
        <div className="TeamMembers">
            <div className="Title">
                <p>Team Members</p>
            </div>
            <div>
                {DisplayMembersAndRoles()}
            </div>
            <div>
            <input
                    type="text"
                    id="ticket-input"
                    name="ticket-input"
                    placeholder="Enter member name here"
                    value={memberName}
                    onChange={handleMemberChange}
                />
                <button onClick={handleMemberAdd}>Add</button>
            </div>
        </div>

        
    </div>
  );
}



export default TextInput;

// import React from 'react';

// export class Ticket extends React.Component{

//     render(){
//         let name = this.props.name;
//         let description = this.props.description;

//         return (
//             <div>
//                 <h1>{name}</h1>
//                 <p>
//                     {description}
//                 </p>
//             </div>
//         )
//     }
// }