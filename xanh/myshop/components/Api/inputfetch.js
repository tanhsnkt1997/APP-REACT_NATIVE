const inputfetch =()=>(
    fetch('http://10.60.253.0/api/')
      .then(res => res.json())
      .catch((error) => console.log("fetch error:", error))
)
export default inputfetch;

