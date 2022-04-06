import { type } from '@testing-library/user-event/dist/type';
import React, { Fragment } from 'react';
import BodyTable from './BodyTable';
import HeadTable from './HeadTable';

const StructureTableUser = ({userData, deleteUserFunction, updateModeFunction}) => {

    
    const  COLUMS_NAME_USER = ['Name', 'Surname', 'Cellphone', 'Age', 'Email'];
    
    return ( 
        <Fragment>
            <h1>Users</h1>
            <table className="min-w-full divide-y divide-gray-200">
                <HeadTable columns={COLUMS_NAME_USER} />
                 <BodyTable 
                    rows={userData}
                    deleteUserFunction={deleteUserFunction}
                    updateModeFunction={updateModeFunction}
                /> 
            </table>

        </Fragment>
     );
}
 
export default StructureTableUser;