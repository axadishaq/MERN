import axios from "axios";
import React, { useEffect, useState } from "react";

export const FetchUsers = () => {
   const [users, setUsers] = useState([]);

   const fetchingUsers = async () => {
      try {
         const { data } = await axios.get("https://dummyjson.com/users");
         setUsers(data.users);
      } catch (error) {
         console.log("Error fetching users:", error);
         setUsers([]);
      }
      return;
   };
   useEffect(() => {
      fetchingUsers();
   }, []);

   return (
      <>
         <table className="table  table-striped table-bordered border-secondary">
            <thead className="bg-secondary">
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">DOB</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Mail</th>
                  <th scope="col">Address</th>
               </tr>
            </thead>
            <tbody>
               {users.map((user) => (
                  <tr key={user.id}>
                     <th scope="row" className="align-middle">
                        {user.id}
                     </th>
                     <td>
                        <img
                           style={{ width: "70px", height: "70px" }}
                           src={user.image}
                           className="img-thumbnail rounded-circle"
                           alt="..."
                        />
                     </td>
                     <td className="align-middle">{user.firstName}</td>
                     <td className="align-middle">{user.lastName}</td>
                     <td className="align-middle">{user.birthDate}</td>
                     <td className="align-middle">{user.phone}</td>
                     <td className="align-middle">{user.email}</td>
                     <td className="align-middle">
                        {user.address.address}, {user.address.city} ,
                        {user.address.country}
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   );
};
