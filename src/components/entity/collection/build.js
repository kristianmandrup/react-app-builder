import {createFilterForm} from './filter'

export const build = (type) => ({filter: createFilterForm(type)})
