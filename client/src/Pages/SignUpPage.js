import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { registerUser } from "../Utils/server";
import { toast } from "react-toastify"


const SignUpPage = () => {
    const [progress, setProgress] = useState("personal_info");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDob] = useState("");
    const [country, setCountry] = useState("");
    const [Provience, setProvience] = useState("");
    const [district, setDistrcit] = useState("");
    const [Municiplity, setMunicipality] = useState("");
    const [Area, setArea] = useState("");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("")
    const address = {}
    const userDetails = {};

    const navigate = useNavigate();


    return (
        <div>
            <NavBar />
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  font-Poppins">

                    {
                        progress === "personal_info" && (
                            <div className="border w-full bg-slate-100 rounded-lg shadow-xl md:mt-0 sm:max-w-2xl xl:p-0 ">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                        Enter Your Personal Info
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={() => {
                                        setProgress("address_info")
                                    }}>

                                        <div className="flex justify-between ">
                                            <div>
                                                <label
                                                    for="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    onChange={(e) => { setFirstName(e.target.value) }}
                                                    type="text"
                                                    name="text"
                                                    id="firstname"
                                                    className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                                    required=""
                                                />
                                            </div>{" "}
                                            <div>
                                                <label
                                                    for="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    onChange={(e) => { setLastName(e.target.value) }}
                                                    type="text"
                                                    name="lastname"
                                                    id="email"
                                                    className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "

                                                    required=""
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-10 justify-between">
                                            <div>
                                                <label
                                                    for="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Date Of Birth
                                                </label>
                                                <input
                                                    onChange={(e) => { setDob(e.target.value) }}
                                                    type="date"
                                                    name="date"
                                                    id="date"
                                                    className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                                    required=""
                                                />
                                            </div>{" "}
                                            <div>
                                                <label
                                                    for="text"
                                                    className="block mb-2 text-sm font-medium text-gray-900"
                                                >
                                                    Age
                                                </label>
                                                <input
                                                    type="phone"
                                                    name="email"
                                                    id="email"
                                                    className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "

                                                    required=""
                                                />
                                            </div>
                                        </div>


                                        <div className="flex justify-end">  <button
                                            type="submit"
                                            className="hover:bg-slate-700 w-[100px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-300 text-slate-800"
                                        >
                                            Next
                                        </button></div>

                                    </form>
                                </div>
                            </div>

                        )
                    }
                    {progress === "final" && (
                        <div className="border w-full bg-slate-100 rounded-lg shadow-xl md:mt-0 sm:max-w-md xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Create and account
                                </h1>
                                <form onSubmit={async (e) => {
                                    e.preventDefault()
                                    userDetails['FirstName'] = firstName;
                                    userDetails['LastName'] = lastName;
                                    userDetails["DOB"] = DOB;
                                    userDetails["Address"] = address
                                    address.country = country;
                                    address.district = district;
                                    address.provience = Provience;
                                    address.municiplity = Municiplity;
                                    address.area = Area;
                                    address.contactNo = phone;
                                    userDetails["email"] = email;
                                    userDetails['password'] = password;
                                    const response = await registerUser(userDetails);
                                    if (response.status === 200) {
                                        toast.success(response.data.message)
                                        navigate("/");
                                    }
                                }}
                                    className="space-y-4 md:space-y-6" >
                                    <div>
                                        <label
                                            for="email"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            type="email"
                                            name="email"
                                            id="email"
                                            className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 "
                                        >
                                            Password
                                        </label>
                                        <input
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            for="confirm-password"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Confirm password
                                        </label>
                                        <input
                                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                                            type="confirm-password"
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="••••••••"
                                            className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500 ">
                                                I accept the{" "}
                                                <a
                                                    className="font-medium text-primary-600 hover:underline "
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-500 text-slate-800"
                                    >
                                        Create an account
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{" "}
                                        <Link
                                            to={"/signIn"}
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        >
                                            Login here
                                        </Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    )}
                    {progress === "address_info" && (
                        <div className="border w-full bg-slate-100 rounded-lg shadow-xl md:mt-0 sm:max-w-2xl xl:p-0 ">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                    Enter Your Address
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div className="flex justify-between ">
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Your Country
                                            </label>
                                            <select
                                                onChange={(e) => { setCountry(e.target.value) }}
                                                id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            >
                                                <option defaultValue>Choose a country</option>
                                                <option value="Nepal"> Nepal</option>
                                                <option value="India">India</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="China">China</option>
                                            </select>
                                        </div>{" "}
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Provience
                                            </label>
                                            <select
                                                onChange={(e) => { setProvience(e.target.value) }}
                                                id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            >
                                                <option selected>Choose a Province</option>
                                                <option value="Koshi Pradesh"> Koshi Pradesh</option>
                                                <option value="Madesh Pradesh">Madesh Pradesh</option>
                                                <option value="Lumbini Pradesh">Lumbini Pradesh </option>
                                                <option value="Karnali Pradesh">Karnali Pradesh</option>
                                                <option value="SudurPaschim Pradesh">SudurPaschim Pradesh</option>
                                                <option value="Gandaki Pradesh">Gandaki Pradesh</option>
                                                <option value="Bagmati Pradesh">Bagmati Pradesh</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex justify-between ">
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                District
                                            </label>
                                            <input
                                                onChange={(e) => { setDistrcit(e.target.value) }}
                                                type="text"
                                                name="email"
                                                id="email"
                                                className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                                required=""
                                            />
                                        </div>{" "}
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Municiplity
                                            </label>
                                            <input
                                                onChange={(e) => { setMunicipality(e.target.value) }}
                                                type="text"
                                                name="text"
                                                id="email"
                                                className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "

                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-10 justify-between">
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Area
                                            </label>
                                            <input
                                                onChange={(e) => { setArea(e.target.value) }}
                                                type="text"
                                                name="email"
                                                id="email"
                                                className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "
                                                required=""
                                            />
                                        </div>{" "}
                                        <div>
                                            <label
                                                for="text"
                                                className="block mb-2 text-sm font-medium text-gray-900"
                                            >
                                                Contact No.
                                            </label>
                                            <input
                                                onChange={(e) => { setPhone(e.target.value) }}
                                                type="phone"
                                                name="email"
                                                id="email"
                                                className=" border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5 "

                                                required=""
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-between">
                                        <button onClick={() => {
                                            setProgress("personal_info")
                                        }}
                                            type="button"
                                            className="hover:bg-slate-500 w-[100px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-300 text-slate-800"
                                        >
                                            Previous
                                        </button>
                                        <button onClick={() => {

                                            setProgress("final")
                                        }}
                                            type="button"
                                            className="hover:bg-slate-500 w-[100px] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-slate-300 text-slate-800"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default SignUpPage;


