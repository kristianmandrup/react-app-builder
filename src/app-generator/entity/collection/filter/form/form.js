import React from 'react';
import {Controls} from '../controls'
import {Container as StateContainer} from 'unstated'

export const createForm = ({entity}) => ({
  initialState: createInitialState({entity})
})

const createFormFinder = entityFormMap => entity => {
  return entityFormMap[entity]
}

export const createFilterForm = (type) => {
  const form = createForm(type)

  return class extends StateContainer {
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
        <form className={classes.form} {...filter}>
          <Controls {...this.state}/>
        </form>
      )
    }
  }
}
