import React from 'react'
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { login, startGoogleLogin, startLoginEmailPass } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    /* da acceso al dispatch de accciones */
    const dispatch = useDispatch();

    /* voy a manejar el fomrulario con mi proio hooks asi que inicalizo el hook, le paso el objeto que representa
    el formulario que vy a manejar y recibo las funciones
    */
   const [values, handleInputChange, reset] = useForm({
    email: 'sara',
    password: '1234'
    });

    /* AHora que tengo inicializado el hook, en la variable values tengo los campos con los que inicialice el formulario
    los desestructuro para poder trabajarlos

    */
   const {email, password} = values;


    /* funcion que va a manejar el login */
   const handleLogin = (evento)=>{

    evento.preventDefault();
    
    /* ahora hago el dispatch de login que es una accion */
    dispatch(startLoginEmailPass('1636363', 'Srasita'));

   }


/* funcion para el boton de google */
const handleGoogleLogin = ()=>{
    dispatch(startGoogleLogin());
}

    return (
        <div >
            <h3 className='auth__title'>Login</h3>
            <form onSubmit={handleLogin}>

                <input
                    type='text'
                    placeholder="Email"
                    name='email'
                    className='auth__input'
                    value={email}
                    onChange={handleInputChange}
                    />

                <input
                    type='password'
                    placeholder="Password"
                    name='password' 
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                    />

                <button type="submit" className='btn btn-primary btn-block'>Login</button>
                <hr />
                <div className='auth__social-networks'>
                    <p>Ingresar con redes sociales</p>

                    <div
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to='/auth/register' className='link'>
                    Nueva cuenta
                </Link>

            </form>
        </div>
    )
}
