import React from 'react'
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import GoalForm from '../components/GoalForm'

function Dashboard() {
  const navigate = useNavigate()

  const {user} = useSelector((state)=>state.auth)

  useEffect(()=>{
    if (!user) {
      navigate('/login')
    }
  },[user,navigate])

  return <div className="text-center text-2xl mt-20">
    <section>
        <h1 className="flex flex-row w-auto h-16 justify-center text-4xl font-semibold">
           Welcome {user&&user.name}
        </h1>
        <p className="text-center">Goals:</p>
    </section>
    <GoalForm/>
  </div>
}

export default Dashboard
