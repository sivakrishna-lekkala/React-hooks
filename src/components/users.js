import React,{Fragment} from 'react';
import '../App.scss'

 
const Users =(props)=>{
    return(
        <Fragment>
                {
                props.userList.map((users,index)=>{
                    return (
                        <li onClick={()=>props.deleteUser(index)} key={index} className="userlist"  > {users.name} | {users.location} </li>
                    )
                })
                }
        </Fragment>
    );
}
export default Users;