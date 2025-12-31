import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!isAuthenticated) return;
      try {
        const token = await getAccessTokenSilently();
        const res = await axios.get("http://localhost:7878/user/validate", {
          headers: {
              Authorization: `Bearer ${token}`,
           },
        });
        console.log("User profile fetched:", res.data);

        setUserProfile(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [isAuthenticated, getAccessTokenSilently]);

  return { userProfile, loading };
};
