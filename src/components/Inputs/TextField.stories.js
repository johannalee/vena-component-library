import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";

import TextField, { TextFieldComponent } from "./TextField";

const addinTheme = createMuiTheme({
  venaTheme: "addin"
});

const webTheme = createMuiTheme({
  venaTheme: "web"
});

const styles = theme => ({
  textField: {
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

class TextFieldDemo extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MuiThemeProvider theme={addinTheme}>      
          <div>
            <h2>TextField (Addin)</h2>
            <TextField label="First Name" className={classes.textField} />

            <TextField
              label="Required"
              required={true}
              className={classes.textField}
            />

            <TextField
              label="Controlled"
              helperText="Some important text"
              value={this.state.value}
              onChange={this.handleChange}
              className={classes.textField}
            />

            <TextField
              label="Helper Text"
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Disabled"
              value="Input Value"
              disabled={true}
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Read Only"
              value="Input Value"
              readOnly={true}
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="With Placeholder"
              placeholder="Placeholder"
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Error"
              className={classes.textField}
              helperText="Some important text"
              error={true}
            />

            <TextField
              label="Number"
              className={classes.textField}
              type="number"
              helperText="Some important text"
            />

            <TextField
              label="With End Adornment"
              className={classes.textField}
              endAdornment={".xlsx"}
              helperText=""
            />

            <TextField
              label="Custom Width"
              className={classes.customWidth}
              helperText="Some important text"
            />

            <TextField
              label="Full Width"
              className={classes.fullWidthField}
              fullWidth={true}
              helperText="Some important text"
            />
          </div>
        </MuiThemeProvider>
        <MuiThemeProvider theme={webTheme}>      
          <div>
            <h2>TextField (Web)</h2>
            <TextField label="First Name" className={classes.textField} />

            <TextField
              label="Required"
              required={true}
              className={classes.textField}
            />

            <TextField
              label="Controlled"
              helperText="Some important text"
              value={this.state.value}
              onChange={this.handleChange}
              className={classes.textField}
            />

            <TextField
              label="Helper Text"
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Disabled"
              value="Input Value"
              disabled={true}
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Read Only"
              value="Input Value"
              readOnly={true}
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="With Placeholder"
              placeholder="Placeholder"
              helperText="Some important text"
              className={classes.textField}
            />

            <TextField
              label="Error"
              className={classes.textField}
              helperText="Some important text"
              error={true}
            />

            <TextField
              label="Success"
              className={classes.textField}
              helperText="Some important text"
              success={true}
            />

            <TextField
              label="Number"
              className={classes.textField}
              type="number"
              helperText="Some important text"
            />

            <TextField
              label="With End Adornment"
              className={classes.textField}
              endAdornment={".xlsx"}
              helperText=""
            />

            <TextField
              label="Custom Width"
              className={classes.customWidth}
              helperText="Some important text"
            />

            <TextField
              label="Full Width"
              className={classes.fullWidthField}
              fullWidth={true}
              helperText="Some important text"
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const StyledDemo = withStyles(styles)(TextFieldDemo);

storiesOf("TextField", module).add(
  "Default",
  withInfo({
    source: false,
    propTables: [TextFieldComponent],
    propTablesExclude: [TextField, TextFieldDemo, MuiThemeProvider]
  })(() => (
    <div>
      <MuiThemeProvider theme={addinTheme}>
        <StyledDemo />
      </MuiThemeProvider>
    </div>
  ))
);
