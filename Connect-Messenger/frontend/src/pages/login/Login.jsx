import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showSplash, setShowSplash] = useState(true);
    const { loading, login } = useLogin();

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000); // Splash screen duration: 3 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    if (showSplash) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <style>
                    {`
                    @keyframes typing {
                        from {
                            width: 0;
                        }
                        to {
                            width: 100%;
                        }
                    }

                    @keyframes blink {
                        50% {
                            border-color: transparent;
                        }
                    }

                    .typing-animation {
                        animation: typing 2s steps(20, end), blink .75s step-end infinite;
                        overflow: hidden;
                        white-space: nowrap;
                        border-right: .15em solid white;
                        font-size: 2rem;
                        font-family: 'Playfair Display', serif;
                        color: white;
                    }
                    `}
                </style>
                <h1 className="text-2xl font-bold">
                    <span className="typing-animation">WELCOME  TO  CONNECT...</span>
                </h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto min-h-auto">
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
                    border-radius: 8px; /* Slightly less rounded corners */
                    width: 100%;
                    box-sizing: border-box;
                    color: white;
                    background-color: #1a1a1a; /* Dark background for input fields */
                }

                .animate-input::placeholder {
                    color: white; /* Placeholder color */
                }

                .animate-input:focus {
                    box-shadow: 0 0 10px rgba(148, 0, 211, 0.6); /* Purple shadow on focus */
                    border-color: #9400D3; /* Purple border on focus */
                    outline: none;
                }

                .animate-input:hover {
                    background-color: #9400D3; /* Vibrant purple on hover */
                }

                .loading-spinner {
                    width: 16px; /* Smaller width */
                    height: 16px; /* Smaller height */
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
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
                    <h1 className='text-3xl font-semibold text-center' style={{ color: 'black', fontFamily: "'Playfair Display', serif" }}>
                        <span className='text-[#98e43a] font-bold text-6xl'> Connect..</span>
                    </h1>

                    <form onSubmit={handleSubmit} className="mt-6">
                        <div>
                            <label className='label p-2'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Playfair Display', serif" }}>Username</span>
                            </label>
                            <input
                                type='text'
                                placeholder='Enter username'
                                className='animate-input'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            />
                        </div>

                        <div className="mt-4">
                            <label className='label'>
                                <span className='text-base label-text' style={{ color: 'white', fontFamily: "'Playfair Display', serif" }}>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='animate-input'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ fontFamily: "'Playfair Display', serif" }}
                            />
                        </div>
                        <Link to='/signup' className='text-sm mt-2 inline-block animate-link' style={{ color: 'white' }}>
                            {"Don't"} have an account?
                        </Link>

                        <div className="mt-4 flex justify-center">
                            <button
                                className={`animate-btn ${loading ? 'loading loading-spinner' : ''}`}
                                disabled={loading}
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    width: '100%',
                                    maxWidth: '200px',
                                    backgroundColor: '#9400D3' /* Bright purple for the login button */
                                }}
                            >
                                {loading ? (
                                    <svg className="loading-spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12 18V22" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.92999 4.92999L7.75999 7.75999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.24 16.24L19.07 19.07" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2 12H6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18 12H22" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4.92999 19.07L7.75999 16.24" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.24 7.75999L19.07 4.92999" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;





// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const { loading, login } = useLogin();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await login(username, password);
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>
//                     Login
//                     <span className='text-orange-500'> Connect</span>
//                 </h1>

//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-base label-text'>Username</span>
//                         </label>
//                         <input
//                             type='text'
//                             placeholder='Enter username'
//                             className='w-full input input-bordered h-10'
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
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
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <Link to='/signup' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
//                         {"Don't"} have an account?
//                     </Link>

//                     <div>
//                         <button className='btn btn-block btn-sm mt-2' disabled={loading}>
//                             {loading ? <span className='loading loading-spinner '></span> : "Login"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };
// export default Login;
