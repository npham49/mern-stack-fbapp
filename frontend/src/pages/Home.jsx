import React, { useEffect,useState } from 'react'
import { getGoals} from '../features/goals/goalSlice'
import {useSelector,useDispatch} from 'react-redux'
const API_URL ="https://api.quotable.io/random?tags=widom|famous-quotes";

function Home() {
    const [quote, setQuote] = useState({})
    const dispatch = useDispatch()

    const {goals,isLoading,isError,message} = useSelector((state)=>state.goals)

    const getQuote = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        setQuote(data)
        console.log(quote)

    }
    useEffect(() => {
      dispatch(getGoals())
      
      getQuote()
       }, [isError, dispatch, message]);
  return (
    <div className='flex h-screen'>
      <div className='m-auto w-4/5 max-w-4xl'>
        <blockquote class="text-center text-xl italic font-semibold text-gray-900">
          <p>{quote.content}
          </p>
          <p className=' text-right'>- {quote.author}</p>
        </blockquote>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
