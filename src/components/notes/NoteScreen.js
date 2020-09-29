import React from 'react'
import { NoteAppbar } from './NoteAppbar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NoteAppbar />

            <div className="notes__content">
                <input type="text" placeholder="titulo" className="notes__notes-input" />

                <textarea placeholder="Que paso hoy" className="notes__textarea" />

                <div className="notes__img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTo6dGI8jJW2g0C74SApremKK55zvvQQWi_bA&usqp=CAU"  alt="imagen" />
                </div>

                
            </div>
            
        </div>
    )
}
