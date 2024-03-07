import React from 'react'
import './Explore.css'
import Iframe from 'react-iframe'

export const Explore = () => {
  return (
    <div>
        <h1>this is the video of react full tutorial</h1>
        <p>1. JSX (JavaScript XML):
JSX allows you to write HTML-like code within JavaScript. It's a syntax extension that simplifies writing UI components in React.

2. Components:
Components are the building blocks of React applications. They are reusable, self-contained pieces of UI that can be composed together to create complex interfaces.

3. State and Props:
State: State is data that a component manages internally. It's mutable and can be changed using setState. It's crucial for creating dynamic and interactive components.
Props (Properties): Props are inputs to components. They are immutable and are passed down from parent components to child components.
4. Lifecycle Methods (in Class Components):
Lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount, etc., allow you to hook into various stages of a component's lifecycle.

5. Hooks (in Functional Components):
Hooks, introduced in React 16.8, allow functional components to manage state and use lifecycle features. Common hooks include useState, useEffect, useContext, etc.

6. Conditional Rendering:
Using if-else statements, ternary operators, or logical && operators to conditionally render components or elements based on certain conditions.

7. Event Handling:
Attaching event handlers (like onClick, onChange, etc.) to elements to make components interactive.

8. Forms in React:
Handling form input elements and managing their state, usually with controlled components, where form elements are controlled by React state.

9. Routing:
Implementing client-side routing using libraries like React Router to create multi-page applications.

10. State Management Libraries:
Understanding state management libraries like Redux or Context API for managing larger-scale application states.

11. Testing in React:
Basic concepts of testing React components using tools like Jest and React Testing Library.

Start by getting comfortable with these concepts. React's official documentation, tutorials, and online resources like official guides, tutorials, and community forums can provide in-depth explanations and examples to solidify your understanding. Hands-on practice by building small applications will reinforce these concepts further.</p>
<iframe
        title="Embedded Video"
        width="560"
        height="315"
        src="https://www.youtube.com"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
    </iframe> </div>
  )
}
export default Explore;
