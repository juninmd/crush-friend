import React from "react";
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';

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
                        {this.props.title}
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

