import React, { useState } from 'react'; 

const pStyle = {
    color: "red",
}

const FormValidation = props => {  
    const [ formState, setFormState ] = useState({  
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: "", 
    })

    const onChangeHandler = event => {  
        event.preventDefault();  
        console.log(formState);
        setFormState({
            ...formState,  
            [event.target.name]: event.target.value  
        })
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        setFormState({ 
            ...formState,
        })
        console.log(formState);
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={onChangeHandler}/>
                { formState.firstName.length < 2 && formState.firstName.length !== 0 && (<p style= { pStyle} > First Name must be at least 2 characters. </p>)}
                <br/>        
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={onChangeHandler}/>
                { formState.lastName.length < 2 && formState.lastName.length !== 0 && (<p style= { pStyle} > Last Name must be at least 2 characters. </p>)}
                <br/>        
                <label>Email</label>
                <input type="email" name="email" onChange={onChangeHandler}/>
                { formState.email.length < 5 && formState.email.length !== 0 && (<p style= { pStyle} > Email must be at least 5 characters. </p>)}
                <br/>        
                <label>Password</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                { formState.password.length < 8 && formState.password.length !== 0 && (<p style= { pStyle} > Password must be at least 8 characters. </p>)}
                <br/>        
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                { formState.confirmPassword.length < 8 && formState.confirmPassword.length !== 0 && (<p style= { pStyle} > Password must be at least 8 characters. </p>)}
                { formState.password !== formState.confirmPassword && formState.confirmPassword.length !== 0 && (<p style= { pStyle} > Passwords must match. </p>)}
                <br/>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default FormValidation;
