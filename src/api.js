import axios from "axios";

export function Postlogin(data){
    return axios.post(`http://localhost:5001/login`,data)
}

export function Postregister(data){
    return axios.post(`http://localhost:5001/register`,data)
}

export function Postalogin(data){
    return axios.post(`http://localhost:5001/alogin`,data)
}

export function Postaregister(data){
    return axios.post(`http://localhost:5001/aregister`,data)
}

export function PostMovie(data){
    return axios.post(`http://localhost:5001/movies`,data)
}

export function PostTicket(data){
    return axios.post(`http://localhost:5001/ticket`,data)
}

export function UpdateSeats(id,data){
    return axios.put(`http://localhost:5001/movies/${id}`,data)
}

export function GetMovie(){
    return axios.get(`http://localhost:5001/movies`)
}

export function GetMovieById(id){
    return axios.get(`http://localhost:5001/movies/${id}`)
}

export function GetUserByEmail(email){
    return axios.get(`http://localhost:5001/users/${email}`)
}

export function GetTicketByName(username){
    return axios.get(`http://localhost:5001/ticket/${username}`)
}

export function GetTickets(){
    return axios.get(`http://localhost:5001/tickets`)
}

export function DeleteMovieById(id){
    return axios.delete(`http://localhost:5001/movies/${id}`)
}