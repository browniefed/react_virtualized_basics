import React, { Component } from "react";
import { List, AutoSizer } from "react-virtualized";

class App extends Component {
  renderRow = ({ index, isScrolling, key, style}) => {
    return (
      <div key={key} style={style}>
        <div>{this.props.data[index].name}</div>
        <div>{this.props.data[index].email}</div>
      </div>
    )
  }
  render() {
    return (
      <AutoSizer>
      {
        ({ width, height }) => {
          return <List
            rowCount={this.props.data.length}
            width={width}
            height={height}
            rowHeight={50}
            rowRenderer={this.renderRow}
          />
        }
      }
      </AutoSizer>
    );
  }
}

export default App;
