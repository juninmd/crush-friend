import React from "react";

interface Props {
    children?: any;
}

export default class LogoComponent extends React.Component<Props> {
    render() {
        return (
            <div
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <img
                    src="logo.png"
                    style={{ width: '200px' }}
                    alt="Logo" />
                <br />
            </div>
        );
    }
}

