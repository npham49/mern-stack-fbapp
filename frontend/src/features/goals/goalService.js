import axios from 'axios'

const API_URL = '/api/goals/'

//add goals
const createGoal = async (goalData,token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL,goalData,config)

    return response.data
}

//get user's goals
const getGoals = async (userData) =>{
    const response = await axios.get(API_URL,userData)

    return response.data
}

const goalService = {
    createGoal,
    getGoals
}

export default goalService