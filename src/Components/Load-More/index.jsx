import { useEffect, useRef, useState } from "react"
import "./index.css";


export const LoadMore = ({url, limit}) => {

  const [skip, setSkip] = useState(0);
  const [productsArray, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [totalProduct, setTotalProduct] = useState(null);
  const hasFetched = useRef(false);

  const handleLoadMore = () => {
    setSkip((prev) => prev + limit);
    setTimeout(() => {
      fetchData();
    }, 300);
  }

  const fetchData = async() => {

    try{
      const response = await fetch(`${url}?limit=${limit}&skip=${skip}`);
      if(!response.ok) throw new Error(response.status);
      const data = await response.json();
      
      setTotalProduct(data.total);
      setProducts((prev) => [...prev, ...data.products]);
      
    } catch(err) {
      setError(err.message);                                                        
    }
  }
  
  useEffect(() => {
    
    if (hasFetched.current) return; 
    hasFetched.current = true;
    fetchData();
    setSkip(limit);
  },[])

  if(error) return <div>{error}</div>

  if(productsArray) {
    return (
      <div className="section">
        <div className="container">
          {productsArray.map((product) => {
            return (
              <div key={product.id}>
                <figure>
                  <img src={product.images} alt={product.title} />
                </figure>
                <p>{product.title}</p>

              </div>
            )
          })}
        </div>
        {(productsArray.length < totalProduct) && <button onClick={() => handleLoadMore()}>Load More</button>}
      </div>
    )
  }
}