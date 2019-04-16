const orderhistory = (token) => (
    fetch('http://10.60.253.0:80/api/order_history.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({token})
        })
        .then (res=>res.json())
)
module.exports = orderhistory;
