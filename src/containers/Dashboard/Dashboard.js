import React from 'react';
import EntryForm from '../EntryForm/EntryForm';

import {EditForm} from '../EditForm/EditForm';
import Entries from '../Entries/Entries';
export const Dashboard = () => {


    return (
        <div>

            <EntryForm />
            <EditForm/>
            <Entries/>
        </div>
    );
}