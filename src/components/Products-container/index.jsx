import React,{useState,useEffect,useRef} from "react";
import ProductCard from "../product-card";
import NavBar from "../Navigation-bar";
const ProductsContainer=()=>{
    const [products,setProducts]=useState([])
    const searchInputRef=useRef("")
    const [searchQuery,setSearchQuery]=useState("")
    useEffect(()=>{
        fetch("https://dummyjson.com/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp);
                setProducts(resp.products)
            })
        }).catch((err)=>{
            console.error(err)
        })
    },[])
    useEffect(() => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
    }, []);
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <NavBar/>
        <h3>BUY NOW!!!</h3>
        <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '10vh', 
    marginTop: '20px', 
  }}>
    <input 
        type="text"
        placeholder="Search product..."
        onChange={(e) => setSearchQuery(e.target.value)}
        ref={searchInputRef}
        style={{
            width: '300px', 
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
        }}
    />
</div>
        <div className="container">
           <div className="row justify-content-around">
           {
           filteredProducts.length>0?(
            filteredProducts.map((prod,index)=>{
                return(
                    <div className="col-md-4 mb-4" key={index}>
                      <ProductCard product={prod}/>
                    </div>
                   )
            })
        ):(
            <h1>No products found!!</h1>
        )
           }
           </div>
        </div>
        </>
    )
}
export default ProductsContainer









