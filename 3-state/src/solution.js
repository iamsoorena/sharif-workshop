////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// 1. Render a tab for each country with its name in the tab
// 2. Add some state to check against while rendering the tabs to
//    indicate which one is active (don't worry about click
//    handlers yet!)
// 3. Use that same state to decide which panel to render
// 4. Add click handlers to the tabs to change the state
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";

let styles = {};

let countries = [
  {
    id: 1,
    name: "USA",
    description: "Land of the Free, Home of the brave"
  },
  {
    id: 2,
    name: "Brazil",
    description: "Sunshine, beaches, and Carnival"
  },
  {
    id: 3,
    name: "Russia",
    description: "World Cup 2018!"
  }
];

class Tabs extends React.Component {
  state = {
    activeIndex: 0
  };

  render() {
    return (
      <div>
        {this.props.data.map((tab, index) => {
          let isActive = index === this.state.activeIndex;
          return (
            <button
              onClick={() => {
                this.setState({ activeIndex: index });
              }}
              style={
                isActive ? styles.activeTab : styles.tab
              }
            >
              {tab.name}
            </button>
          );
        })}

        <div style={styles.panel}>
          {
            this.props.data[this.state.activeIndex]
              .description
          }
        </div>
      </div>
    );
  }
}

styles.tab = {
  display: "inline-block",
  padding: 10,
  margin: 10,
  font: "inherit",
  border: "none",
  borderBottom: "4px solid",
  borderBottomColor: "#ccc",
  cursor: "pointer"
};
styles.activeTab = {
  ...styles.tab,
  borderBottomColor: "#000"
};

styles.panel = {
  padding: 10
};

ReactDOM.render(
  <Tabs data={countries} />,
  document.getElementById("root")
);
