import {getaAuth} from 'firebase/auth'
import nookies from 'nookies'

const verifyToken = () => {

    const auth = getaAuth()

    const {'talk-token': cookies} = nookies.get() 

    auth.verifyIdToken(idToken)
    .then((decodedToken) => {
        const uid = decodedToken.uid;
        console.log(uid)
    })
}