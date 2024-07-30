import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { createUser } from '../../../../api/users/api';
import useStyles from './styles';

const Registration = () => {
    const classes = useStyles();

    const [formInput, setFormInput] = useState({})
    const [password, setPassword] = useState('')
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

    useEffect(() => {
        console.log(formInput)
    }, [formInput])

    const handleOnInput = (e) => {
        if(e.target.id === 'password') {
            setPassword(e.target.value)
        } else if(e.target.id === 'confirmPassword') {
            setConfirmPassword(e.target.value)
        }
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
                        onChange={(e) => setFormInput(e.target.value)} 
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
                        onChange={(e) => setFormInput(e.target.value)} 
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
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "4px"}}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="email">Email address</label>
                        <input 
                        className='form-control-md' 
                        type="email" 
                        value={formInput["email"]}
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "4px"}}
                        required = "yo"
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone number</label>
                        <input 
                        className='form-control-md' 
                        type="tel"
                        value={formInput["phone_number"]} 
                        onChange={(e) => setFormInput(e.target.value)} 
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
                        onChange={(e) => setFormInput(e.target.value)} 
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
                        onInput={(e) => handleOnInput(e)}
                        style={{paddingLeft: "4px"}}
                        required
                        />
                    </div>

                    <div className={classes.buttonContainer}>
                        <button type="submit" className='btn btn-primary' disabled={mutation.isLoading || (password === '' || confirmPassword !== password)}>Sign up</button>
                        { mutation.isLoading && <p>Adding user...</p> }
                        { mutation.isError && <p style={{ color: "rgb(240,240,240)", marginTop: "10px" }}>Error: {mutation.error.message}</p> }
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Registration;