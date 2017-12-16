import React from 'react';
import { RaisedButton, TextField } from 'material-ui';

export default class Music extends React.Component {
    render() {
        return (
            <div>
        <h1>{this.props.name}</h1>
                <TextField
                    defaultValue="Default Value"
                    floatingLabelText="Floating Label Text"
                />
                <RaisedButton label="Primary" primary={true} style={{margin: 12}} />
            </div>
    )
    }
}