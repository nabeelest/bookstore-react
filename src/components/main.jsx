import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-light">
          <img
            className="card-img img-fluid"
            src="./assets/home.png" 
            alt="Card"
            style={{ marginTop: '17px' }}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
