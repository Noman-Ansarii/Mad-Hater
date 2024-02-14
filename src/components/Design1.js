import React from 'react'
import IMG from '../images/Desgin.png';

function Design1() {
  return (
    <>
      <div className="container-fluid">
        <div className="container Design1">
          <h1 className="container text" data-aos="zoom-in">Collaborations</h1>
          <div className="row align-item-center">
            <div className="Div1 col-lg-8" data-aos="zoom-in-left">
              <h1>01<span>Design Project</span></h1>
              
              <div className="container inner-div">
                <div className="circle">
                  <div className="Div-Of-Circles"></div>
                  <div className="Div-Of-Circles"></div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nesciunt fugit natus recusandae eaque, praesentium nobis, minima qui sint repellat ipsum. Excepturi reprehenderit labore rem.</p>
              </div>
            </div>
            <div className="col-lg-4" data-aos="zoom-in-right">
              <img class="img-thumbnail img-t" src={IMG} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Design1
