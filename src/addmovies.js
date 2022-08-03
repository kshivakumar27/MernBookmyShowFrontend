import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { PostMovie } from "./api";
function Addmovies(){

    let [moviename,setmoviename] =useState("");
    let [language, setlanguage] = useState("");
    let [date, setdate] = useState("");
    let [time,settime]=useState("");
    let [fair,setfair]=useState("");
    let [theater,settheater]=useState("");
    let [place,setplace]=useState("");
    let [seats,setseats]=useState("");

    let userData = { moviename,language, date ,time,fair,theater,place,seats}
    let history=useHistory();
    
    return(
        <>
         <div class="container mt-5">
             <div className="col-2 float-right">
                 <button className="btn btn-danger " onClick={()=>{
                     history.push(`/movies`);
                 }}>Movies</button>
             </div>
             <div className="col-2 float-right">
                 <button className="btn btn-danger " onClick={()=>{
                     history.push(`/admintickets`);
                 }}>tickets</button>
             </div>
             
                <div class="d-flex justify-content-center h-100">
                    <div class="card1">
                        <div class="card-header">
                            <h3>Add Movie</h3>
                        </div>
                        <div class="card-body">
                            <form onSubmit={async (e) => {
                                e.preventDefault();
                                await PostMovie(userData);
                                setlanguage("");
                                setdate("");
                                setmoviename("");
                                settime("");
                                setfair("");
                                settheater("");
                                setplace("");
                                setseats("");
                            }}>
                            <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-video"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Movie Name" required value={moviename} onChange={(e) => {
                                        setmoviename(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-language"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="language" required value={language} onChange={(e) => {
                                        setlanguage(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-theater-masks"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="Theater Name" required value={theater} onChange={(e) => {
                                        settheater(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-location-arrow"></i></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="place(city)" required value={place} onChange={(e) => {
                                        setplace(e.target.value);
                                    }}/>
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-calendar"></i></span>
                                    </div>
                                    <input type="date" class="form-control" placeholder="date" required value={date} onChange={(e) => {
                                        setdate(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-clock"></i></span>
                                    </div>
                                    <input type="time" class="form-control" placeholder="time"  required value={time} onChange={(e) => {
                                        settime(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-rupee-sign"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Ticket Fair"  required value={fair} onChange={(e) => {
                                        setfair(e.target.value);
                                    }} />
                                </div>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-rupee-sign"></i></span>
                                    </div>
                                    <input type="number" class="form-control" placeholder="Total seats"  required value={seats} onChange={(e) => {
                                        setseats(e.target.value);
                                    }} />
                                </div>
                                <div class="form-group">
                                    <input type="submit" value="Add Movie" class="btn float-right btn-danger" />
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

export default Addmovies;