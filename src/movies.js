import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GetMovie, DeleteMovieById } from "./api";

function Movies() {

    let [userData, setuserData] = useState([])

    useEffect(async () => {
        let users = await GetMovie();
        setuserData(...userData, users.data)
        console.log("Mounted")
    }, [])

    let history = useHistory();


    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        userData.map((user) => {
                            return (

                                <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-5">
                                    <div class="card test-card shadow-sm">
                                        <div class="card-header d-flex flex-row justify-content-between bg-danger text-light">
                                            <h5>
                                                <i class="devicon-javascript-plain"></i> <span class="test-topic">{user.moviename}</span>
                                            </h5>
                                            <span class="score-board has-result"><strong>rs {user.fair}</strong></span>
                                        </div>
                                        <div class="card-body">
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Language:{user.language}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Date:{user.date}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Time:{user.time}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Theater:{user.theater}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Place:{user.place}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Seats:{user.seats}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2 ">
                                            <button  onClick={async () => {
                                                    history.push(`/addmovies`);
                                                }} class="btn btn-outline-danger up-lift btn-sm">Add Movie</button>
                                                <button  onClick={async () => {
                                                    await DeleteMovieById(user._id);
                                                    history.push(`/movies`);
                                                }} class="btn btn-outline-danger up-lift btn-sm float-right">Delete Movie</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Movies;