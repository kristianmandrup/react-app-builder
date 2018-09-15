import {createFilterForm} from './collection/filter'

export const build = (type) => ({filter: createFilterForm(type)}
