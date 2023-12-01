import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Validation from "../../Components/Validation";
import { useDispatch } from 'react-redux';
import { setUser } from "../../Redux/authSlice";

const Sign_up = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Password: ''
    });
    const [errors, setErrors] = useState({})
    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    const handleInput = (event) => {
        const newObj = { ...values, [event.target.name]: event.target.value }
        setValues(newObj)
    }

    const dispatch = useDispatch();
    const handleValidation = (event) => {
        event.preventDefault();
        const validationErrors = Validation(values);

        if (Object.keys(validationErrors).length === 0) {
            // No validation errors, set the user in the Redux store
            dispatch(setUser(values));
        }

        setErrors(validationErrors);
    };

    return (
        <>
            <div className="lg:grid lg:grid-cols-2">
                <div className="">
                    <img
                        className="sm:w-first w-[773px] h-[900px]"
                        src="Group.png"
                        alt="banner"
                    ></img>
                </div>

                <div>
                    <div className="flex items-center justify-center pt-24">
                        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white lg:pl-6 pt-7 sm:px-6">
                            Account Signup
                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="p-3 sm:p-6">

                            <form onSubmit={handleValidation} className="justify-center items-center  bg-white rounded px-12 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <Input
                                        name={'FirstName'}
                                        id={'FirstName'}
                                        placeholder={'First Name'}
                                        onChange={handleInput}
                                    />
                                    {errors.FirstName && <p className="text-red-500">{errors.FirstName}</p>}
                                </div>
                                <div className="mb-4">
                                    <Input
                                        name={'LastName'}
                                        id={'LastName'}
                                        placeholder={'Last Name'}
                                        onChange={handleInput}
                                    />
                                    {errors.LastName && <p className="text-red-500">{errors.LastName}</p>}
                                </div>
                                <div className="mb-4">
                                    <Input
                                        name={'Email'}
                                        id={'Email'}
                                        placeholder={'Email'}
                                        onChange={handleInput}
                                    />
                                    {errors.Email && <p className="text-red-500">{errors.Email}</p>}
                                </div>
                                <div className="mb-4 relative">
                                    <select
                                        name="City"
                                        id="City"
                                        className="mt-1 p-2 border border-gray-500 text-[#494949] placeholder-[#494949] w-[426px] h-[64px] rounded-lg"
                                        onChange={handleInput}
                                    >
                                        <option value="" disabled selected>City</option>
                                        <option value="Karachi">Karachi</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Rawalpindi">Rawalpindi</option>
                                        <option value="Faisalabad">Faisalabad</option>
                                    </select>
                                </div>
                                <div className="mb-6 relative">
                                    <Input
                                        name={"Password"}
                                        id={'Password'}
                                        type={showPassword ? "text" : "password"}
                                        placeholder={'Password'}
                                        onChange={handleInput}
                                    />
                                    {errors.Password && <p className="text-red-500">{errors.Password}</p>}
                                    <div className="absolute top-5 right-4 font-semibold">
                                        <button
                                            type="button"
                                            onClick={handlePasswordToggle}
                                            className=" text-black cursor-pointer text-lg"
                                        >
                                            {showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <Button
                                        size='large'
                                        varient="formButton"
                                        className={'rounded-first'}
                                        onClick={handleValidation}
                                    >
                                        <Link to="/">Continue</Link>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign_up;