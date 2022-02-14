import React, { useContext } from 'react';
import { StorageContext } from '../Providers/StorageProvider';

export default function InformationsPage() {

    const { information } = useContext(StorageContext)

    return (
        <div>
        <h1>Informations</h1>

        {information && information.firstname}
        {information && information.lastname}

        </div>
    ) 
}