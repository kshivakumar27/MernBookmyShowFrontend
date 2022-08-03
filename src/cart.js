import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GetUserByEmail ,GetMovieById,PostTicket, UpdateSeats} from "./api";

function Cart(props){

    let x=props.match.params.id.split("+");
    console.log(x[0])
    console.log(x[1])
    let history = useHistory();

    let [userData, setuserData] = useState([])
    let [movieData,setmovieData]=useState([])
    let [seats,setSeats]=useState("");

    useEffect(async () => {
        let users = await GetUserByEmail(x[1]);
        setuserData(...userData, users.data)
        console.log("Mounted")
    }, [])

    console.log(userData)


    useEffect(async () => {
        let users = await GetMovieById(x[0]);
        setmovieData(...movieData, users.data)
        console.log("Mounted")
    }, [])
    
    let ticket={
        username:userData.username,
        moviename: movieData.moviename,
        time:movieData.time,
        date:movieData.date,
        totalseats:seats,
        total:movieData.fair*seats,
        place:movieData.place,
        theater:movieData.theater
    }
    console.log(movieData)

    return(
        <>
        <div class="container mt-5">
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>{userData.username} Cart</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await PostTicket(ticket);
                                setSeats("");
                                await UpdateSeats(x[0],{seats:(movieData.seats-seats)})
                                history.push(`/usertickets/${userData.username}`)
                            }}>
                            

                                <div class="form-group text-light ">
                                   <h4>Movie Name : {movieData.moviename}</h4>
                                </div>

                                <div class="form-group text-light ">
                                   <h4>Movie Time : {movieData.time}</h4>
                                </div>

                                <div class="form-group text-light ">
                                   <h4>Movie Date : {movieData.date}</h4>
                                </div>
                                
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-sort-numeric-up"></i></span>
                                    </div>
                                    <input type="Number" class="form-control" placeholder="No of seats" required min="1" value={seats} onChange={(e) => {
                                        setSeats(e.target.value);
                                    }}  />
                                </div>
                                <div class="form-group text-light ">
                                   <h4>Total = rs {movieData.fair*seats}</h4>
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Buy" class="btn float-right btn-danger" />
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;