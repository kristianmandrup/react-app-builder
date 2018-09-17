import React from 'react';
import {DisplayControls} from '../controls'
import {createInitialStateFactory} from './state'
import {Container as StateContainer, Subscribe, Provider} from 'unstated'
import {error} from 'util';

const createFormFor = ({
  forms = {}
}) => name => forms[name]

export const createFormFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createInitialState = createInitialStateFactory({entities, formTypes})
  const formFor = createFormFor({forms})
  const filter = (formFor(name) || {}).filter || {}
  return {
    initialState: createInitialState({name}),
    filter
  }
}

const createFormFinder = entityFormMap => name => {
  return entityFormMap[name]
}

export const createFilter = ({config}) => {
  const {filter} = config
  const FormStateContainer = class extends StateContainer {
    constructor(props = {}) {
      super()
      this.state = props
    }
  }
  const state = new FormStateContainer(config.initialState);

  const FilterForm = class extends React.Component {

    handleChange = (event, value) => {
      event.preventDefault()
      const key = [event.target.name]
      this.setState({[key]: value})
    }

    render() {
      let classes = this.props.classes || {}

      return (
        <Provider>
          <Subscribe to={[state]}>
            {$container => {
              return (
                <form className={classes.form} {...filter}>
                  <DisplayControls item={$container.state}/>
                </form>
              )
            }}
          </Subscribe>
        </Provider>
      )
    }
  }

  return {FormStateContainer, Form: FilterForm}
}

export const createFilterFormFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createFormConfig = createFormFactory({entities, formTypes})
  const config = createFormConfig({name, forms})

  // TODO: fix new error, see unstated lib
  return createFilter({config})
}
