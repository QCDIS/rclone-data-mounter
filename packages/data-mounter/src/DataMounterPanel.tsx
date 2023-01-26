import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider, Button } from '@material-ui/core';
import CurrentRemotes from './Pages/CurrentRemotes';
import NameNewRemoteField from './Pages/NameNewRemoteField';
import NewRemoteOptions from './Pages/NewRemoteOptions';
import AccesKeyIdField from './Pages/AccesKeyIdField';

const remotes = [
    { name: 'test', type: 's3' },
    { name: 'test2', type: 's3' },
    { name: 'test4', type: 's3' }
];

const options = [
    'New remote', // I CHANGED THE ORDER HERE FROM RCLONE!!
    'Edit existing remote',
    'Delete remote',
    'Rename remote',
    'Copy remote',
    'Set configuration password'
];

interface DataMounterPanelProps {}

export const DataMounterPanel: React.FC<DataMounterPanelProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAccesKeyIdField, setShowAccesKeyIdField] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <div className={'lifewatch-widget'}>
                <div className={'lifewatch-widget-content'}>
                    <div>
                        <p className={'lw-panel-header'}>Rclone configuration</p>
                    </div>
                    <Divider />
                    <div className={'current-remotes-field'}>
                        <CurrentRemotes remotes={remotes} />
                    </div>
                    <Divider />
                    {selectedOption ? (
                        <div>
                            <h2>
                                {selectedOption}
                                <div>
                                    <NameNewRemoteField />
                                    <select className="NewRemoteOptionsMenu">
                                        {NewRemoteOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </h2>
                            <Button onClick={() => setSelectedOption(null)}>Back</Button>
                            <Button onClick={() => setShowAccesKeyIdField(true)}>Next</Button>
                            {showAccesKeyIdField && <AccesKeyIdField />}
                        </div>
                    ) : (
                        <div className="option-menu-container">
                            {options.map((option, index) => (
                                <Button key={index} onClick={() => setSelectedOption(option)}>
                                    {option}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </ThemeProvider>
    );
};
