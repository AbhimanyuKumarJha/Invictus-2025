"use client"
import { BASEURL } from '@/lib/BASE_URL'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {

    const router = useRouter()

    const [formData, setFormData] = useState({
        email: "", password:""
    })

    const [error, setError] = useState("")


    const submitForm = async (e) => {
        e.preventDefault()
        const { email, password } = formData
        if (!email.trim() || !password.trim()) {
            setError("Please fill all the fields")
        }

        else {
            setError("")
            const res = await fetch(BASEURL+"/api/auth/login", { headers: { "Content-Type": "application/json" }, credentials: "include" ,method: "POST", body: JSON.stringify(formData) })
            const { success, message, token } = await res.json()


            if (success) {
                console.log(token)
                console.log("logged in yo")
                console.log(message)
                router.push("/")
            }
            else {
                setError(message)
            }
        }
    } 

    return (
        <div className="visible-delay flex flex-col h-[90%] items-center sm:items-start justify-start text-black overflow-auto z-[2] px-5 sm:px-24">
            <div className="flex flex-col items-start pt-10 md:pt-0 md:justify-center w-full h-full">
                <h1
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                >
                    Login
                </h1>

                {
                    error && (<p className='text-[#DE1B19]'>{error}</p>)
                }

                <form onSubmit={submitForm} className='mt-5 flex flex-col items-center justify-center w-[100%] sm:w-[75%] md:w-[60%] lg:w-[45%] xl:w-[40%]'>

                    <input type="text" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder='Enter your email' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder='Enter your password' className='bg-[#f7f2e4] my-2 w-full px-3 py-4 rounded-md outline-none hover:scale-[1.03] duration-500 font-jmh' />
                    
                    <button type="submit" className='mt-5 px-3 py-4 bg-black hover:scale-[1.03] duration-300 text-white text-xl w-full rounded-md'>Submit</button>
                    <p className='mt-3'>Don't have an account ? <Link href="/signup" className='text-[#DE1B19]'>Signup Now</Link></p>
                </form>
            </div>
        </div>
    )
}

export default page