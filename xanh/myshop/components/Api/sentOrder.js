

const sendOrder = (token, arrayDetail) => {
    const data = { token, arrayDetail };
    //console.log(data);
    return fetch('http://10.60.253.0/api/cart.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.text())
};

module.exports = sendOrder;
