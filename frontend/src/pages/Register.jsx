import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Password mismatch')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="w-3/4 text-2xl mt-14 mx-auto flex flex-col">
      <section>
        <h1 className="flex flex-row w-auto h-16 justify-center text-4xl font-semibold">
          <FaUser className="mr-2 mt-1" /> Register
        </h1>
        <p className="text-center">Please create an account</p>
      </section>
      <section className=" flex justify-center mt-10 w-full">
        <form
          onSubmit={onSubmit}
          className="flex flex-col justify-center w-3/4"
        >
          <input
            className="shadow appearance-none border rounded w-full mb-6 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={'text'}
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
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
          <input
            className="shadow appearance-none border rounded w-full mb-6 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type={'password'}
            id="password2"
            name="password2"
            value={password2}
            placeholder="Enter your password again"
            onChange={onChange}
          />
          <div class="flex items-center justify-center">
            <button
              class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
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

export default Register
