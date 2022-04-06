import React, { Fragment, useState } from 'react'
import StructureTableUser from './StructureTableUser';
import UserForm from './UserForm';
import { v4 as uuidv4 } from 'uuid';

const PrincipalStructureUser = () => {

    let userData = [
        {
            id: uuidv4(),
            name: 'camilo',
            surname: 'andres',
            cellphoneNumber: '3023333333',
            age: 27,
            email: 'redesjavacamilo@gmail.com'
        }
    ];

    const [users, setUsers] = useState(userData);
    const [updateUser, setUpdatingUser] = useState(false);



    const [currentUser, setCurrentUser] = useState();

    const addUserFunction = (user) => {
        user.id =  uuidv4();
        console.log('new user', user);
        setUsers(
            [
                ...users,
                user
            ]);
    }

    const deleteUserFunction = (user) => {
        setUsers(        
                users.filter(filterUser => filterUser.id != user.id)
          );
    }

    const updateModeFunction = (updateMode, user) => {
        setUpdatingUser(        
            updateMode
          );
          setCurrentUserToForm(user);
          
        }
        
        
        function setCurrentUserToForm(user){
            console.log('---------> llega', user);
              setCurrentUser(
                  user
              );
    }

    return (  
        <Fragment>
            <UserForm  
            addUserFunction={addUserFunction} 
            updateUser={updateUser}
            updateModeFunction={updateModeFunction}
            user={currentUser}
            />
            <StructureTableUser 
                userData={users} 
                deleteUserFunction={deleteUserFunction}
                updateModeFunction={updateModeFunction}
                
                />
        </Fragment>
     );
}
 
export default PrincipalStructureUser;