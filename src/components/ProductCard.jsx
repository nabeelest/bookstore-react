// ProductCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material'; // Import necessary components
import { Link } from "react-router-dom";


const ProductCard = ({ title, price, imageUrl }) => {
  return (
<Card style={{ margin: '10px', padding: '0px', width: '200px', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', objectFit: 'cover' }} />
      <CardContent>
        <Typography variant="subtitle2" align="left" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="left">
          {price}
        </Typography>
        <div className="card-body">
                  <Link to={"/product/"} className="btn btn-dark m-1" style={{ backgroundColor: '#0E345A' }}><i className="fa fa-eye mr-1"></i> 
              
                  </Link>
                  <button className="btn btn-dark m-1" style={{ backgroundColor: '#0E345A' }}><i className="fa fa-book-open mr-1"></i>
                  </button>
                  <button className="btn btn-dark m-1"  style={{ backgroundColor: '#0E345A' }}><i className="fa fa-cart-shopping mr-1"></i>
                  </button>
        </div>
        
      </CardContent>
    </Card>
    
  );
};

export default ProductCard;

