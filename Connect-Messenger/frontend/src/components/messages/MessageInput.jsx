import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage("");
    };

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative flex items-center">
                <input
                    type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <a
                    href="https://chat.openai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 flex items-center"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT Logo" className="w-11 h-11" />
                </a>
                <button
                    type="submit"
                    className="flex items-center ml-2 p-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 h-10"
                >
                    {loading ? (
                        <div className="loading loading-spinner"></div>
                    ) : (
                        <BsSend color="white" size={24} />
                    )}
                </button>
            </div>
        </form>
    );
};

export default MessageInput;


// import { useState } from "react";
// import { BsSend } from "react-icons/bs";
// import useSendMessage from "../../hooks/useSendMessage";

// const MessageInput = () => {
//     const [message, setMessage] = useState("");
//     const { loading, sendMessage } = useSendMessage();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!message) return;
//         await sendMessage(message);
//         setMessage("");
//     };

//     return (
//         <form className="px-4 my-3" onSubmit={handleSubmit}>
//             <div className="w-full relative">
//                 <input
//                     type="text"
//                     className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
//                     placeholder="Send a message"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button
//                     type="submit"
//                     className="absolute inset-y-0 end-0 flex items-center pe-3"
//                 >
//                     {loading ? (
//                         <div className="loading loading-spinner"></div>
//                     ) : (
//                         <BsSend color="white" />
//                     )}
//                 </button>
//             </div>
//         </form>
//     );
// };
// export default MessageInput;
// ;

