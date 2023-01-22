import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface INewRemote1Props {}

const NewRemote1: React.FunctionComponent<INewRemote1Props> = (props) => {
    const navigate = useNavigate();
    return (
        <div>
            <p>This is the first new remote page.</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default NewRemote1;
