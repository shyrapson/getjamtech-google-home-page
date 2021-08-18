import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Google from '../components/images/Google.png'
import Link from 'next/link';
import style from "../styles/Layout.module.css"
import { useRouter } from 'next/router'


function Main() {
    const Loader = useRef()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        const term = Loader.current.text
        router.push(`https://www.google.com/search?q=${term}`)
    }
    return (
        < div >
            <div className="flex justify-center mb-5 ">
                <Image className="" src={Google} alt="" srcset="" />
            </div>

            <form className={`${style.inputWrapper} border-gray-400 border mt-5 w-auto  md:hover:border-gray-200
             md:hover:shadow-xl  h-12 md:h-10 flex items-center justify-center mx-3 px-4 py-5
             rounded-3xl mt-5 md:w-5/12 md:m-auto `} >
                <svg focusable="false" className={style.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9AA0A6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                <input type="text" ref={Loader} className="outline-none font-medium
                  pr-3 pl-3 text-sm md:text-base md:w-full"  required />
                <svg className={style.searchIcon} focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
            </form>

            <div className=" w-3/6 mx-auto flex justify-center text-sm items-center my-8 h-11">
                <button className="py-2 px-3 hover:bg-gray-100 rounded hover:shadow mx-2 bg-gray-50" onClick={handleSubmit}>Google Search</button>
                <button className="py-2 px-3 hover:bg-gray-100 rounded hover:shadow bg-gray-50 mx-2">I&apos;m feeling Lucky</button>
            </div>

            <div className=" w-11/12 mx-auto flex justify-center items-center mt-5 md:w-2/6">
                <p className="pr-3 text-sm">Google offered in:</p>
                <div className={`${style.lang}`}>
                    <Link href="#">Hausa</Link>
                    <Link href="#">Igbo</Link>
                    <Link href="#">Èdè Yorùbá</Link>
                    <Link href="#">Nigerian Pidgin</Link>
                </div>
            </div>
        </div>

    )
}

export default Main
