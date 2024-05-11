"use client";
import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <>
      <div className="h-screen w-1/2 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl flex text-center py-5 px-5 rounded-full mt-5 mb-5 text-white font-bold bg-purple-600 hover:bg-pink-600 shadow-2xl shadow-purple-600 hover:shadow-pink-600 hover:cursor-pointer  ">
            Login Page
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-purple-50 to-pink-50 shadow-2xl rounded p-8 m-4 w-full h-1/2 max-w-md"
        >
          <h2 className="text-3xl text-center mb-8">Login with Email</h2>
          <div className="mb-6">
            <Input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter your Email"
              className="block w-full p-3  text-gray-700 text-sm"
            />
          </div>
          <div className="mb-8">
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your Password"
              className="block w-full p-3 text-gray-700 text-sm"
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              onClick={() => console.log("Submit button clicked")}
              className="bg-purple-600 hover:bg-pink-600 shadow-2xl shadow-purple-600 hover:shadow-pink-600 text-white font-bold py-2 px-4 rounded-full "
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
