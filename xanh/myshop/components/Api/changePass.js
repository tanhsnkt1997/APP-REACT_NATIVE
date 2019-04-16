const changePass = (token, password) => (
    fetch('http://10.60.253.0/api/changepass.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token, password })
        })
        .then(res => res.text())
);

module.exports = changePass;