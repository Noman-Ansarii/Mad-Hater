import React from 'react'
import IMG from '../images/Place Your Image Here (Double Click to Edit).png';

function Home() {
  return (
    <>
      <div className="container-fluid MainHome">
        <div className="row Home">
          <div className="col-lg-4 desgin-div" data-aos="fade-down-left">
            <div className="inner-div">
            <h1>Design</h1>
            <span>Innovations</span>
              <div className="circle">
                <div className="Div-Of-Circles">
                </div>
                <div className="Div-Of-Circles">
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus, saepe aperiam rem reiciendis error obcaecati dignissimos quam laboriosam ducimus quae sit, iste nam perspiciatis praesentium quaerat! Accusantium repellendus, quis maxime sunt ratione libero quae corporis natus consequuntur fuga aspernatur repellat!</p>
            </div>
          </div>
          <div className="col-lg-4" data-aos="zoom-in">
            <img class="img-fluid Design4_IMG" src={IMG} alt="" />
          </div>
          <div className="col-lg-4 desgin-div" data-aos="fade-down-right">
            <div className="inner-div">
            <h1>Creative</h1>
            <span>Solutions</span>
              <div className="circle">
                <div className="Div-Of-Circles">
                </div>
                <div className="Div-Of-Circles">
                </div>
              </div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatibus, saepe aperiam rem reiciendis error obcaecati dignissimos quam laboriosam ducimus quae sit, iste nam perspiciatis praesentium quaerat! Accusantium repellendus, quis maxime sunt ratione libero quae corporis natus consequuntur fuga aspernatur repellat!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
