import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { createUser } from '../../../../api/users/api';
import useStyles from './styles';

const Registration = () => {
    const classes = useStyles();

    const [formInput, setFormInput] = useState({})
    const [confirmPassword, setConfirmPassword] = useState('')

    const mutation = useMutation(createUser, {
        // onSuccess and onError are built-in functions from react-query
        onSuccess: () => {
            alert('User added successfully');
            setFormInput({})
        },
        onError: (error) => {
            alert(`Error adding user: ${error.message}`)
        }
    });

    // Check if password and confirm password match in real-time while user types
    const handleOnInput = (e) => {
        if(e.target.id === 'password') {
            e.target.value === confirmPassword ? console.log("match") : console.log("no match")
        } 
        if(e.target.id === 'confirmPassword') {
            e.target.value === formInput["password"] ? console.log("match") : console.log("no match")
        }
    }

    const handlePhoneNumber = (e) => {
        let targetStr = e.target.value
        let letters = targetStr.match(/[a-zA-Z]/g)
        let specialCharacters = /[=!@#$%^&*()_+{}[\]:;"'<>,.?/\\|-]/
        
        if(letters) {
            let cleanStr = targetStr.replace(letters, "")
            let phoneNumber = document.getElementById("phone_number")
            phoneNumber.value = cleanStr
        }

        if(specialCharacters) {
            let cleanStr = targetStr.replace(specialCharacters, "")
            let phoneNumber = document.getElementById("phone_number")
            phoneNumber.value = cleanStr
        }

        if(targetStr.length === 10) {
            let intlPhoneNumber = formatPhoneNumber(targetStr)
            let input = document.getElementById("phone_number")
            input.value = intlPhoneNumber
        }
    }

    const formatPhoneNumber = (phoneNumber) => {
        let digitArr = phoneNumber.split("")
        digitArr.splice(3, 0, "-")
        digitArr.splice(7, 0, "-")
        return digitArr.join("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ formInput })
    }


    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="firstName">First name</label>
                        <input 
                        className='form-control-md' 
                        type="text" 
                        value={formInput["first_name"]} 
                        onChange={(e) => setFormInput({...formInput, first_name: e.target.value})} 
                        style={{paddingLeft: "4px"}} 
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="lastName">Last name</label>
                        <input 
                        className='form-control-md' 
                        type="text"
                        value={formInput["last_name"]} 
                        onChange={(e) => setFormInput({...formInput, last_name: e.target.value})} 
                        style={{paddingLeft: "4px"}}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="title">Title</label>
                        <input 
                        className='form-control-md' 
                        type="text" 
                        value={formInput["title"]}
                        onChange={(e) => setFormInput({...formInput, title: e.target.value})} 
                        style={{paddingLeft: "4px"}}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="email">Email address</label>
                        <input 
                        className='form-control-md' 
                        type="email" 
                        value={formInput["email"]}
                        onChange={(e) => setFormInput({...formInput, email: e.target.value})} 
                        style={{paddingLeft: "4px"}}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input 
                        id="phone_number"
                        className='form-control-md' 
                        type="tel"
                        maxLength="10"
                        value={formInput["phone_number"]} 
                        onInput={(e) => handlePhoneNumber(e)}
                        onChange={(e) => setFormInput({...formInput, phone_number: e.target.value})} 
                        style={{paddingLeft: "4px"}}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input
                        id="password" 
                        className='form-control-md' 
                        type="password"
                        value={formInput["password"]}
                        onInput={(e) => handleOnInput(e)}
                        onChange={(e) => setFormInput({...formInput, password: e.target.value})} 
                        style={{paddingLeft: "4px"}}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input 
                        id="confirmPassword"
                        className='form-control-md' 
                        type="password"
                        value={confirmPassword}
                        onInput={(e) => handleOnInput(e)}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={{paddingLeft: "4px"}}
                        required
                        />
                    </div>

                    <div className={classes.buttonContainer}>
                        <button type="submit" className='btn btn-primary' disabled={ mutation.isLoading }>Sign up</button>
                        { mutation.isLoading && <p>Adding user...</p> }
                        { mutation.isError && <p style={{ color: "rgb(240,240,240)", marginTop: "10px" }}>Error: {mutation.error.message}</p> }
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Registration;