import React, { Component } from "react";
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from "react-virtualized";



class App extends Component {
  constructor(props) {
    super(props);
    const cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 50
    });
    this.cache = cache;
  }
  renderRow = ({ index, parent, key, style}) => {
    return (
      <CellMeasurer 
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div style={style}>
          <div>{this.props.data[index].name}</div>
          <div>{this.props.data[index].email}</div>
          <div style={{height: `${this.props.data[index].randomHeight}px`}} />
        </div>
      </CellMeasurer>
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
            deferredMeasurementCache={this.cache}
            rowHeight={this.cache.rowHeight}
            rowRenderer={this.renderRow}
          />
        }
      }
      </AutoSizer>
    );
  }
}

export default App;
