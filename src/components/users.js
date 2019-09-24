import React,{Fragment} from 'react';


const Users =(props)=>{
    return(
        <Fragment>
                {
                props.userList.map(users=>{
                    return (
                        <li> {users.name} | {users.location} </li>
                    )
                })
                }
        </Fragment>
    );
}
export default Users;