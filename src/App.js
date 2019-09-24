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
  const deleteUserList =  (index) =>{ 
    console.log(index);
    let toggleColors={...toggleStyles};
    toggleColors.backgroundColor='#fffff';
    toggleStyles={...toggleColors}
    const persons = [...userList.userData]; 
    if (index !== -1) { 
      persons.splice(index, 1); 
    setUserList({userData:persons})
    }  
  }   


  //Toggle styling here
  const toggleStyles={
    backgroundColor:"red",
    border:"none",
    color:'#ffffff',
    borderRadius:"10px",
    padding:'10px',
    marginTop:'10px',
    outline:'none'
  }
  return (
    <div className="App">
        <button onClick={changeUserData} className={"class123 "+(userList.isValid==true ? "class1":"class2")+""}> Toggle Userdata</button>
      <ul> 
        { userList.userData && 
          <Users userList= {userList.userData} deleteUser={(index)=>deleteUserList(index)}/>
        }
        </ul> 
    </div>
  );
}

export default App;
