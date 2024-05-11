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
    <div className="h-screen w-1/2 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded p-8 m-4 w-full h-1/2 max-w-md"
      >
        <h2 className="text-3xl text-center mb-4">Login</h2>
        <div className="mb-4">
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Username"
            className="block w-full p-3 text-gray-700 text-sm"
          />
        </div>
        <div className="mb-4">
          <Input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="block w-full p-3 text-gray-700 text-sm"
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            onClick={() => console.log("Submit button clicked")}
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
