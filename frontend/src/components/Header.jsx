import React from 'react'
import { FaSignInAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.auth)

  const onLogout = ()=> {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className="flex flex-row w-full h-19 border-b border-gray-300 px-5 align-middle sticky font-semibold text-xl">
      <div className="mr-auto py-6">
        <Link to="/">GoalSetter</Link>
      </div>
      <ul className="ml-auto flex flex-row w-auto">
        {user ? (
          <>
          <li className="w-auto mx-2 py-6">
          <Link to="/" className="flex flex-row">
            <FaUser className="mr-2 mt-1" /> My Dashboard
          </Link>
        </li>
          <li className="w-auto mx-2 py-6">
            <button onClick={onLogout} className='flex flex-row'>
              <FaSignInAlt className="mr-2 mt-1"/> Logout
            </button>
        </li>
        </>
        ) : (
          <>
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
          </>
        )}
        
      </ul>
    </header>
  )
}

export default Header
