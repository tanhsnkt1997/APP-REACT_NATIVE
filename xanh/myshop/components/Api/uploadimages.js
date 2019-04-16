const uploadimages = async () => (

    await fetch('http://10.60.253.0/api/testupload.php', {
        method: 'POST',
        body: formData,
        header: {
            'content-type': 'multipart/form-data',
        },
    })
    .then(res=>res.json())
)
export default uploadimages