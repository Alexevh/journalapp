import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {


    const dispatch = useDispatch();

    /* vou a usar el hook useSelector para acceder al store y obtener el nombre del usuario a mostrar */
    const { name } = useSelector(state => state.auth);

    /* Event listener del boton logout */
    const handleLogout = ()=>{

        console.log('click en logout');
        dispatch(startLogout());

    }

/* Event listener para el agregar */
    const handleAddNew = ()=>{
        console.log('voy a grabar uan nueva nta')
        dispatch(startNewNote())
    }


    return (
        <aside className='journal__main-sidebar'>
            

            <div className='journal__sidebar-navbar'>
               
                <h3 className='mt-5'>
                <i className='fa fa-moon'></i>
                    <span> { name}</span>
                </h3>


                <button className='btn' onClick={handleLogout}>Salir</button>
            </div>

            <div className='journal__new-entry'
                onClick={handleAddNew}
            >
                <i className="fa fa-calendar-plus fa-5x"></i>
                <p>Nueva entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
