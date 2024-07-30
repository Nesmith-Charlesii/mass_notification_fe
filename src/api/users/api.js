import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const createUser = async(user) => {
    const { data } = await axios.post('http://localhost:8000/api/users/', {
        
    })
    return data
}