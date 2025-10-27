import { useEffect, useState } from "react"


export const ImageSlider = ({url, page, limit}) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loadingState, setLoadingState] = useState(true);



  useEffect(() => {
    
    const fetchData = async() => {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        if(!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        console.log(response.status);
        
        const data = await response.json();
        setData(data);
        setLoadingState(false);
        
      } catch(error) {
        setError(error.message);
      } finally {
        setLoadingState(false);
      }
    }

    fetchData();
  },[])


  if(loadingState) return <div>Loading....</div>
  if(error) return <div>{error}</div>

  if(data) {
    return(
      <div>
        <button>Previous</button>
        {data.map((elem) => {
          <div key={elem.id}>
            <img src={elem.download_url} alt={elem.download_url} />
          </div>
        })}
        <button>Next</button>
      </div>
    )
  }
}