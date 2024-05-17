# Layout Component Pattern

## Introduction

The layout pattern organizes how your app’s UI is structured from a container scale. These components concern how things look on the UI rather than how they work. They have just one simple job— display the child components in a particular structure and nothing else!

This means that child components only need to focus on displaying their functions and do not care where they are being rendered from.   

In simple words: they determine how a component should look on the viewport

## Mechanism

A layout component dynamically accepts any component as a child and renders them according to certain structural or organizational styles. A good layout component maintains a distinction between itself and any children. This means it can be changed and modified without affecting the behaviour or lifecycle of the child component. 

In addition, layout components could receive style props to enable them to dynamically adjust their layout structure based on passed style values. 

## Use Cases

A good and common reason to define layout components is when you have certain components that are shared across multiple files and pages such as: 

- the navigation bar
- the footer
- a side menu
- two or more components sharing major content each etc.

Rather than importing them on every page load, the layout design pattern ensures that they are defined once, and reused across the app. The content is also designed to be dynamic, which means you can still encapsulate the logic of the links on the nav bar for example, without affecting the layout and vice versa.

It is also important to note that only components that are not frequently updated (if ever), should be structured as a layout.

## Benefits

Separation of structural and logical concerns: this pattern enables you to have a clear distinction between the shape or skeletal display of your entire UI and the actual content it displays.
