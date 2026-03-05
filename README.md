### Customer Support Zone

#### What is JSX, and why is it used?

JSX is a syntax extension for JavaScript that allows you to write HTML‑like code inside React components. The markup looks familiar and improves readability, making UI definitions more natural. When React processes it, JSX is transformed into `React.createElement` calls behind the scenes:

```jsx
<div>Hello World</div>
```

is compiled to:

```js
React.createElement("div", null, "Hello World");
```

That call returns a plain object representing a virtual DOM node:

```js
{
  type: 'div',
  props: {
    children: 'Hello World'
  }
}
```

---

#### What is the difference between State and Props?

- **Props** flow from parent to child and cannot be modified by the receiving component.
- **State** is local data that the component controls, typically updated via hooks like `useState` or in class components with `this.setState`.

---

#### What is the useState hook, and how does it work?

`useState` is a React hook for storing state in functional components.

```jsx
const [count, setCount] = useState(0);
```

- The hook returns a pair: the current value and a setter function.
- Calling the setter updates the state and triggers a re-render.
- Each `useState` call creates an independent state slot; order must remain consistent between renders.

---

#### How can you share state between components in React?

1. **Lift state up** – move shared state to the closest common ancestor and pass it down via props.
2. **Context API** – create a context provider so any descendant can access the value without prop drilling.
3. **State management libraries** – Redux, MobX, Zustand, etc., offer global stores.
4. **URL/query parameters or services** – useful for persisting state across pages or sessions.

---

#### How is event handling done in React?

React uses camelCase event names and passes functions as handlers.

```jsx
<button onClick={() => setCount(count + 1)}>Increment</button>
```

- The event object is a `SyntheticEvent` that normalizes behavior across browsers.
- You can call `event.preventDefault()` or `event.stopPropagation()` just like in plain DOM.
- Bind `this` in class components or use arrow functions in functional components.
