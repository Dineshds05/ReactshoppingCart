import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const data = [{
  imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productname : "Fancy Product",
  Price : "$40.00 - $80.00",
  Rating : "*****"   
},
{
  imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productname : "Special Item",
  Price : "$20.00-$18.00"
},
{
  imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productname : "Sale Item",
  Price : "$25.00",
  Rating : "****" 
},
{
imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
productname : "Popular Item",
Price : "$40.00",
},
{
imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
productname : "Sale Item",
Price : "$25.00",  
},
{
imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
productname : "Fancy Product",
Price : "$120.00 - $280.00",
Rating : "*****" 
},
{
  imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productname : "Special Item",
  Price : "$18.00"  
},
{
  imgsrc : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
  productname : "Popular Item",
  Price : "$40.00", 
  Rating : "***"
}
]
function App() {
  const [count, setCount]=useState(0)
  return (
    <div>
    
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
        <div className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </div>
        <div className='products'>
         {data.map((product, idx)=>(
          <ProductCard key={idx}
           imgsrc={product.imgsrc}
           productname={product.productname}
           Rating={product.Rating}
           Price={product.Price}
           count={count}
           setCount={setCount}
          />
         ))}
      </div>
     

      <div className="footer">
      
       <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer></div>
      
    </div>
    
  );
}

export default App;

function ProductCard({imgsrc, productname, Price, count, setCount, Rating}){
   const [show, setshow]= useState(true)
   function handletoAddcart(){
    setshow(!show)
    setCount(count+1)
   }
   function handletoRemovecart(){
    setshow(!show)
    setCount(count-1)
   }
  return(
    <div class='cardCenter'>
      <img src={imgsrc}
        alt='productimage'
      />
      <h5>{productname}</h5>
      <div><b>{Rating}</b></div>
      <div>{Price}</div>
      {/* <!--Cart Button--> */}
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      {show ? <button onClick={() => handletoAddcart()} class="btn btn-outline-dark mt-auto">Add to cart</button> : <button onClick={() => handletoRemovecart()} class="btn btn-outline-dark mt-auto">Remove to cart</button>}
    </div>
    </div>
  )
}
