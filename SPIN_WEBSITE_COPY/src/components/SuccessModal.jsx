import React from 'react';

const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 bg-[#FFFFFF1A] bg-opacity-100 overflow-y-auto h-full w-full z-99">
            <div className="relative top-20 mx-auto p-5 w-96 shadow-lg rounded-md bg-[#FFFFFF1A] backdrop-blur-lg">
                <div className="mt-3 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                        <svg
                            className="h-6 w-6 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <h3 className="text-lg leading-6 font-medium text-white">Success!</h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-200">
                            Your request has been received successfully.
                        </p>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal