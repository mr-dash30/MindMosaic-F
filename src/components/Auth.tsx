import React, { useState } from "react";
import { SignupInput } from "@mr-dash/mindmosaic-zod";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";


export function Auth({ type }: { type: "signup" | "signin" }) {
    const [formInputs, setFormInputs] = useState<SignupInput>({
        username: "",
        email: "",
        password: "",
    });
    const Navigate = useNavigate();

    const handleSubmit = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (type === "signup") {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signup`,
                    formInputs
                );

                const jwt = response.data.token;
                localStorage.setItem("token", jwt);
                Navigate("/blog/page/1")
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const response = await axios.post(
                    `${BACKEND_URL}/api/v1/user/signin`,
                    formInputs
                );
                const jwt = response.data.token;
                localStorage.setItem("token", jwt);
                Navigate("/blog/page/1")
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <>

            <div className="flex items-center justify-center h-screen">
                <div
                    className=" bg-slate-100 py-20 px-10 rounded-lg shadow-2xl w-full max-w-lg" >
                    <h1 className="text-4xl font-semibold  font-serif pb-3">
                        {type == "signin" ? "Sign-in to account" : "Create an account"}
                    </h1>
                    <p className="text-lg text-slate-400 pb-5">
                        {type == "signin" ? "Don't have an account?" : "Already have an account?"}
                        <Link to={type == "signin" ? "/signup" : "/signin"} className="text-slate-800 font-semibold underline">
                            {type == "signin" ? "Sign up" : "Sign in"}
                        </Link>
                    </p>
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-xl font-semibold">
                                {type == "signin" ? "Username/Email" : "Username"}
                                <span className=" text-red-500">    *</span>
                            </label><input
                                type="text"
                                id="username"
                                placeholder="Phoenix"
                                className="w-full rounded-lg px-4 py-2"
                                onChange={(e) =>
                                    setFormInputs({ ...formInputs, username: e.target.value })
                                } />
                        </div>
                        {type == "signin" ? null :
                            <div>
                                <label htmlFor="email" className="block text-xl font-semibold">
                                    Email
                                    <span className=" text-red-500">    *</span>
                                </label>
                                <input type="email"
                                    id="email"
                                    placeholder="Phoenix.writes@mindmosaic.com"
                                    className="w-full rounded-lg px-4 py-2"
                                    onChange={(e) => setFormInputs({ ...formInputs, email: e.target.value })}
                                />
                            </div>
                        }


                        <div>
                            <PasswordInput
                                setFormInputs={setFormInputs}
                                formInputs={formInputs}
                            />
                        </div>

                        <div>
                            <input className="rounded-lg size-4" type="checkbox" id="terms" />
                            <label htmlFor="terms" className="text-slate-800 font-semibold px-3" >
                                I agree to the terms and conditions
                            </label>
                        </div>

                        <div className="pt-5">
                            <button type="button" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)} className="w-full bg-slate-800 text-white font-semibold rounded-lg px-4 py-2">
                                {type == "signin" ? "Sign In" : "Sign Up"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

const PasswordInput = ({
    setFormInputs,
    formInputs,
}: {
    setFormInputs: (inputs: SignupInput) => void;
    formInputs: SignupInput;
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {

        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <label htmlFor="password" className="block text-xl font-semibold">
                Password
                <span className="text-red-500">   *</span>
            </label>
            <div className="flex items-center">
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="**********"
                    className="w-full rounded-lg px-4 py-2 pr-10"
                    onChange={(e) =>
                        setFormInputs({ ...formInputs, password: e.target.value })
                    }
                />
                <button
                    onClick={togglePasswordVisibility}
                    className="text-slate-800 font-semibold absolute inset-y-0 right-0 flex items-center px-3 pt-6 focus:outline-none"
                >
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {showPassword ? (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z"
                                />
                            </>
                        ) : (
                            <>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12s1.5-2 3-2 3 2 3 2-1.5 2-3 2-3-2-3-2z"
                                />
                            </>
                        )}
                    </svg>
                </button>
            </div>
        </div>
    );
}
