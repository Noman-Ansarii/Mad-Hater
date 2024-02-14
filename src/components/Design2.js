import React from 'react'
import IMG from '../images/2nd.png';

function Desgin2() {
    return (
        <>
            <div className="container-fluid">
                <div className="conatiner Design2">
                    <div className="row align-item-center">
                        <div className="col-lg-4" data-aos="zoom-in-right">
                            <img class="img-thumbnail img-t" src={IMG} alt="" />
                        </div>
                        <div className="Div2 col-lg-8" data-aos="zoom-in-left">
                            <h1>02 <span>Desgin Project</span></h1>
                            <div className="inner-div">
                                <div className="circle">
                                    <div className="Div-Of-Circles">
                                    </div>
                                    <div className="Div-Of-Circles">
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt fugit natus recusandae eaque, praesentium nobis, minima qui sint repellat ipsum. Excepturi reprehenderit labore rem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Desgin2
