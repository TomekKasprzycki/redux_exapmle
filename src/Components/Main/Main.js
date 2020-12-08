import React, { useEffect } from 'react';
import './Main.css';

const Main = () => {

    useEffect(() => { document.title = "Strona główna"}, [])

    return(
        <div className='main'>
            <h1>To jest strona główna</h1>
            <h3>Jest ona dostępna dla zalogowanych użytkowmików</h3>
        </div>
    )

}

export default Main;