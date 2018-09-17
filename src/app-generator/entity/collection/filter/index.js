export {map, controls}
from './controls'
export {createFilterFormFactory}
from './form'

export const createFilterFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createFilter = createFilterFormFactory({entities, formTypes, forms})
  return createFilter({name})
}
