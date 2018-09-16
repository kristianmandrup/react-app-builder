# Filtering client

The client side can be either web or app. If it's web, please ensure it can be used on multiple devices. Completely up to you what frameworks you use; on our own code we use angular 2 or react for web, and all the usual libs for android and iOS that allows MVVM, MVP, and easier testing.

## Web Requirements

Please provide an initial list view with all existing matches provided in the database/matches.json file. You should also have a number of filters available, as listed above. If you use range sliders or any components where you have dragging actions etc, please ensure ensure they are cross device compatible Note - for filtering "distance in km" assume that the user has logged in as one of the users in matches.json file, and use their "city" property. You don't need to ask location from their browser

## App Requirements

Please provide an initial list view of all existing matches and a number of filters, as listed above. The resulting app should handle rotation and scale for tablets as well as phones. Note - for filtering "distance in km" assume that the user has logged in as one of the users in `matches.json` file. Ask for the users location in the app first. If the user does not supply it, use their "city" property from their profile

## React

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## App generator

The Filter form and collection display is generated, based on the entity schema and using a declarative app specification with mappings to components to be used for each entity field given a particular context.
