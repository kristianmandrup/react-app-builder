import {createFilterFactory} from './filter'

export const buildFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createFilter = createFilterFactory({entities, formTypes, forms})
  return {
    filter: createFilter({name})
  }
}
