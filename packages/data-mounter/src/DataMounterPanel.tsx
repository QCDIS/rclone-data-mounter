import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider, Button } from '@material-ui/core';
import CurrentRemotes from './Pages/CurrentRemotes';
import NameNewRemoteField from './Pages/NameNewRemoteField';
import NewRemoteOptions from './Pages/NewRemoteOptions';
import AccesKeyIdField from './Pages/AccesKeyIdField';
import EndpointS3APIField from './Pages/EndpointS3API';
import { remotes, options, regions } from './Pages/RemotesAndOptions';
import Dropdown from './Pages/Dropdown';
import SecretKeyField from './Pages/SecretKeyField';

interface DataMounterPanelProps {}

export const DataMounterPanel: React.FC<DataMounterPanelProps> = (props) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showAccesKeyIdField, setShowAccesKeyIdField] = useState(false);
    const [showSecretKeyField, setShowSecretKeyField] = useState(false);
    const [showNameNewRemoteField, setShowNameNewRemoteField] = useState(false);
    const [showNewRemoteOptions, setShowNewRemoteOptions] = useState(false);
    const [showRegions, setShowRegions] = useState(false);
    const [showEndpointS3APIField, setShowEndpointS3APIField] = useState(false);
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
                                        setShowRegions(false);
                                        setShowEndpointS3APIField(false);
                                    }}
                                >
                                    Back
                                </Button>
                                <Button
                                    onClick={() => {
                                        setShowAccesKeyIdField(true);
                                        setShowSecretKeyField(true);
                                        setShowRegions(true);
                                        setShowEndpointS3APIField(true);
                                        setShowNameNewRemoteField(false);
                                        setShowNewRemoteOptions(false);
                                    }}
                                >
                                    Next
                                </Button>
                                {showAccesKeyIdField && <AccesKeyIdField />}
                                {showSecretKeyField && <SecretKeyField />}
                                {showRegions && <Dropdown options={regions} show={showRegions} className={'RegionsMenu'} />}
                                {showEndpointS3APIField && <EndpointS3APIField />}
                                {showNameNewRemoteField && <NameNewRemoteField />}
                                {showNewRemoteOptions && <Dropdown options={NewRemoteOptions} show={showNewRemoteOptions} className={'NewRemoteOptionsMenu'} />}
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
