import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../../Components/Input/Index";
import { Button } from "../../Components/Button/Index";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectUser } from "../../Redux/authSlice";

const Login = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };
    const [showPassword, setShowPassword] = useState(false);
    const [modal, setModal] = useState(false);

    const handlePasswordToggle = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <div className="lg:grid lg:grid-cols-2">
                <div className="">
                    <img
                        className="sm:w-full w-[773px] h-[740px]"
                        src="Group.png"
                        alt="banner"
                    ></img>
                </div>

                <div>
                    <div className="flex items-center justify-center pt-24">
                        <h1 className="font-bold text-3xl sm:text-4xl dark:text-white lg:pl-6 pt-7 sm:px-6">
                            Account Login
                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="p-3 sm:p-6">

                            <form
                                onSubmit={onSubmit}
                                className="justify-center items-center  bg-white rounded px-12 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <Input
                                        name={'Email'}
                                        id={'Email'}
                                        placeholder={'Email'}
                                        className={""} />
                                </div>
                                <div className="mb-6 relative">
                                    <Input
                                        id={'password'}
                                        type={showPassword ? "text" : "password"}
                                        placeholder={'Password'} />
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
                                        type="submit"
                                        size='large'
                                        varient="formButton"
                                        className={'rounded-full'}
                                        onClick={() => setModal(true)}
                                    >
                                        Login
                                    </Button>

                                </div>
                            </form>
                            <p className='text-center mt-3'>Don't have an account? <Link className='text-sky-500' to={'/signup'}> Sign up here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <NewTask setModal={setModal} modal={modal} />
        </>

    )
}

export default Login;

const NewTask = ({ modal, setModal }) => {
    const user = useSelector(selectUser);
    return (
        <>
            <div id="authentication-modal" tabindex="-1"
                className={`fixed pt-0 pb-0 pl-0 pr-0 w-full h-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${modal ? '' : 'hidden'}`}>
                <div className="flex items-center justify-center h-screen bg-black bg-cover md:bg-opacity-50">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-100" style={{ width: '756px', height: '501px' }}>
                        <div className="flex items-center justify-center pt-40">
                            <table className="items-center justify-center w-2/3 text-sm text-center text-black dark:text-gray-400">
                                <thead className="text-xs text-white uppercase bg-[#FF8844] dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            First Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Last Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            City
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="font-bold bg-white border-b text-sm dark:bg-gray-800 dark:border-gray-700">
                                        <td>{user?.FirstName}</td>
                                        <td>{user?.LastName}</td>
                                        <td>{user?.Email}</td>
                                        <td>{user?.Password}</td>
                                        <td>{user?.City}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col items-center justify-between pt-10">
                            <Button onClick={() => setModal(false)}
                                type="submit"
                                size="large"
                                className="w-32 h-10 font-bold "
                                varient="formButton"
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}