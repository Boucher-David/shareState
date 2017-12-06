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