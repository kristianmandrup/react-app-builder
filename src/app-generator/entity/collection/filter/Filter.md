# Filter

- Field for each element (auto-generated depending on format)

## Generic mappings

- Boolean : On/Off Slider
- String: Text Input
- Integer: Text Input with some numeric validation
- Integer enum (limites range) : Range slider, Select

## How?

Filter consists of a Form that displays the filtering options for the particular entity.

The Filter form is:

- generated based on the entity schema
- fully pluggable, using named form field mappings if present, defaulting to generic mappings.

You can create and plug-in your own component mappings (or generators) as needed

## Form mappings

Generic type->control mappings for this example app (using _Material UI_) are as follows:

```js
forms.filter.generic = {
  string: TextField,
  number: Slider,
  boolean: Switch
};
```

## Form

See [Form](./form/Form.md)

## Controls

See [Controls](./controls/Controls.md)
