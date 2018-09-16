# Entity Collection Container

The Collection Container feeds the entity data to each Collection child component, such as FormFilter and Collection Display.

The Container subscribes to the state maintained in the FormFilter and feed it into Collection Display so it can use the filter to control which items are displayed in the list

## State subscription

We currently hardcode to use `unstated` for convenience.
