import React from 'react';
import {FilterControls} from './controls/controls'
import {formatMs} from '@material-ui/core/styles/transitions';

const createInitialState = (type) => {
  const schema = types[type]
  return Object
    .keys(schema)
    .reduce((acc, propSchema) => {
      const type = propSchema.type || 'string'
      acc[key] = types[type](propSchema)
      return acc
    }, {})

}

const createForm = (type) => ({initialState: createInitialState(type)})

const forms = {
  person: {
    filter: {
      autoComplete: 'off'
    }
  }
}

const formFor = (type) => {
  return forms[type]
}

export const createFilterForm = (type) => {
  const form = createForm(type)

  return class extends Container {
    state = form.initialState

    handleChange = (event, value) => {
      event.preventDefault()
      const key = [event.target.name]
      this.setState({[key]: value})
    }

    render() {
      const {classes} = this.props || {}
      const filter = formFor(type).filter || {}
      return (
        <form className={classes.container} {...filter}>
          <FilterControls {...this.state}/>
        </form>
      )
    }
  }
}
