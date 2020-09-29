import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className='journal__main-sidebar'>
            

            <div className='journal__sidebar-navbar'>
               
                <h3 className='mt-5'>
                <i className='fa fa-moon'></i>
                    <span> Alex</span>
                </h3>


                <button className='btn'>Salir</button>
            </div>

            <div className='journal__new-entry'>
                <i className="fa fa-calendar-plus fa-5x"></i>
                <p>Nueva entrada</p>
            </div>

            <JournalEntries />

        </aside>
    )
}
