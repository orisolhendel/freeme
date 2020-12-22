import axios from 'axios'

const api = axios.create({
    /*baseURL: 'http://localhost:3000/api',*/
    baseURL: 'https://samethere.herokuapp.com/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

export const insertPlayer = payload => api.post(`/player`, payload)
export const getAllPlayers = () => api.get(`/players`)
export const updatePlayerById = (id, payload) => api.put(`/player/${id}`, payload)
export const deletePlayerById = id => api.delete(`/player/${id}`)
export const getPlayerById = id => api.get(`/player/${id}`)

export const insertQuestion = payload => api.post(`/question`, payload)
export const getAllQuestions = () => api.get(`/questions`)
export const updateQuestionById = (id, payload) => api.put(`/question/${id}`, payload)
export const deleteQuestionById = id => api.delete(`/question/${id}`)
export const getQuestionById = id => api.get(`/question/${id}`)

export const insertAnswer = payload => api.post(`/answer`, payload)
export const getAllAnswers = () => api.get(`/answers`)
export const updateAnswerById = (id, payload) => api.put(`/answer/${id}`, payload)
export const deleteAnswerById = id => api.delete(`/answer/${id}`)
export const deleteAllAnswers = () => api.delete(`/answers`)
export const getAnswerById = id => api.get(`/answer/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,

    insertPlayer,
    getAllPlayers,
    updatePlayerById,
    deletePlayerById,
    getPlayerById,
    
    insertQuestion,
    getAllQuestions,
    updateQuestionById,
    deleteQuestionById,
    getQuestionById,

    insertAnswer,
    getAllAnswers,
    updateAnswerById,
    deleteAnswerById,
    deleteAllAnswers,
    getAnswerById,
}

export default apis