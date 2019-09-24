import React,{useState} from 'react';
import logo from './logo.svg';
import './App.scss';


//import the components
import Users from "./components/users";

function App(props) {
  const [userList,setUserList]=useState({
        userData:[
          // {name:'Raghu',location:'HYD'},
          // {name:'Ram',location:'AMR'},
          // {name:'Raghu2',location:'Bang'},
          // {name:'Raghu3',location:'ch'}
        ],
        isValid: false
  });
  const changeUserData =()=>{
    setUserList({
      userData:[
        {name:'Raja',location:'HYD'},
        {name:'Ram',location:'AMR'},
        {name:'Ramesh',location:'Bang'},
        {name:'Raghu3',location:'ch'}
      ],
      isValid:!userList.isValid
    })
  }
  return (
    <div className="App">
        <button onClick={changeUserData}>Toggle Userdata</button>
      <ul> 
        { userList.userData && 
          <Users userList= {userList.userData}/>
        }
        </ul> 
    </div>
  );
}

export default App;
