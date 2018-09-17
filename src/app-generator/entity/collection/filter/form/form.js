import React from 'react';
import {Controls} from '../controls'
import {createInitialStateFactory} from './state'
import {Container as StateContainer} from 'unstated'

export const createFormFactory = ({entities, formTypes}) => ({name}) => {
  const createInitialState = createInitialStateFactory({entities, formTypes})
  return {
    initialState: createInitialState({name})
  }
}

const createFormFinder = entityFormMap => name => {
  return entityFormMap[name]
}

const createFormFor = ({
  forms = {}
}) => name => forms[name]

export const createFilterFormFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createForm = createFormFactory({entities, formTypes})
  const form = createForm({name})
  const formFor = createFormFor({forms})
  const filter = (formFor(name) || {}).filter || {}

  // TODO: fix new error, see unstated lib
  return class extends StateContainer {
    state = form.initialState

    handleChange = (event, value) => {
      event.preventDefault()
      const key = [event.target.name]
      this.setState({[key]: value})
    }

    render() {
      let classes = this.props.classes || {}
      return (
        <form className={classes.form} {...filter}>
          <Controls {...this.state}/>
        </form>
      )
    }
  }
}
