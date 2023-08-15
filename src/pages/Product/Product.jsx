import React from 'react';
import  "./Product.scss"
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';


const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
//  Here using useDispatch hook we'll dispatch our action which will trigger the reducers and will perform respective functionality

  const dispatch=useDispatch()
   
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  // Check if data is null or undefined before accessing its properties
  const imgUrl = data?.attributes?.img?.data?.attributes?.url;
  const img2Url = data?.attributes?.img2?.data?.attributes?.url;

  return (
    <div className='product'>
      {loading ? 
        ("loading")
        : (
          <>
            <div className='left'>
              <div className="images">
                {/* Use the updated imgUrl and img2Url variables here */}
                {imgUrl && <img src={process.env.REACT_APP_UPLOAD_URL + imgUrl} alt="" onClick={(e) => setSelectedImg("img")} />}
                {img2Url && <img src={process.env.REACT_APP_UPLOAD_URL + img2Url} alt="" onClick={(e) => setSelectedImg("img2")} />}
              </div>
              <div className="mainImg">
                {/* Use the updated imgUrl and selectedImg */}
                <img src={process.env.REACT_APP_UPLOAD_URL + (imgUrl && selectedImg === "img2" ? img2Url : imgUrl)} alt="" />
              </div>
            </div>
     <div className="right">
      <h1>{data?.attributes?.title}</h1>
      <span className='price'> ${data?.attributes?.price}</span>
      <p>{data?.attributes?.desc}</p>
      
      <div className="quantity">
      <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
        <AddShoppingCartIcon/> ADD TO START
      </button> 
      <div className='links'>
        <div className="item">
          <FavoriteBorderIcon/>ADD TO WISH LIST 
        </div>
        <div className="item">
          <BalanceIcon/>ADD TO COMPARE
        </div>
      </div>
      <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
     </div></>)}
    </div>
  );
};

export default Product;