import {createInitialStateFactory} from './state'

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
