import {createFilterFormFactory} from './form'

export const createFilterFactory = ({entities, formTypes, forms}) => ({name}) => {
  const createFilterForm = createFilterFormFactory({entities, formTypes, forms})
  return createFilterForm({name})
}
