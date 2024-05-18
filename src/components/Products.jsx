import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Card, CardContent, Typography } from '@mui/material'; // Import necessary components
import './Products.css';


import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center"style={{backgroundColor: '#E1BF12', paddingTop: '20px', paddingBottom: '10px'}}>
          <button className="btn btn-outline-light btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-light btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Thriller</button>
          <button className="btn btn-outline-light btn-sm m-2" onClick={() => filterProduct("women's clothing")}>Self Help</button>
          <button className="btn btn-outline-light btn-sm m-2" onClick={() => filterProduct("jewelery")}>Crime</button>
          <button className="btn btn-outline-light btn-sm m-2" onClick={() => filterProduct("electronics")}>Romance</button>
        </div>

        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="custom-row product-container">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={"./assets/book1.jpg"}
                  alt="Card"
                  height={300}
                />
                <CardContent>
                <Typography variant="subtitle2" align="left" style={{ maxHeight: '3em', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {"Lethal White"}
                </Typography>
                <Typography variant="subtitle1" align="left">
                  {product.price}
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
                </div>
              </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="display-5 text-center text-white"style={{backgroundColor: '#E1BF12', paddingTop: '50px', paddingBottom: '10px', fontWeight: 'bold', marginBottom: '0px'}}>
          Genres</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </>
  );
};

export default Products;
