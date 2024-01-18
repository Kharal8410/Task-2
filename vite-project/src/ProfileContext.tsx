/* eslint-disable @typescript-eslint/no-explicit-any */

import { createContext, useContext, useState, useEffect } from "react";

const ProfileContext = createContext();
export const ProfileProvider = ({ children }: any) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const url = "https://testing.esnep.com/happyhomes/api/check-session";
        const requestBody = {
          UserID: "1",
          NotToken: "",
          Device: "A",
          AuthCode: "r1d3r",
        };
        const signature = "p0m76";

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Signature: signature,
          },
          body: JSON.stringify({ ...requestBody, Signature: signature }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <ProfileContext.Provider value={{ profileData }}>
      {children}
    </ProfileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};
