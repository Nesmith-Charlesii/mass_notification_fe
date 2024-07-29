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
                        <label for="firstName">Last name</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="firstName">Title name</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="firstName">Email address</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
                    </div>
                    <div className='form-group'>
                        <label for="firstName">Phone number</label>
                        <input className='form-control-md' type="text" style={{paddingLeft: "3px"}}/>
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