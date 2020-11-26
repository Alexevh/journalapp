import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {


    /* voy a usar algun reducer del store por eso useselector */
    const  { active } = useSelector(state => state.notes);


    return (
        <div className='journal__main-content'>
          
            <Sidebar />

            <main>
                {
                    /* Uso un ternario para evaluar que retorno, odria haber hecho un if active===null etc */
                    (active)
                    ?(<NoteScreen />)
                    : (<NothingSelected  />)

                }
                
               

                
            </main>

        </div>
    )
}
