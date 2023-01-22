import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider, Button } from '@material-ui/core';
import CurrentRemotes from './CurrentRemotes';

const remotes = [
    { name: 'test', type: 's3' },
    { name: 'test2', type: 's3' },
    { name: 'test3', type: 's3' }
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
                    <div className={'option-menu-container'}>
                        {options.map((option, index) => (
                            <Button key={index} variant="contained">
                                {option}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};
