import Paper from "@material-ui/core/Paper";
import React from "react";

interface Props {
    children: any;
}

export default class PaperComponent extends React.Component<Props> {
    render() {
        return (
            <Paper
                style={{
                    marginBottom: '10px',
                    padding: 18,
                    minWidth: 280,
                }}>
                {this.props.children}
            </Paper>
        );
    }
}
