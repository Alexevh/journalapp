import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';


/* 
{
    name: 'Sara',
    emai: 'sara@sarasa.com'
    password: '1234',
    password2: '1234'

} */




export const RegisterScreen = () => {

/* inicializo los campos que vy a controlar con mi custom hook */
const [values, handleInputChange] = useForm({
    name: 'Sara',
    email: 'sara@sarasa.com',
    password: '1234',
    password2: '1234'

});

/* Como tengo el objeto inicial del formulario destestructuro las variables para trabajarlas de a una */
const {name, email,password, password2 } = values;


/* metodo que va a manejar el regsitrso */
const handleRegister = (e)=> {

    e.preventDefault();
    console.log('voy a controlar')
    if (isFormValid()){
        console.log('Formulario correcto')
        console.log('el nombre es', name)
    }

    console.log(name, email,password, password2 );
}

/* validar el formulario */
const isFormValid = ()=>{

    console.log('al controlar me llega como nombre', name);

    /* arrancamos a verificar */
    if (name.trim().length <=1){
        console.log('NOmbre menor a 2 caraceteres');
        return false;
    } else if (!validator.isEmail(email)){
        console.log('Mail no valido');
        return false;
    } else if(password !== password2){
        console.log('No coicniden los passwords');
        return false;
    }

    return true;
    
}

    return (
        <div >
        <h3 className='auth__title'>Registro</h3>
        <form onSubmit={handleRegister}> 

        <div className="auth__alert-error">
            Verifique los errores
        </div>

        <input
                type='text'
                placeholder="Nombre"
                name='name'
                className='auth__input'
                value={ name}
                onChange={handleInputChange}
                />

            <input
                type='text'
                placeholder="Email"
                name='email'
                className='auth__input'
                value={ email}
                onChange={handleInputChange}
                />

            <input
                type='password'
                placeholder="Password"
                name='password' 
                className='auth__input'
                value={ password}
                onChange={handleInputChange}
                />

                <input
                type='password'
                placeholder="Vuelva a escribir el password"
                name='password2' 
                className='auth__input'
                value={ password2}
                onChange={handleInputChange}
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
