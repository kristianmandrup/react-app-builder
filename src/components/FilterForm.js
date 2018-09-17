import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Switch, TextField} from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    // marginLeft: theme.spacing.unit, marginRight: theme.spacing.unit,
    width: 200
  }
};

// FilterForm.propTypes = {   classes: PropTypes.object.isRequired };

export class CFilterForm extends React.Component {

  state = {
    display_name: '',
    height_in_cm: 160,
    favourite: false
  }

  handleChange = (event, value) => {
    event.preventDefault()
    const key = [event.target.name]
    this.setState({[key]: value});
  }

  render() {
    const {classes} = this.props || {}
    const {display_name, height_in_cm, favourite} = this.state

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="display_name"
          name="display_name"
          label="Name"
          className={classes.textField}
          value={display_name}
          onChange={this.handleChange}
          margin="normal"/>
        <Slider
          name="height_in_cm"
          value={height_in_cm}
          aria-labelledby="label"
          onChange={this.handleChange}/>
        <Switch
          name="favourite"
          checked={favourite}
          onChange={this.handleChange}
          value={this.state.favourite}
          color="primary"/>

      </form>
    )
  }
}

export const FilterForm = withStyles(styles)(CFilterForm);
