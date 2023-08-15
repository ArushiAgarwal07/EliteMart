import React from 'react';
import "./Products.scss"
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
 


const Products = () => {

  const[selectedSubCats,setSelectedSubCats]=useState([])


  const catId=parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000)
  const [sort,setSort]=useState(null)
  // If subcategories exist for categories like women OR men OR new season.... then fetch data i.e sub_categories id from db according to catId
  // when you make a request to this URL, you are asking the server to retrieve sub-categories where the "id" field of the "categories" object is equal to the value specified by the variable "catId".
  const {data,loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
 
// If you click on any subcategory i.e t-shirt,dresses etc then change the state according and send selectedsubCats to the List so that List can filter items accordingly 
  const handleChange=(e)=>{
    const value =e.target.value;
    const isChecked=e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats,value]
      : selectedSubCats.filter((item)=> item !==value)
      )
  }


  return (
    <div className='products'>
    <div className='left'>
      <div className="filterItem">
        <h2> Product Categories</h2>
        {/* Make changes to the (left side) subcategory accordinly if the category is men,women,new-season etc */}
        {data?.map((item)=>(
        <div className="inputItem" key={item.id}>
          <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
          <label htmlFor={item.id}>{item.attributes.title}</label>
        </div>   
            ))}

      </div>
      <div className="filterItem">
        <h2>Filter by price</h2>
        <div className="inputItem">
          <span>0</span>
          <input type="range" min={0} max={80000} onChange={(e)=>setMaxPrice(e.target.value)} />
          <span>{maxPrice}</span>
        </div>
      </div>
      <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
          <input type='radio' id="asc" value='asc' name='price' onChange={e=>setSort("asc")}/>
          <label htmlFor='asc'>Price (Lowest first)</label>
        </div> <div className="inputItem">
          <input type='radio' id="desc" value='desc' name='price' onChange={e=>setSort("desc")}/>
          <label htmlFor='desc'>Price (Highest first)</label>
        </div>
      </div>
    </div>
    <div className="right">
      <img  className="catImg" src="https://images.pexels.com/photos/8580765/pexels-photo-8580765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
    </div>
    </div>
  );
};

export default Products;