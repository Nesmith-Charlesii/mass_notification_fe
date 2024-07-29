import React from 'react';
import useStyles from './styles';

const Registration = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.formContainer}>
                <form className={classes.form}>
                    <div className='form-group'>
                        <input className='form-control-md' type="text" placeholder='First Name' style={{textAlign:"center", padding:"5px", fontFamily: "Cormorant Garamond", width: "100%"}}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control-md' type="text" placeholder='Last Name' style={{textAlign:"center", padding:"5px", fontFamily: "Cormorant Garamond"}}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control-md' type="text" placeholder='Title' style={{textAlign:"center", padding:"5px", fontFamily: "Cormorant Garamond"}}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control-md' type="text" placeholder='Email' style={{textAlign:"center", padding:"5px", fontFamily: "Cormorant Garamond"}}/>
                    </div>
                    <div className='form-group'>
                        <input className='form-control-md' type="text" placeholder='Phone number' style={{textAlign:"center", padding:"5px", fontFamily: "Cormorant Garamond"}}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Registration;