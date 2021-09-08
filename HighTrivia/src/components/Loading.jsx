import React from "react"
import '../css/loading.css'
import Image from '../assets/Loading.gif'

function Loading () {
    return (
        <>
            <div className="flex h-screen justify-center items-center">
            <img src={Image} alt="gambar"/>
            </div>
        </>
    )
}

export default Loading