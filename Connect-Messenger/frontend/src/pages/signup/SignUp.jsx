import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div>
            <style>
                {`
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        box-shadow: 0 0 10px rgba(148, 0, 211, 0.4);
                    }
                    50% {
                        transform: scale(1.05);
                        box-shadow: 0 0 20px rgba(148, 0, 211, 0.6);
                    }
                    100% {
                        transform: scale(1);
                        box-shadow: 0 0 10px rgba(148, 0, 211, 0.4);
                    }
                }

                @keyframes click {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(0.95);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .animate-btn, .animate-input {
                    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    border: none;
                    color: white;
                    background-color: #9400D3; /* Bright purple color */
                    padding: 10px 20px;
                    cursor: pointer;
                    border-radius: 8px; /* Slightly less rounded corners */
                }

                .animate-btn:hover, .animate-input:hover {
                    animation: pulse 1.5s infinite;
                    background-color: #800080; /* Darker purple on hover */
                }

                .animate-btn:active, .animate-input:active {
                    animation: click 0.3s;
                }

                .animate-link {
                    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
                    color: #9400D3; /* Bright purple color */
                    cursor: pointer;
                }

                .animate-link:hover {
                    color: #800080; /* Darker purple on hover */
                    text-decoration: underline;
                }

                .animate-input {
                    transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, color 0.3s ease-in-out;
                    border: 1px solid #ccc;
                    padding: 10px;
                    border-radius: 8px; /* Slightly more rounded corners */
                    width: 100%;
                    box-sizing: border-box;
                    color: white;
                    background-color: #1a1a1a; /* Dark background for input fields */
                    box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.5), 
                                inset -2px -2px 5px rgba(255, 255, 255, 0.1);
                }

                .animate-input::placeholder {
                    color: white; /* Placeholder color */
                }

                .animate-input:focus {
                    box-shadow: 0 0 10px rgba(148, 0, 211, 0.6), 
                                inset 2px 2px 5px rgba(0, 0, 0, 0.5), 
                                inset -2px -2px 5px rgba(255, 255, 255, 0.1); /* Purple shadow on focus */
                    border-color: #9400D3; /* Purple border on focus */
                    outline: none;
                }

                .animate-input:hover {
                    background-color: #9400D3; /* Vibrant purple on hover */
                }
                `}
            </style>
            <div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-auto'>
                <div
                    className='w-full max-w-lg p-6 rounded-lg shadow-md'
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)', // Decreased opacity even more
                        borderRadius: '12px', /* Slightly less rounded corners */
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontFamily: "'Playfair Display', serif"
                    }}
                >
                    <h1 className='text-5xl font-semibold text-center' style={{ color: 'yellow', fontFamily: "'Noto Serif', serif" }}>
                        Sign Up
                    </h1>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Merriweather', serif" }}>Full Name</span>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Full Name'
                                className='animate-input'
                                value={inputs.fullName}
                                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                                style={{ fontFamily: "'Merriweather', serif" }}
                            />
                        </div>

                        <div className="mt-4">
                            <label className='label p-2'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Merriweather', serif" }}>Username</span>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter Username'
                                className='animate-input'
                                value={inputs.username}
                                onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                                style={{ fontFamily: "'Merriweather', serif" }}
                            />
                        </div>

                        <div className="mt-4">
                            <label className='label'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Merriweather', serif" }}>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='animate-input'
                                value={inputs.password}
                                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                style={{ fontFamily: "'Merriweather', serif" }}
                            />
                        </div>

                        <div className="mt-4">
                            <label className='label'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Merriweather', serif" }}>Confirm Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='animate-input'
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                                style={{ fontFamily: "'Merriweather', serif" }}
                            />
                        </div>

                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                        <Link to='/login' className='text-sm mt-2 inline-block animate-link' style={{ color: 'black' }}>
                            Already have an account?
                        </Link>

                        <div className="mt-4 flex justify-center">
                            <button
                                className={`animate-btn ${loading ? 'loading loading-spinner' : ''}`}
                                disabled={loading}
                                style={{
                                    fontFamily: "'Merriweather', serif",
                                    width: '100%',
                                    maxWidth: '200px',
                                    backgroundColor: '#9400D3' /* Bright purple for the signup button */
                                }}
                            >
                                {loading ? <span>Loading...</span> : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;





// import { Link } from "react-router-dom";
// import GenderCheckbox from "./GenderCheckbox";
// import { useState } from "react";
// import useSignup from "../../hooks/useSignup";

// const SignUp = () => {
//     const [inputs, setInputs] = useState({
//         fullName: "",
//         username: "",
//         password: "",
//         confirmPassword: "",
//         gender: "",
//     });

//     const { loading, signup } = useSignup();

//     const handleCheckboxChange = (gender) => {
//         setInputs({ ...inputs, gender });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await signup(inputs);
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Sign Up <span className='text-green-500'> </span>
//                 </h1>

//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Full Name</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='John Doe'
//                             className='w-full input input-bordered  h-10'
//                             value={inputs.fullName}
//                             onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
//                         />
//                     </div>

//                     <div>
//                         <label className='label p-2 '>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='johndoe'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.username}
//                             onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
//                         />
//                     </div>

//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Enter Password'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.password}
//                             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//                         />
//                     </div>

//                     <div>
//                         <label className='label'>
//                             <span className='text-base label-text'>Confirm Password</span>
//                         </label>
//                         <input
//                             type='password'
//                             placeholder='Confirm Password'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.confirmPassword}
//                             onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//                         />
//                     </div>

//                     <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

//                     <Link
//                         to={"/login"}
//                         className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
//                         href='#'
//                     >
//                         Already have an account?
//                     </Link>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
//                             {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default SignUp;
