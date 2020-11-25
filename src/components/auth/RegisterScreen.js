import React from 'react'
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegistrerWithEmailPassword } from '../../actions/auth';


/* 
{
    name: 'Sara',
    emai: 'sara@sarasa.com'
    password: '1234',
    password2: '1234'

} */




export const RegisterScreen = () => {

/* vpy a usar esto para despachar los eventos */
const dispatch = useDispatch();


/* inicializo los campos que vy a controlar con mi custom hook */
const [values, handleInputChange] = useForm({
    name: 'Sara',
    email: 'sara@sarasa.com',
    password: '1234',
    password2: '1234'

});
/* este es un hook y recibe un callback, recibe un state y regresa un state
 Como es un objeto lo voy a desestructurar pero podria usarlo asi tambien
const state = useSelector(state => state.ui);
*/
const {msgError} = useSelector(state => state.ui);
console.log(msgError);





/* Como tengo el objeto inicial del formulario destestructuro las variables para trabajarlas de a una */
const {name, email,password, password2 } = values;


/* metodo que va a manejar el regsitrso */
const handleRegister = (e)=> {

    e.preventDefault();
    console.log('voy a controlar')
    if (isFormValid()){
         dispatch(startRegistrerWithEmailPassword(email, password, name));
    }

    console.log(name, email,password, password2 );
}

/* validar el formulario */
const isFormValid = ()=>{

    console.log('al controlar me llega como nombre', name);

    /* arrancamos a verificar */
    if (name.trim().length <=1){
        dispatch( setError('NOmbre menor a 2 caraceteres'));
       
        return false;
    } else if (!validator.isEmail(email)){
        dispatch( setError('Mail no valido'));
        return false;
    } else if(password !== password2){
        dispatch( setError('No coicndien los pass'));
        return false;
    }

    return true;
    
}

    return (
        <div >
        <h3 className='auth__title'>Registro</h3>
        <form onSubmit={handleRegister}> 


         {
             /* Voy a mostrar los errores, uso la forma corta de saber si msgError no es null y muestro el error */
            msgError &&

            (
                <div className="auth__alert-error">
                     {msgError}
                 </div>
            )

         }
       

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
