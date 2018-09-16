import React from 'react';
import {Controls} from './controls'

const person = {
  properties: {
    name: {
      type: 'string'
    },
    age: {
      type: 'integer'
    }
  }
}

const types = {
  person
}

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

export const createForm = (type) => ({initialState: createInitialState(type)})

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
          <Controls {...this.state}/>
        </form>
      )
    }
  }
}
