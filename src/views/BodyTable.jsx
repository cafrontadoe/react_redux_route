import React, { Fragment } from 'react'

const BodyTable = ({rows, deleteUserFunction, updateModeFunction}) => {
    // console.log(rows);
    return (  
    <Fragment>
        <tbody>
                {
                    rows.map((columOfRow) => {
                        return(
                                <tr key={columOfRow.id}>

                                    <td>{columOfRow.name}</td>
                                    <td>{columOfRow.surname}</td>
                                    <td>{columOfRow.cellphoneNumber}</td>
                                    <td>{columOfRow.age}</td>
                                    <td>{columOfRow.email}</td>
                                    <td>
                                        <button onClick={ () => updateModeFunction(true, columOfRow) } >Edit</button>
                                        <button onClick={() => deleteUserFunction(columOfRow)} >Delete</button>
                                    </td>
                                
                                </tr>
                        )
                    })
                }
        </tbody>
    </Fragment>

    );
}
 
export default BodyTable;