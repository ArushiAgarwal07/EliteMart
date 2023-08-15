import React from 'react';
import "./FeaturedProducts.scss"
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';


const FeaturedProducts = ({type}) => {
   

    const{data, loading, error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1> {type} Products </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, laudantium obcaecati tempora earum eius eveniet dolorem harum, qui debitis libero corporis aut illum quis suscipit recusandae animi vel fugit cum?</p>
        </div>
        <div className="bottom">
            {error
            ? "Something went wrong!"
             :loading ?
            "loading"
            :data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
      
    </div>
  );
};

export default FeaturedProducts;