import React, { useEffect } from 'react';
import './Main.css';

const Main = ({ user }) => {

    useEffect(() => { document.title = "Strona główna"}, [])

    return(
        user.role !== '' ?
        <div className='main'>
            <h1>To jest strona główna</h1>
            <h3>Jest ona dostępna dla zalogowanych użytkowmików</h3>
        </div>
        :
        <div>Nie jesteś zalogowany</div>
    )

}

export default Main;