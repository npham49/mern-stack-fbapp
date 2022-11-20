import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'

function GoalForm() {
  const[text,setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e)=>{
    e.preventDefault()


    dispatch(createGoal({text}))
    setText('')
  }
  return (
    <div className="w-3/4 text-2xl mt-14 mx-auto flex flex-col">
      <section className="w-full flex justify-center mt-10">
        <form onSubmit={onSubmit} className="flex flex-col justify-center w-3/4">
          <label className='text-left my-5'> New Goal</label>
          <input
            className="shadow appearance-none border rounded w-full mb-6 py-4 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type='text'
            id="text"
            name="text"
            value={text}
            placeholder="Enter goal"
            onChange={(e)=>setText(e.target.value)}
          />
          <div class="flex items-center justify-center">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mr-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Goal
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Reset Goal
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default GoalForm