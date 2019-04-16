const login = (email, password) => (
    fetch('http://10.60.253.0/api/login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json() )

)
module.exports = login;