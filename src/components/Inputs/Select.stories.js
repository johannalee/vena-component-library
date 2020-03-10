import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

import Select, { SelectComponent } from "./Select";

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

const styles = theme => ({
  selectField: {
    margin: "16px 10px 8px 0"
  },
  customWidth: {
    margin: "16px 10px 8px 0",
    width: "400px"
  },
  fullWidthField: {
    margin: "16px 0 8px 0"
  }
});

const dropdownOptions = [
  {
    value: "option1",
    menuListContent: "First Option"
  },
  {
    value: "option2",
    menuListContent: "Second Option"
  },
  {
    value: "option3",
    menuListContent: "Third Option"
  }
];

const longDropDownOptions = [
  {
    value: "option1",
    menuListContent: "First Option that is longer than the standward width"
  },
  {
    value: "option2",
    menuListContent: "Second Option that is longer than the standward width"
  },
  {
    value: "option3",
    menuListContent: "Third Option that is longer than the standward width"
  }
];

const jsxOptions = [
  {
    value: "option1",
    menuListContent: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <DeleteIcon />
        First
      </div>
    )
  },
  {
    value: "option2",
    menuListContent: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <DeleteIcon />
        <div style={{ textOverflow: "ellipsis", overflow: "hidden" }}>
          Second option that is really long and expands past the outside
        </div>
      </div>
    )
  },
  {
    value: "option3",
    menuListContent: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <DeleteIcon />
        Third
      </div>
    )
  }
];

class SelectDemo extends React.Component {
  state = {
    value: ""
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Select
          id={"dropdown-base"}
          label={"Select Operation"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
        />

        <Select
          id={"dropdown-required"}
          label={"Required"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          required
        />

        <Select
          id={"dropdown-helper"}
          label={"Helper Text"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
          required
        />

        <Select
          id={"dropdown-disabled"}
          label={"Disabled"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
          disabled
        />

        <Select
          id={"dropdown-placeholder"}
          label={"With Placeholder"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
          placeholder="Placeholder"
        />

        <Select
          id={"dropdown-error"}
          label={"Error"}
          className={classes.selectField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
          error
        />

        <Select
          id={"dropdown-long-options"}
          label={"Long Options"}
          className={classes.selectField}
          options={longDropDownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
        />

        <Select
          id={"dropdown-custom-width"}
          label={"Custom Width"}
          className={classes.customWidth}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
        />

        <Select
          id={"dropdown-full-width"}
          label={"Full Width"}
          className={classes.fullWidthField}
          options={dropdownOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
          fullWidth
        />

        <Select
          id={"dropdown-full-jsx"}
          label={"JSX Options"}
          className={classes.selectField}
          options={jsxOptions}
          value={this.state.value}
          onChange={this.onChange}
          helperText={"Some important text"}
        />
      </>
    );
  }
}

const StyledDemo = withStyles(styles)(SelectDemo);

storiesOf("Select", module).add(
  "Default",
  withInfo({
    source: false,
    propTables: [SelectComponent],
    propTablesExclude: [Select, SelectDemo, MuiThemeProvider]
  })(() => (
    <div>
      <MuiThemeProvider theme={addinTheme}>
        <div>
          <h2>Select (Addin)</h2>
          <StyledDemo />
        </div>
      </MuiThemeProvider>
    </div>
  ))
);
