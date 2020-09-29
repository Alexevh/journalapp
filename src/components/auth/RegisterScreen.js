import React from 'react'
import {Link} from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div >
        <h3 className='auth__title'>Registro</h3>
        <form>

        <input
                type='text'
                placeholder="Nombre"
                name='name'
                className='auth__input'
                />

            <input
                type='text'
                placeholder="Email"
                name='email'
                className='auth__input'
                />

            <input
                type='password'
                placeholder="Password"
                name='password' 
                className='auth__input'
                />

                <input
                type='password'
                placeholder="Vuelva a escribir el password"
                name='password2' 
                className='auth__input'
                />

            <button type="submit" className='btn btn-primary btn-block'>Registrarse</button>
            <hr />
        

            <Link to='/auth/login' className='link'>
                Ya tienes cuenta?
            </Link>

        </form>
    </div>
    )
}
