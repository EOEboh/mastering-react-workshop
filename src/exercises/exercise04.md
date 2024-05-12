# Container Components

## Introduction

Container components handle logic, state and behaviour for its potential children components (presentational components).

You may also know them as *stateful* components because they handle the business logic, data fetching etc. In addition to that, they usually do not contain any markup or UI of their own. Their job is to supply the necessary data to the children components, which in turn, renders the UI or presentational markup.

Container components are concerned with *how things work* rather than *how things look.*

## Mechanism

Containers serve as data sources for UI markups, and the data is passed down to the child via children composition. 

While container components are mostly stateful and presentational components are stateless, it is not a hard requirement. 

Some containers can be stateless (e.g  a container to get data stored on localStorage) while some presentational components can be stateful (like having some UI-specific state or more).

## Use Cases

A common reason you’d want to introduce containers is when you have so many data props being passed to multiple UI components, sometimes these props are drilled through intermediary components who do not need them, giving you extra components to worry about when you need to modify, add or remove props. 

 

Another strong case for containers is when you need to reuse your presentational components in multiple locations. Containers make it possible to reuse your presentational components across different data sources without worrying about it being coupled to the business logic or data management. Giving you that extra modularity!

## Benefits

- Separation of Concerns: This pattern provides a clear distinction between logic and UI, which becomes increasingly helpful in terms of maintenance and scale.
- Reusability: Like stated earlier, this patterns generates the possibility of reusing your markup or UI in multiple places across your app without bothering about the logical aspect of it. At the same time, containers can be structured to be generic and highly reusable too
- Readability: This pattern neatly follows the **Single Responsibility Principle** (SRP). The containers handle the business logic, state logic and data fetching while the presentational component focuses on displaying the appropriate UI without worrying where the data comes from or how the data comes.
- Easier Testing: You or the QA tester can easily conduct regression and snapshot tests on your UI in isolation.

## Side Remark

You may be wondering: 

> “But hooks could also do the same thing"
> 

As much as React hooks is also used to extract and encapsulate logic from UI, they do not offer a clear distinction from the logical and presentational aspect of things. 

Hooks can be used for both logic and presentation, hence it’s so easy to mix things and further blur the lines between both worlds, especially as your code scales. The container component pattern ensures we have a clear boundary between both worlds while still allowing modularity, reusability and flexibility overall.

Secondly, you do not have to be dogmatic about using this pattern. Sometimes it’s completely okay to mix both logic and UI in some of your components without sacrificing readability and performance. 

Lastly, you do not have to get it right the first time you utilize this approach anywhere in your app. Sometimes it takes time to get the perfect separation and abstraction as you progressively work on your codebase.
