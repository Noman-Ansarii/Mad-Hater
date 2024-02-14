import React from 'react'
import IMG1 from '../images/Page2.png'
import IMG2 from '../images/Page2.png'

function Design() {
  return (
    <>
      <div className="container-fluid Design4">
        <div className="container">
          <h1 className='Principals'>THE <span>PRINCIPALS</span></h1>
          <div className="row">
            <div className="col-lg-6 img-div4 d-flex">
              <div className="container">
                <img class="img-thumbnail Design4_IMG" src={IMG1} alt="" />
                <h2>TRICIA KEY</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque, delectus qui consequatur fugiat mollitia hic autem ut! </p>
              </div>
              <div className="container">
                <img class="img-thumbnail Design4_IMG" src={IMG2} alt="" />
                <h2>DENG SOON</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque, delectus qui consequatur fugiat mollitia hic autem ut! </p>
              </div>
            </div>
            <div className="col-lg-6 FleXOFCircle">
              <div className="circle4">
                <div className="Div-Of-Circles4">
                </div>
                <div className="Div-Of-Circles4">
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 arrow">
              <a href="/">
                <i class='bx bxs-chevrons-down'></i>
                <p>MORE ABOUT THE TEAM</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Design
