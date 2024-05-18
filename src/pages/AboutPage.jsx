import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="text-left">
          Meet Muskaan, Mina, Manahil, and Mahjabeen, four friends bound by their love for books and endless adventures in storytelling.</p>
        <p><b>Our Mission:</b></p>
        <p>Unleash the magic of reading by sharing captivating book recommendations and exclusive content to fuel your literary wanderlust.</p>
        <p><b>What We Offer?</b></p>
        <p>Curated reads and insights to ignite your imagination.</p>
        <p><b>Join Our Journey:</b></p>
        <p>Embark on an exciting literary odyssey with us. Let's tum pages, spari maginations, and explore the endless realims of storytelling together!</p>
        <br></br><p>Happy reading.</p>
        <p>Muskaan, Mina, Manahil, and Mahjabeen.</p>

        <h2 className="text-center py-4">Genres</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src='https://media.theeverymom.com/wp-content/uploads/2021/08/05155927/best-thriller-books-the-everymom-f-h-1.jpg' alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Thriller</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src='https://ew.com/thmb/1k_UjByEoqSpacFczSMnB91ctEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-books-2000-acfa32d6debb4316918f130f5538a697.jpg' alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Fiction</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src='https://ca-times.brightspotcdn.com/dims4/default/2311838/2147483647/strip/true/crop/2400x1600+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F47%2F93%2F72682ea84cf2a3b053e88f23f1cf%2Fla-et-jc-winterroundup.jpg' alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Crime</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src='./assets/romance1.jpg' alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Romance</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage