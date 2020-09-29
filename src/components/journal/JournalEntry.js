import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__journal-entry">
           <div className="journal__journal-entry-picture"
            style={{ backgroundSize: 'cover',
                     backgroundImage: 'url(https://i1.wp.com/www.mundoplayers.com/wp-content/uploads/2019/11/alliance.jpg?fit=770%2C770&ssl=1)'
            }}>

           </div>

           <div className="journal__entry-body">
               <p className="journal__entry-title"> Titulo </p>
               <p className="journal__entry-content"> Esta es una prueba del carajo </p>
           </div>
           <div className="journal__entry-date-box">
              <span>Martes</span> 29
           </div>
        </div>
    )
}
