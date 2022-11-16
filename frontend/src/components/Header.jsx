import React from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex flex-row w-full h-19 border-b border-gray-300 px-5 align-middle sticky font-semibold text-xl">
      <div className="mr-auto py-6">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className="ml-auto flex flex-row w-auto">
        <li className="w-auto mx-2 py-6">
          <Link to="/login" className="flex flex-row">
            <FaSignInAlt className="mr-2 mt-1" /> Login
          </Link>
        </li>
        <li className="w-auto mx-2 py-6">
          <Link to="/register" className="flex flex-row">
            <FaUser className="mr-2 mt-1" /> Register
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
