import React, { useState } from "react";
import { useHistory } from "react-router";

const Form = () => {
  const history = useHistory();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  const loginHandler = (e) => {
    setLogin(e.target.value);
    e.target.value === "developer21" && pass === "123456"
      ? setError(false)
      : setError(true);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
    login === "developer21" && e.target.value === "123456"
      ? setError(false)
      : setError(true);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="mb-10">
        <h1>Enter your login</h1>
        <input
          value={login}
          onChange={loginHandler}
          placeholder="developer-21"
          className="px-4 py-2 text-sm border-b focus:outline-none"
          type="text"
        />
      </div>
      <div className="mb-10">
        <h1>Enter your password</h1>
        <input
          value={pass}
          onChange={(e) => passHandler(e)}
          placeholder="123456"
          className="px-4 py-2 text-sm border-b focus:outline-none"
          type="password"
        />
      </div>
      <div>
        <button
          disabled={error}
          onClick={handleSubmit}
          className={`w-full py-3 hover:bg-gray-200 hover:text-black duration-300 ${
            error
              ? "bg-gray-200 text-black cursor-not-allowed"
              : "text-white bg-black cursor-pointer"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
