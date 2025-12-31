import React from "react";
import { useUser } from "../hooks/useUser.js";

export const Home = () => {
  const { userProfile, loading } = useUser();

  console.log("userProfile:", userProfile);
  return (
    <div>
      <h1>
        Welcome {userProfile?.first_name} {userProfile?.last_name}!
      </h1>
      {userProfile.classroom ? (
        <p>Your classroom is: {userProfile.classroom}</p>
      ) : (
        <p>You are not assigned to a classroom yet.</p>
      )}
    </div>
  );
};
