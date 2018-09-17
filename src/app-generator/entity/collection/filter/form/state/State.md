# Filter form state

## Initial state

To generate filter form state, you first need to feed the generator some configuration data of the following form:

```js
export const formTypes = {
  string: "",
  boolean: false,
  number,
  integer: number
};

export const person = {
  properties: {
    name: {
      type: "string"
    },
    age: {
      type: "integer",
      min: 0,
      max: 120
    }
  }
};

export const entities = {
  person
};
```

Then create a `createInitialState` function

```js
const createInitialState = createInitialStateFactory({ entities, formTypes });
```

Then you can create the initial state of the filter form for the entity in question, such as `person`

The `state` returned will be an object, where each entry controls the value for one of the filter controls. The control (field) values will each be initialized based on the `formTypes` configuration passed. The value can either be static, such as `0` or a function, calculated based on the property (JSON) schema (such as using `min` and `max` to set initial value in the middle)

```js
const state = createInitialState({ name: "person" });
const { name, age } = state;
```

## Value resolver

To resolve the initial values for each of the controls, see [Value resolver](./Value-Resolver.md)
