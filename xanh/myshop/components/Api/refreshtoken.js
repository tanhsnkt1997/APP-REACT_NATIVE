import savetoken from './savetoken'
import gettoken from '../Api/gettoken'

const getnewtoken = (token) => (
    fetch('http://10.60.253.0/api/refresh_token.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ token })
        })
        .then(res => res.text())
)

const refrestoken = async () => {
    try {
        const token = await gettoken()
        if (token === '' || token === 'TOKEN_KHONG_HOP_LE') {
            console.log('chua co token')
        }
        const newtoken = await getnewtoken(token)
        await savetoken(newtoken)
        console.log('Token moi la : _________' + newtoken)
    }
    catch (e) {
        console.log('loi r' + e)
    }
}

export default refrestoken