export {map, controls}
from './controls'

import {createFilterFormFactory} from './form'

export {createFilterFormFactory}

export const createFilterFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createFilterForm = createFilterFormFactory({entities, formTypes, forms})
  return createFilterForm({name})
}
