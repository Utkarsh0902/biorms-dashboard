import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(()=>{

      const abortCont = new AbortController();
      fetch(url, {signal: abortCont.signal})
        .then((res)=>{
          if(!res.ok){
            throw Error('Could not fetch the data for the resource.');
          }
          return res.json(); //converts the response object into JSON
        })
        .then((data)=>{
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch(err =>{
          if(err.name === 'AbortError'){
            console.log('fetch aborted.');
          }
          setError(err.message);
          setPending(false);
        })

        //abort the fetch
        return() => abortCont.abort();
    }, [url])

    return  {data, pending, error};
}

export default useFetch;

