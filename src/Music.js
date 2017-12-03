import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Paper, SelectField, MenuItem, RaisedButton} from 'material-ui';

export default class Music extends React.Component {
/*    static propTypes = {
        lables: PropTypes.string
    };*/
    state = {
        lables: "",
    };

    raisedButtonClick() {
        this.setState({
            lables: "FFF"
        })
    }

    render() {
        // const { lables} = this.state;
        return (
            <MuiThemeProvider>
                <h1>{this.props.name}</h1>
                <Paper style={
                    {
                        height: 500,
                        width: 500,
                        margin: 20,
                        textAlign: 'center',
                        // display: 'inline-block'
                    }} zDepth={4}>
                    <h1>{this.props.name}</h1>
                    <RaisedButton label={"Люблю тебя!!!"}/>
                    <div className="row">
                        <SelectField floatingLabelText="Frequency">
                            <MenuItem value={1} primaryText="Never"/>
                            <MenuItem value={2} primaryText="Never2"/>
                        </SelectField>
                        <SelectField floatingLabelText="Frequency2">
                            <MenuItem value={1} primaryText="N"/>
                            <MenuItem value={2} primaryText="N2"/>
                        </SelectField>
                    </div>
                </Paper>
            </MuiThemeProvider>
        )
    }
}