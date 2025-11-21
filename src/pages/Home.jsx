import React, { useState } from "react";
import { ReCalendar } from "../organisms/ReCalendar";
import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

export const Home = ({ validatedUser, setValidatedUser }) => {
  const { user, isAuthenticated} =
    useAuth0();
  useEffect(() => {
    const userDataValidation = async () => {
      try {
        const response = await axios
          .post("http://localhost:7878/api/users/validate", {
            user: user,
          })
          .then((res) => {
            setValidatedUser(res.data.user);
            console.log("userData the variable", validatedUser);
          });
      } catch (error) {
        console.error("Error validating user data:", error);
      }
    };

    if (user) userDataValidation();
  }, [user]);

  return (
    <div className="grid grid-cols-4 gap-4 bg-amber-600">
      <div className="col-span-4 col-start-2 place-self-center">
        {isAuthenticated ? (
          <div>
            <h2>Home</h2>
            <p>Welcome, {validatedUser?.name}</p>
            <p>Your role is : {validatedUser?.role}</p>
          </div>
        ) : (
          <h2>Please login to be able to see the content</h2>
        )}
      </div>
      {/* <ReCalendar /> */}
      <div>Today's List</div>
    </div>
  );
};
