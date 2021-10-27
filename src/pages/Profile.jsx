import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [showPass, setShowPass] = useState(false);
  const showPassHandler = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="flex flex-col">
      <div className="bg-black text-white p-16">
        <h1 className="text-4xl">Profile</h1>
      </div>
      <div className="p-20 text-xl">
        <div className="mb-10"> Hello, {user.name}</div>
        <div>
          <button onClick={showPassHandler} className="border p-2">
            Show me my password
          </button>
          {showPass ? <p>{user.pass}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Profile;
