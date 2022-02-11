import React from 'react'
import UserTable from '../userTable/UserTable';
import useFetch from "../../useFetch";

export default function Users() {
  const {data:users, pending, error} = useFetch('http://localhost:5000/users');
  return (
    <div className="sensors">
        {error && <p>Error: {error}</p>}
        {pending && <p>Loading...</p>}
        {users && <UserTable users = {users} title="All user details"/>}
        {/* This makes sure that the child components are not called when sensors is null */}
    </div>
  )
}
