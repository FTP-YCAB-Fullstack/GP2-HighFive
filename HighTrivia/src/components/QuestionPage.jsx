import React from 'react'

function QuestionPage () {
    return (
        <>
            <div className="bg-blue-500 w-screen h-screen flex justify-center items-center">
                <nav className="flex justify-end p-5 text-white text-xl absolute top-0 z-50 w-full">
                    <p>Mawar Melati</p>
                </nav>

                <div className="flex flex-col justify-center items-center w-2/3 h-2/3 py-12 bg-blue-400 rounded-2xl">
                    <div className="text-2xl">"In Need for Speed: Underground, what car does Eddie drive?"</div>
                    <div className="flex flex-wrap h-auto w-4/5 mt-8 justify-center items-center">
                        <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban A</button>
                        <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban B</button>
                        <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban C</button>
                        <button className="bg-white w-1/3 m-5 rounded-md px-7 py-3">Jawaban D</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionPage