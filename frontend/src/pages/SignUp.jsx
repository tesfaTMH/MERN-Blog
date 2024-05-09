import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
        <div className="flex-1 g-5">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-green-600 to-red-700 rounded-lg text-white ">
              Tesfamichael's
            </span>
            Blog
          </Link>
          <p className="text-sm m-5">
            This a demon Blog for practicing MERN blog react app development.
            Feel free to Signup and add your own blog
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Enter your username: " />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Enter your email: " />
              <TextInput type="email" placeholder="Email" id="email" />
            </div>
            <div>
              <Label value="Enter your Password: " />
              <TextInput type="password" placeholder="password" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link className="text-blue-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
