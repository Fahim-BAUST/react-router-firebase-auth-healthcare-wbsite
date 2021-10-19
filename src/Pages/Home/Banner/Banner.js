import React from 'react';

const Banner = () => {

    return (
        <div>
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="https://i.ibb.co/7277kdz/pexels-pixabay-247786.jpg" className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1 fw-bold bg-white">An Advance Medicine Practice</h5>

                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://i.ibb.co/wLy0Q4F/pexels-edward-jenner-4033148-Copy-Copy.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1 fw-bold bg-white">Dedication & Commitment</h5>

                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/WfPR6Tb/pexels-rodnae-productions-6129052-Copy.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="fs-1 fw-bold bg-white">We Have The Finest Physysians</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Banner;