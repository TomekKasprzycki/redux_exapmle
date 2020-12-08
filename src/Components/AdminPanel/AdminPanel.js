import React, { useEffect } from 'react';
import './AdminPanel.css';

const AdminPanel = () => {

    useEffect(() => { document.title="Panel administracyjny" }, [])

return(
    <div className='admin'>
        <h1>To jest strona dostępna tylko dla Admina...</h1>
        <h3>...i zawiera super ważne funkcje!!!</h3>
    </div>
)

}

export default AdminPanel;