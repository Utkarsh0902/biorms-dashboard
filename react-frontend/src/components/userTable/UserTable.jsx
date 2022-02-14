import React from 'react'

import './userTable.css'
const UserTable = ({users, title}) => {
  var index = 1;
  const userData = users.map(
      (user)=>{
          return(
              <tr>
                  <td>{index++}</td>
                  <td>{user.name}</td>
                  <td>{user.type}</td>
                  <td>{user.email}</td>
                  <td>{user.phno}</td>
              </tr>
          )
      }
  )
  return (
      <div className="user-list">
          <h2>{title}</h2>
          <table class='user-table'>
              <thead>
                  <tr>
                      <th>Index no.</th>
                      <th >Name</th>
                      <th >Type</th>
                      <th >Email</th>
                      <th >Phone no.</th>
                  </tr>
              </thead>
              <tbody>
                  {userData}
              </tbody>
          </table>

      </div>
  );
}

export default UserTable;