const chaneinfo = (token,name,address,phone,) => (
    fetch('http://10.60.253.0/api/change_info.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token,name,address,phone})
    })
    .then(res => res.json())
);

module.exports = chaneinfo;