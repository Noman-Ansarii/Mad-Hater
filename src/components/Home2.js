import React from 'react'
import IMG from '../images/Page2.png'

function Home2() {
    return (
        <>
            {/* //Page.No.2 */}
            <div className="comtainer-fluid weekly-insight">
                <div className="container">
                    <div className="row align-item-center word-wrap Home2">
                        <div className="Heading-Page2" >
                            <h1 data-aos="zoom-in">Weekly <span>insights</span></h1>
                            
                        </div>
                        <div className="col-lg-6">
                            <div className="div-details" data-aos="zoom-in-left">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus iste autem natus obcaecati, inventore dolorem porro laudantium provident at. Recusandae autem molestias, obcaecati natus fuga nemo impedit veniam id eum assumenda dicta nihil corporis, totam optio. Earum tenetur corporis quae blanditiis consectetur, voluptatum consequatur perspiciatis est tempora saepe tempore quis voluptas, odio impedit iure. Corrupti consequatur officia voluptatum exercitationem reiciendis aperiam modi commodi, itaque, laborum eveniet qui impedit accusamus, aut dicta molestiae fuga maxime nulla! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, amet omnis id velit ratione impedit! Architecto cumque animi sed mollitia optio quibusdam at, veritatis quis tempore eligendi beatae minima aliquam!</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in-right">
                            <div className="Page2-Img">
                                <h5 >THE MAD HATTER*</h5>
                                <img className="img-thumbnail res-img" src={IMG} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home2
