import React, { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../Store/userSlice";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [type, setType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const loggedInUser = useSelector((state) => state.auth);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const user = {}
    user["email"] = email;
    user["password"] = password;
    dispatch(logIn(user)).then((res) => {
      if (res.payload.status===200) {
        navigate("/")
      }

    })

  };



  return (
    <div className="font-Poppins flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={SubmitHandler}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input onChange={(e) => { setEmail(e.target.value) }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2 flex">
              <input onChange={(e) => { setPassword(e.target.value) }}
                id="password"
                name="password"
                type={type}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
              <span className="cursor-pointer flex justify-around items-center">
                {type === "password" ? (
                  <FaEyeSlash
                    onClick={() => {
                      setType("text");
                    }}
                    className="absolute mr-10 "
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setType("password");
                    }}
                    className="absolute mr-10"
                  />
                )}
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <Link
            to={'/signUp'}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
          >
            {" "}
            Create new account!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
