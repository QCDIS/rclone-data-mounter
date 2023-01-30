import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider, Button } from '@material-ui/core';
import CurrentRemotes from './Pages/CurrentRemotes';
import NameNewRemoteField from './Pages/NameNewRemoteField';
import NewRemoteOptions from './Pages/NewRemoteOptions';
import AccesKeyIdField from './Pages/AccesKeyIdField';
import { remotes, options, regions } from './RemotesAndOptions';
import SecretKeyField from './Pages/SecretKeyField';

interface DataMounterPanelProps {}

export const DataMounterPanel: React.FC<DataMounterPanelProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAccesKeyIdField, setShowAccesKeyIdField] = useState(false);
    const [showSecretKeyField, setShowSecretKeyField] = useState(false);
    const [showNameNewRemoteField, setShowNameNewRemoteField] = useState(false);
    const [showNewRemoteOptions, setShowNewRemoteOptions] = useState(false);
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
                            <h2>{selectedOption}</h2>
                            <div>
                                <Button
                                    onClick={() => {
                                        setSelectedOption(null);
                                        setShowAccesKeyIdField(false);
                                        setShowSecretKeyField(false);
                                        setShowNameNewRemoteField(false);
                                        setShowNewRemoteOptions(false);
                                    }}
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={() => {
                                        setShowAccesKeyIdField(true);
                                        setShowSecretKeyField(true);
                                        setShowNameNewRemoteField(false);
                                        setShowNewRemoteOptions(false);
                                    }}
                                >
                                    Next
                                </Button>
                                {showAccesKeyIdField && <AccesKeyIdField />}
                                {showSecretKeyField && <SecretKeyField />}
                                {showNameNewRemoteField && <NameNewRemoteField />}
                                {showNewRemoteOptions && (
                                    <select className="NewRemoteOptionsMenu">
                                        {NewRemoteOptions.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="option-menu-container">
                            {options.map((option, index) => (
                                <Button
                                    key={index}
                                    onClick={() => {
                                        setSelectedOption(option);
                                        setShowNameNewRemoteField(true);
                                        setShowNewRemoteOptions(true);
                                    }}
                                >
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
