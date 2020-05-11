import React from "react";
import { FormControl, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';


interface Props {
    children?: any;
    checkboxes: { label: string; name: string }[]
}

export default class CheckBoxComponent extends React.Component<Props> {
    render() {
        return (
            <div>
                <FormControl component="fieldset">
                    <FormGroup row>
                        {this.props.checkboxes.map((checkbox) => {
                            return <FormControlLabel
                                control={<Checkbox name={checkbox.name} />}
                                label={checkbox.label}
                            />
                        })}
                    </FormGroup>
                </FormControl>
            </div>
        );
    }
}

