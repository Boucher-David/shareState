# shareState

A tiny javascript method for sharing state between every react component

## How to install

```
import listener from 'listener';
```

## Installation

Within every react component, call initiate within the constructor and pass in 'this'.
```
class App extends React.Component {
  constructor(props) {
    super(props);

    // create state before this line, or leave blank and shareState will create one for you.
    listener.initiate(this);
  }

  render() {
    return (
      <ACustomComponent />
    )
  }
}

```
A state object will be attached to 'this' and shared between every component that has initiate called within its constructor.

## Updating State within a Component

You are able to call listener.updateState from within every component that you have called initiate on.
```
listener.updateState({key: value});
```

updateState can take in multiple key-value pairs within the object.

```
listener.updateState({
  key: value,
  foo: bar,
  this: that
});
```
React's state updating is shallow, meaning it will only replace the keys you specify. It will leave the rest of the state object intact.

## Updating an Object within state

Take the following example of state

```
this.state = {
  this: 'that',
  heading: {
    foo: 'bar',
    yes: 'no'
  }
}

```

I want to update the 'foo' property within this.state.heading. One approach may be:
```
listener.updateState({
  heading: {
    foo: 'updatedFoo'
  }
});
```
This approach is fine if you also wanted to delete the 'yes' key. State would now look like:
```
this.state = {
  this: 'that',
  heading: {
    foo: 'updatedFoo'
    // yes is deleted!
  }
}
```
However, you may want to update 'foo' without changing the other keys within heading. To do this:
```
listener.updateState({
  heading: {
    ...this.state.heading,
    foo: 'updatedFoo' 
  }
});
```
Spread operator magic!
