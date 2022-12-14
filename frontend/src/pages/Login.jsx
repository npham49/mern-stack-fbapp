import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaSignInAlt } from 'react-icons/fa'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

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
      navigate('/dashboard')
    }

    dispatch(reset)
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    //prevent the default submit action that the form would take
    //instead, dispatch the login data to axios in auth
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
    console.log(message)
  }

  if (isLoading) {
    return <Spinner />
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
          {message && (
            <div
              class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <div>
                <span class="font-medium">{message}!</span> Try again!
              </div>
            </div>
          )}

          <div class="flex items-center justify-center">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() =>
                setFormData({
                  email: '',
                  password: '',
                })
              }
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
