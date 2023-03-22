import Login from './Login';
import {LoginForm} from './LoginForm';
import './App.css';
import Ticket from './Ticket';
import { Navigate } from "react-router-dom";
import TextInput from './TextInput';



function App() {
  let name = "new Ticket name";
  let description = "new Ticket description";

  return (
    <div className="App">
      <div className="Login">
        <Ticket/>
      </div>
      <header className="Header">
        <h1>
          This is a ticket.
        </h1>
      <ticket className="Ticket">
        <Ticket name={name} description={description}/>
      </ticket>
      </header>
      
    </div>
    
  );
}

export default App;
