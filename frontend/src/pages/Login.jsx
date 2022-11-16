import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-3/4 text-2xl mt-14 mx-auto flex flex-col">
      <section>
        <h1 className="flex flex-row w-auto h-16 justify-center text-4xl font-semibold">
          <FaSignInAlt className="mr-2 mt-1" /> Login
        </h1>
        <p className="text-center">Enter your credentials</p>
      </section>
      <section className=" flex justify-center mt-10 w-full">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center w-3/4"
        >
          <input
            className="shadow appearance-none border rounded w-full mb-6 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={'text'}
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <input
            className="shadow appearance-none border rounded w-full mb-6 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={'password'}
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={onChange}
          />
          <div class="flex items-center justify-center">
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Form
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
