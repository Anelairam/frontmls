import React from "react";
import { ReCalendar } from "../organisms/ReCalendar";
import { useAuth0, User } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("User info:", user);
    // const sendTokenToBackend = async () => {
    //   console.log("Preparing to send token to backend");
    //   try {
    // Get a valid token for your API
    // const token = await getAccessTokenSilently({
    //   audience: import.meta.env.VITE_AUTH_AUDIENCE,
    // });
    // const token = await getAccessTokenSilently();

    // console.log("Obtained token:", token);

    // Send token to your backend
    // const response = await axios.get("https://localhost:7878/api/users/validate", {
    //   headers: {
    //     Authorization: `Bearer ${token}`, // 👈 send token here
    //   },
    // });

    // const data = await response.json();
    //   console.log("Backend response:", data);
    // } catch (err) {
    //   console.error("Error sending token:", err);
    // }
    // };

    // sendTokenToBackend();

    const validateUserData = async () => {
      try {
        const info = await axios.post(
          "http://localhost:7878/api/users/validate",
          {
            user: user,
          }
        );
        console.log("User validation response:", info.data);
      } catch (error) {
        console.error("Error validating user data:", error);
      }
    };

    validateUserData();
  }, [getAccessTokenSilently, user]);

  return (
    <div className="grid grid-cols-4 gap-4 bg-amber-600">
      <div className="col-span-4 col-start-2 place-self-center">
        {isAuthenticated ? <h2>Home</h2> : <h2>Go away</h2>}
      </div>
      {/* <ReCalendar /> */}
      <div>Today's List</div>
    </div>
  );
};
