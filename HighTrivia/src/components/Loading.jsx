import React from "react"
import Image from '../assets/Loading.gif'

function Loading () {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
            <img src={Image} alt="gambar" style={{width: 150, height: 150}}/>
            </div>
        </>
    )
}

export default Loading