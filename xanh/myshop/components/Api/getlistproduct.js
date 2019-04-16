const getlistproduct = (idType, page) => {
    if (idType === 'Dacbiet') {
        const url = `http://10.60.253.0/api/get_collection.php?page=${page}`
        return fetch(url)
            .then(res => res.json())
    }
    else {
        const url = `http://10.60.253.0/api/product_by_type.php?id_type=${idType}&page=${page}`
        return fetch(url)
            .then(res => res.json())
    }

}


export default getlistproduct