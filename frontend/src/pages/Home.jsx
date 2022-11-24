import React, { useEffect,useState } from 'react'
const API_URL ="https://goquotes-api.herokuapp.com/api/v1/random?count=1&type=motivational";

function Home() {
    const [quote, setQuote] = useState({})

    const getQuote = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setQuote(data.quotes[0])
    }
    useEffect(() => {
        getQuote()
       }, []);
  return (
    <div className='flex h-screen'>
      <div className='m-auto w-4/5 max-w-4xl'>
        <blockquote class="text-center text-xl italic font-semibold text-gray-900">
          <p>{quote.text}
          </p>
          <p className=' text-right'>- {quote.author}</p>
        </blockquote>
      </div>
    </div>
  )
}

export default Home
