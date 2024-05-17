# Children Composition

## Introduction

While the `Children` API in React has its ideal purposes, it could also lead to unexpected bugs and brittle code. 

## Pitfalls

- The `Children`  API does not traverse beyond one level of nesting when using its methods such as `forEach`, `map`, `count` etcetera

## Recommended Approaches

- Passing each child/JSX markup manually in between its parent
- Using the configurational approach by passing an array of objects containing the data for your children markup.
- Utilizing the render props pattern
