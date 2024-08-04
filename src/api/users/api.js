
import axios from 'axios';

const createUser = async(user) => {
    let userInfo = user.formInput
    let phoneNumber = userInfo.phone_number
    let cleanPhoneStr = phoneNumber.replaceAll("-","")
    
    userInfo.phone_number = cleanPhoneStr
    console.log("after form update", userInfo)
    
    const { data } = await axios.post('http://localhost:8000/api/users/', userInfo )
    return data
}

export {
    createUser
}