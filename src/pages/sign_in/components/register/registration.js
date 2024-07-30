import React from 'react';
import useStyles from './styles';

const Registration = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <form className={classes.form} /*onSubmit={}*/>
                    <div className='form-group'>
                        <label for="firstName">First name</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="lastName">Last name</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="title">Title name</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="email">Email address</label>
                        <input className='form-control-md' type="email" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="phoneNumber">Phone number</label>
                        <input className='form-control-md' type="number" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className={classes.buttonContainer}>
                        <button type="button" className='btn btn-primary'>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;