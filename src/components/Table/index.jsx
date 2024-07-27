/* eslint-disable react/prop-types */
import { useState } from "react";
import { students } from "../../mock/students";

export const Root = ({ data, onDelete }) => {
  console.log("table");

  return (
    <div>
      <h1>Student List {data.length}</h1>
      {/* <input onChange={searchByName} type="text" placeholder="name" /> */}
      {/* <input onChange={searchByTel} type="text" placeholder="telefon" /> */}
      <table border={1} style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Telefon</th>
            <th>Age</th>
            <th>Department</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((std) => {
            return (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.name}</td>
                <td>{std.phone}</td>
                <td>{std.age}</td>
                <td>{std.department}</td>
                <td
                  onClick={() => onDelete(std.id)}
                  style={{ color: "blue", cursor: "pointer" }}
                >
                  delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Root;
