import React, { useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoals} from '../features/goals/goalSlice'
import {reset} from '../features/auth/authSlice'

function Dashboard() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const {user} = useSelector((state)=>state.auth)
  const {goals,isLoading,isError,message} = useSelector((state)=>state.goals)


  // I found that the dispatch(getGoals()) was causing this error, because when we
  // logout the authreset in the header.tsx is already calling the reset from the 
  //authSlice. Adding an else clause after the if (!user) to wrap the getGoals 
  //dispatch also resolves this error. If you don't call the goalSlice's reset
  // function, the goals will persist in the localstorage after logging out.
  useEffect(()=>{
    

    if (!user) {
      navigate('/login')
    } else {
      dispatch(getGoals())
    }

    if(isError){
      console.log(message)
    }
    
    return () => {
      dispatch(reset())
    }
  },[user, navigate, isError, dispatch, message])

  // const deleteItem = (goal) => {
  //   if (window.confirm("Are you sure you want to delete "+ goal.text+' ?')===true) {
  //     dispatch(deleteGoal(goal._id))
  //   }
  // }

  if(isLoading) {
    return <Spinner/>
  }
  return <div className="text-2xl mt-20">
    <section>
        <h1 className="flex flex-row w-auto h-16 justify-center text-center  text-4xl font-semibold">
           Welcome {user&&user.name}
        </h1>
    </section>
    <GoalForm/>
    <div className="text-xl m-4">
      {goals.length>0 ?(
        <div className="flex flex-col w-full justify-center items-center ">
          {goals.filter(goal => goal.user === user._id).map((goal)=>(
            <div key= {goal._id} className="m-4 w-1/2 border border-slate-200 drop-shadow-md bg-slate-200" >
              <Link to={'/goal/'+goal._id}>
                <div className="w-full p-4" > 
                  {goal.text}
                  {/* <button onClick={deleteItem(goal)} className='absolute inset-y-0 right-0 w-10 '><FaTimes/></button> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (<h3> You have not set any goals</h3>)}
    </div>
  </div>
}

export default Dashboard
