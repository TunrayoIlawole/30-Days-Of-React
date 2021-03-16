import React from 'react';
import Button from './Button'

const Subscribe = () => {
    return (
        <main>
           <p>Sign up with your email address to recieve news and updates</p>

        <form>
        <div className = "form-input">
            <input type = "text" placeholder = "First Name" />
            <input type = "text" placeholder = "Last Name" />
            <input type = "email" placeholder = "Email" />
        </div>

        <Button />
        </form> 
        </main>
    )
}

export default Subscribe;