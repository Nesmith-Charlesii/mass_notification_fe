import React from 'react';
import axios from 'axios';

const createUser = async(user) => {
    const { data } = await axios.post('http://localhost:8000/api/users/', { user })
    return data
}

export {
    createUser
}