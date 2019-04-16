const uphinh = (token,ImagesUser) => (
    fetch('http://10.60.253.0/api/upload_images.php',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token,ImagesUser })
    })
    .then(res => res.json())
);

module.exports = uphinh;