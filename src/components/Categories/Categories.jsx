import React from 'react';
import "./Categories.scss"
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
            <img src='https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">Sale</Link>
            </button>
        </div>
        <div className="row">
        <img src='https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">Women</Link>
            </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
        <img src='https://images.pexels.com/photos/3584505/pexels-photo-3584505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">New Season</Link>
            </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
         <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">Men</Link>
            </button>
            </div>
         </div>
         <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/1306262/pexels-photo-1306262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">Accessories</Link>
            </button>
            </div>
         </div>
        </div>
        <div className="row"> 
        <img src='https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <button>
                <Link className="link" to="/products/1">Shoes</Link>
            </button></div>
      </div>
    </div>
  );
};

export default Categories;