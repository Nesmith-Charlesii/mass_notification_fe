import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../../../api/users/api';
import useStyles from './styles';

const Registration = () => {
    const classes = useStyles();

    const [formInput, setFormInput] = useState({})

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

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ formInput })
    }

    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label for="firstName">First name</label>
                        <input 
                        className='form-control-md' 
                        type="text" 
                        value={formInput["first_name"]} 
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "3px"}} 
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label for="lastName">Last name</label>
                        <input 
                        className='form-control-md' 
                        type="text"
                        value={formInput["last_name"]} 
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "3px"}}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label for="title">Title</label>
                        <input 
                        className='form-control-md' 
                        type="text" 
                        value={formInput["title"]}
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "3px"}}
                        />
                    </div>

                    <div className='form-group'>
                        <label for="email">Email address</label>
                        <input 
                        className='form-control-md' 
                        type="email" 
                        value={formInput["email"]}
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "3px"}}
                        required
                        />
                    </div>

                    <div className='form-group'>
                        <label for="phoneNumber">Phone number</label>
                        <input 
                        className='form-control-md' 
                        type="number"
                        value={formInput["phone_number"]} 
                        onChange={(e) => setFormInput(e.target.value)} 
                        style={{paddingLeft: "3px"}}
                        />
                    </div>

                    <div className={classes.buttonContainer}>
                        <button type="button" className='btn btn-primary'>Sign up</button>
                        { mutation.isLoading && <p>Adding user...</p> }
                        { mutation.isError && <p>Error: {mutation.error.message}</p> }
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Registration;