import React from "react";
import Form from "../components/Form";

const Home = () => {
  return (
    <div className="p-10 md:p-20 flex justify-center items-center flex-col h-screen w-full">
      <h1 className="text-3xl mb-10">Hello, please log in to your account</h1>
      <Form />
    </div>
  );
};

export default Home;
