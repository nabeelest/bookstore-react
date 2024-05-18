import React from 'react';
import { Link } from "react-router-dom";

function Banner() {
return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="display-5 text-center text-white"style={{backgroundColor: '#02A794', paddingTop: '50px', paddingBottom: '10px', marginBottom: '0px'}}>
          Unleash Your Inner Bookworm!</h3>
        </div>
      </div>

      
      <div className="buttons text-center "style={{backgroundColor: '#02A794', paddingTop: '8px', paddingBottom: '10px'}}>
      <Link to="/product" className= "btn btn-outline-light btn-sm m-2">Browse Our Collection</Link></div>
    </>
)
}

export default Banner;




