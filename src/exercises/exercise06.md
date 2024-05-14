# Compound Component Pattern

## Introduction

When building applications in React, there are times when you have to deal with a bunch of components that are closely dependent on each other—they work together. They either share the same state or UI logic in order to work efficiently. 

Examples of these components are: 

- Select input in html
- Drop-down menus
- Accordions
- Menu items and so on

 If you were to re-engineer these closely related components using a manual approach, in order to achieve the same behaviour, it would have been so daunting and hard to maintain. 

Imagine a select option without the compound pattern as its API: 

```html
<select options="key1:value1;key2:value2;key3:value3"></select>
```

Looks clunky right? It’s hard to even tell the relationship between each values and their parent component.

This is where the ***Compound Component*** pattern shines. 

It provides a single interface for managing closely related components that work together to achieve certain tasks. 

## Mechanism

The goal of compound component is to provide a unified system interface for closely related components to share state and intertwine logic between themselves. 

Compound component pattern adopt a compositional approach (defining subcomponents) rather than a configurational one (passing props). This gives you more control over the markup especially when you need to pass attributes, styles etc 

The two outstanding ways of implementing compound components is: 

- via `[React.](http://React.Children.map)cloneElement`
- via `React.Context`

Both methods ensure that children components is passed dynamically alongside the necessary props and state they need to define their own logic.

Within this pattern, state is implicitly shared amongst the children components from the parent, and this helps the parent component in handling the UI logic according to how the behavior is defined.

## Use Cases

A very good use case for this pattern would be when you are dealing with a UI that requires dynamic rendering of child content, as the user traverses through the list of data attached to it. 

examples are : 

- accordions which contains different sections from the heading/title, to each item’s heading, to their body content etc.
- tabs, which renders different content as you click through each title buttons

## Benefits

- Eliminates component cluttering: this pattern gives you a highly organized interface to manage very closely related components as opposed to having them cluttered over your app.
- Easy Composability: every child component can be composed with custom behaviours that the UI needs, making it easy to modify.
- Easily Reusable: You can pass any content or child to your defined components, enabling you to reuse them everywhere

The ripple effect is that this eliminates the need for prop drilling, having scattered components that need each other, and reduces verbosity.
