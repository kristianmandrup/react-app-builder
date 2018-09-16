# Layout

Items can be positioned using a `Layout`
The App builder comes with the following layouters:

- `fixed`
- `relative`

You can create and use whatever layouters to suit your particular needs

## Fixed

Fixed layout is simply a fixed list, where each list position directly indicates the layout position

```js
person.properties.layout = ["height_in_cm", "favourite", "display_name"];
```

## Relative layout

Relative layout uses `before`, `after`, `first` and `last` to position display elements.

```js
person.properties.layout = {
  height_in_cm: {
    first: true
  },
  favourite: {
    last: true
  },
  display_name: {
    before: "height_in_cm"
  }
};

person.item.data = {
  display_name: "mike",
  height_in_cm: 157,
  favourite: true
};
```

Ordered properties for display

```js
person.item.data.ordered = [
  { height_in_cm: 157, index: -1 },
  { display_name: "mike", index: 0 },
  { favourite: true, index: 999 }
];
```

Display person property data:

```js
<Properties obj={person}>
  <DisplayInteger name="height_in_cm" value={157} />
  <DisplayString name="display_name" value={"mike"} />
  <DisplayBoolean name="favourite" value={true} />
</Properties>
```
