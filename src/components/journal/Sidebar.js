import React from 'react'
import { useDispatch } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {


    const dispatch = useDispatch();

    /* Event listener del boton logout */
    const handleLogout = ()=>{

        console.log('click en logout');
        dispatch(startLogout());

    }

    return (
        <aside className='journal__main-sidebar'>
            

            <div className='journal__sidebar-navbar'>
               
                <h3 className='mt-5'>
                <i className='fa fa-moon'></i>
                    <span> Alex</span>
                </h3>


                <button className='btn' onClick={handleLogout}>Salir</button>
            </div>

            <div className='journal__new-entry'>
                <i className="fa fa-calendar-plus fa-5x"></i>
                <p>Nueva entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
