import React from 'react'

function Navigation () {
    return(
        <>
            <nav className="flex justify-between bg-gray-400 p-3 absolute top-0 z-50 w-full">
                <span className="text-white">Logo</span>
                <button className="bg-white px-3 rounded-md">Sign In</button>
            </nav>
            <div className="flex h-screen justify-center items-center">
                <div className="flex justify-center items-center flex-col justify-around h-2/5 w-1/2">
                <select className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
                    <option value="0">Anime</option>
                    <option value="1">Matematika</option>
                    <option value="2">Games</option>
                </select>
                <select className="flex bg-gray-400 w-2/3 justify-between py-4 px-5 rounded-lg text-white">
                    <option value="0">Easy</option>
                    <option value="1">Medium</option>
                    <option value="2">Hard</option>
                </select>
                <button className="bg-gray-400 py-4 px-8 rounded-lg text-white">Start</button>
                </div>
            </div>
        </>
    )
}

export default Navigation