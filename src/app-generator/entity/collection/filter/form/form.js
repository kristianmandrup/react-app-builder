import React from 'react';
import {DisplayControls} from './controls'
import {Container as StateContainer, Subscribe, Provider} from 'unstated'
import {error} from 'util';
import {createFormFactory} from './factory'

const createFormFinder = entityFormMap => name => {
  return entityFormMap[name]
}

const createState = (state) => {
  const FormStateContainer = class extends StateContainer {
    constructor(state = {}) {
      super()
      this.state = state
    }
  }
  return {state: new FormStateContainer(state), FormStateContainer}
}

export const createFilter = ({
  config = {}
}) => {
  const {filter} = config
  const {state} = createState({state: config.initialState});

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
              const state = $container.state
              const fields = state
              return (
                <form className={classes.form} {...filter}>
                  <DisplayControls fields={fields}/>
                </form>
              )
            }}
          </Subscribe>
        </Provider>
      )
    }
  }

  return {state, Form: FilterForm}
}

const isDefined = (val) => val !== undefined

const validateKeys = (method, opts, keys) => {
  const missingKeys = keys.map(key => isDefined(key))
  missingKeys && error(`${method} missing ${missingKeys} options`)
}

export const createFilterFormFactory = (opts) => {
  validateKeys('createFilterFormFactory', opts, ['entities', 'formTypes'])

  return ({name}) => {
    const createFormConfig = createFormFactory(opts)
    const config = createFormConfig({name})
    // TODO: fix new error, see unstated lib
    return {
      filter: createFilter({config}),
      config
    }
  }
}
