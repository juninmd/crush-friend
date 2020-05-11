import React from "react";
import { FormControl, Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';


interface Props {
  children?: any;
  checkboxes: { label: string; name: string; }[];
  onChange: any;
}

export default class CheckBoxComponent extends React.Component<Props> {
  render() {
    return (
      <FormControl component="fieldset">
        <FormGroup row>
          {this.props.checkboxes.map((checkbox, key) => {
            return <FormControlLabel
              key={key}
              control={<Checkbox name={checkbox.name} />}
              label={checkbox.label}
              onChange={this.props.onChange}
            />
          })}
        </FormGroup>
      </FormControl>
    );
  }
}

