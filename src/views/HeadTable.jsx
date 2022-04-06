import React, { Fragment } from 'react'

const HeadTable = ({columns}) => {
    return (  
    <Fragment>
         <thead>
                <tr>
            {
                columns.map((col) => {
                 return   <th key={col}>{col}</th>
                })
            }
                <th>Actions</th>
               </tr>
            </thead>
    </Fragment>
    
    );
}
 
export default HeadTable;