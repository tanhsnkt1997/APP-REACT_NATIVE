const search = (key) => {
    const url = `http://10.60.253.0/api/search.php?key=${key}`
     return fetch (url)
        .then(res => res.json())
}


export default search