import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MuiSwitch from "@material-ui/core/Switch";
import { GREEN, GRAY, WHITE } from "../../tokens/colors.json";

const styles = theme => ({
  switchBase: {
    "&$switchChecked": {
      color: WHITE,
      "& + $switchBar": {
        backgroundColor: GREEN.primary
      }
    },
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  switchChecked: {
    transform: "translateX(12px)",
    "& + $switchBar": {
      opacity: 1
    }
  },
  switchBar: {
    borderRadius: 10,
    width: 30,
    height: 16,
    marginTop: -8,
    marginLeft: -4,
    backgroundColor: GRAY.fifty,
    opacity: 1
  },
  switchIcon: {
    width: 12,
    height: 12,
    marginLeft: 23,
    boxShadow: "none"
  },
  switchLabelOn: {
    color: GREEN.primary,
    fontWeight: 700,
    fontSize: 12,
    marginTop: 1,
    fontFamily: "Open Sans"
  },
  switchLabelOff: {
    color: GRAY.primary,
    fontWeight: 700,
    fontSize: 12,
    marginTop: 1,
    fontFamily: "Open Sans"
  }
});

const Switch = ({ classes, checked, onChange, enabledText, disabledText }) => (
  <FormControlLabel
    control={
      <MuiSwitch
        classes={{
          switchBase: classes.switchBase,
          bar: classes.switchBar,
          icon: classes.switchIcon,
          iconChecked: classes.switchIconChecked,
          checked: classes.switchChecked
        }}
        inputProps={{ "aria-checked": checked }}
        checked={checked}
        onChange={onChange}
      />
    }
    label={checked ? enabledText : disabledText}
    classes={{
      label: checked ? classes.switchLabelOn : classes.switchLabelOff
    }}
  />
);

Switch.defaultProps = {
  checked: false,
  onChange: () => {},
  enabledText: "ON",
  disabledText: "OFF"
};

Switch.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Controlled switch value */
  checked: PropTypes.bool,
  /** Switch change handler */
  onChange: PropTypes.func.isRequired,
  /** Switch label enabled text */
  enabledText: PropTypes.string,
  /** Switch label disabled text */
  disabledText: PropTypes.string
};

export const SwitchComponent = Switch;
export default withStyles(styles)(Switch);
