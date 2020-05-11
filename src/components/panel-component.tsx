import React from "react";
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface Props {
    children?: any;
    title: string;
    description: string;
}

export default class PanelComponent extends React.Component<Props> {
    render() {
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>
                        <Alert severity="info">{this.props.title}</Alert>
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        {this.props.description}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

