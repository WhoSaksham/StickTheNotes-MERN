import React from "react";
import banner1 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner3.jpeg";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none my-auto d-md-block">
                            <h1 className="text-warning text-xl">Welcome To StickTheNotes</h1>
                            <p>Your very own notes on the cloud</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-warning text-xl">Security Guaranteed</h1>
                            <p>Your privacy and notes secured.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} className="d-block w-100" alt="" />
                        <div className="carousel-caption d-none d-md-block">
                            <h1 className="text-warning text-xl">Free to use</h1>
                            <p>StickTheNotes is a free platform to manage your notes.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom text-warning">
                    Features of StickTheNotes 😍
                </h2>
                <div className="row g-4 row-cols-1 row-cols-lg-3">
                    <div className="feature col mb-4">
                        <h3 className="text-secondary">Security Guaranteed 🔐</h3>
                        <p>
                            We ensure that your notes are highly secured in our database. Only you can see and access your notes and no one else.
                        </p>
                    </div>
                    <div className="feature col mb-4">
                        <h3 className="text-secondary">Notes on the cloud ☁</h3>
                        <p>
                            Your notes will be stored on the cloud and you will be able to
                            access them easily via your account's login credentials.
                        </p>
                    </div>
                    <div className="feature col mb-4">
                        <h3 className="text-secondary">Free to use 🆓</h3>
                        <p>
                            Create and manage your notes without a single penny. You can create any
                            number of notes you want for absolutely free.
                        </p>
                    </div>
                </div>
                <div className="container">
                    <h2 className="text-success text-center">What are you waiting for? Lets get started with StickTheNotes 🥳</h2>
                    <p className="text-center"><Link to="/signup"><button className="btn btn-warning  m-3 rounded shadow" style={{color: 'black', fontSize: 20}}>Start Sticking Your Notes</button></Link></p>
                </div>
            </div>
        </>
    );
};

export default Landing;