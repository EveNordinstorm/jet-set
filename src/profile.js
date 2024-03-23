import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="m-14">
        <img className="rounded-full" src={user.picture} alt={user.name} />
        <h2 className="my-4 text-xl">{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
