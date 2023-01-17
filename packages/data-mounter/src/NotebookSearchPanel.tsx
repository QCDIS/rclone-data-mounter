import * as React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './Theme';
import { Divider } from '@material-ui/core';
import CurrentRemotes from "./CurrentRemotes"; // Import the styled CurrentRemotes component

const remotes = [
    { name: "test", type: "s3" },
    { name: "test2", type: "s3" },
    { name: "test3", type: "s3" }
  ];

interface DataMounterPanelProps {

}

export class DataMounterPanel extends React.Component<DataMounterPanelProps> {

    render(): React.ReactElement {

        return (
            <ThemeProvider theme={theme}>
                <div className={'lifewatch-widget'}>
                    <div className={'lifewatch-widget-content'}>
                        <div>
                            <p className={'lw-panel-header'}>
                                Rclone configuration
                            </p>
                        </div>
                        <Divider />
                        <div className={'current-remotes-field'}>
                            <CurrentRemotes remotes={remotes} />
                        </div>
                        <Divider />
                    </div>
                </div>
            </ThemeProvider>
        )
    }

}
