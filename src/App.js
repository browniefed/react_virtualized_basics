import React, { Component } from "react";

import { List, AutoSizer } from "react-virtualized";

class App extends Component {
  render() {
    return (
      <AutoSizer>
        {({ width, height }) => {
          return (
            <div style={{ width: `${width}px`, height: `${height}px` }}>
              {width}px x {height}px
            </div>
          );
        }}
      </AutoSizer>
    );
  }
}

export default App;
