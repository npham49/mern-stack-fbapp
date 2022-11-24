import React from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { deleteGoal} from '../features/goals/goalSlice'

function Goal() {
  let params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { goals } = useSelector((state) => state.goals)
  const goal = goals.find((item) => item._id === params.id)
  const deleteItem = (goal) => {
    if (window.confirm("Are you sure you want to delete "+ goal.text+' ?')===true) {
      dispatch(deleteGoal(goal._id))
      navigate('/')
    }
  }
  
  return (
    <div className="w-3/4 text-2xl mt-14 mx-auto flex flex-col">
      <div className="my-4 p-4 w-full border-slate-200 drop-shadow-md border bg-slate-200">
        <h3>{goal.text}</h3>
      </div>
      <div class="flex items-center justify-center">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add comment
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={()=>deleteItem(goal)}
        >
          Delete Goal
        </button>
      </div>
    </div>
  )
}

export default Goal
