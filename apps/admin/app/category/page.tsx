"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@workspace/api";
const Category = () => {
  const [users, setUsers] = useState([]);
  async function userList() {
    const newRes = apiClient
      .get("/api/users?limit=5")
      .then((response) => {
        console.log("api res", response);
        if (Array.isArray(response?.data)) {
          setUsers(response?.data);
        }
        return response;
      })
      .catch((error) => {
        console.log("Error", error);
        return null;
      });
    return newRes;
  }
  useEffect(() => {
    userList();
  }, []);
  console.log("ooooff", users);
  return (
    <div>
      <div className="user-list">
        {users && users.length > 0
          ? users.map((item, index) => (
              <div key={index}>
                <p>Name: {item.name?.firstname + " " + item.name?.lastname}</p>
                <p>Email: {item.email}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Category;
