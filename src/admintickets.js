import React, { useEffect, useState } from "react";
import {GetTickets } from "./api";

function Adminticket() {

    let [userData, setuserData] = useState([])

    useEffect(async () => {
        let users = await GetTickets();
        setuserData(...userData, users.data)
        console.log("Mounted")

    }, [])

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
                                                <i class="devicon-javascript-plain"></i> <span class="test-topic">Tiket Details</span>
                                            </h5>
                                            <span class="score-board has-result"><strong>{user.moviename}</strong></span>
                                        </div>
                                        <div class="card-body">
                                        <div class="d-flex justify-content-between mt-2">
                                                <h5>name: {user.username}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Time: {user.time}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Date: {user.date}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Seats Booked: {user.totalseats}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Theater: {user.theater}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Place: {user.place}</h5>
                                            </div>
                                            <div class="d-flex justify-content-between mt-2">
                                                <h5>Total Amount: {user.total}</h5>
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
export default Adminticket;