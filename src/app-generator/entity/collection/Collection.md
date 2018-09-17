# Collection

A Collection is displayed using:

- Container

## Container

The Container (subscribes to state and passed down to child components via props)

- Filter
- Display

### Filter

Displays form with filters for the collection entity. Used to control which collection items to display

See [Filter](./filter/Filter.md)

### Display

Filters collection `items` to be displayed using `filter` received from Context API via unstated `StateContainer` (ie. `Container`)

Displays a cell for each collection item. Each cell displays one or more properties of the collection (by default all).
