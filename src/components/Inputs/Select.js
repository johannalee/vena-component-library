import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MuiTextField from "@material-ui/core/TextField";
import {
  BLUE,
  GRAY,
  RED,
  WHITE,
  BLACK
} from "../../tokens/colors.json";

const styles = () => {
  return {
    listItem: {
      padding: "0 8px 0 8px",
      minHeight: "32px",
      display: "flex",
      alignItems: "center",
      fontSize: "14px"
    },
    listPadding: {
      padding: 0
    },
    paper: {
      boxShadow: `0 0 0 1px ${GRAY.fifty}`,
      borderRadius: 0
    },
    selectSelect: {
      height: "30px",
      padding: "0 32px 0 8px",
      lineHeight: "30px",

      "&:focus": {
        background: WHITE
      }
    },
    placeholder: {
      color: GRAY.ninety
    },
    formControlRoot: {
      width: "320px",

      "&$formControlFullWidth": {
        width: "100%"
      }
    },
    formControlFullWidth: {},
    inputRoot: {
      backgroundColor: WHITE,
      border: `1px solid ${GRAY.fifty}`,
      boxSizing: "border-box",
      color: BLACK,
      fontSize: "14px",
      height: "32px",

      "$labelRoot + &": {
        marginTop: "8px"
      },
      "&:hover": {
        border: `1px solid ${GRAY.ninety}`
      },
      "&$inputDisabled": {
        border: `1px solid ${GRAY.fifty}`,
        backgroundColor: GRAY.thirty
      },
      "&$inputError": {
        border: `1px solid ${RED.fifty}`
      },
      "&$inputFocused": {
        border: `1px solid ${BLUE.fifty}`
      }
    },
    inputDisabled: {},
    inputError: {},
    inputFormControl: {},
    inputFocused: {},
    helperTextRoot: {
      color: GRAY.ninety,
      fontSize: "12px",
      fontStyle: "italic",

      "&$helperTextError": {
        color: RED.fifty
      }
    },
    helperTextError: {},
    labelRoot: {
      color: BLACK,
      fontSize: "14px",
      transform: "none",
      transition: "none",
      position: "static",

      "&$labelDisabled": {
        color: BLACK
      },
      "&$labelError": {
        color: BLACK
      },
      "&$labelFocused": {
        color: BLACK
      }
    },
    labelDisabled: {},
    labelError: {},
    labelFocused: {}
  };
};

function Select({
  classes,
  placeholder,
  options,
  value,
  helperText,
  onChange,
  disabled,
  error,
  fullWidth,
  required,
  id,
  label,
  ...rest
}) {
  let dropdownOptions = options;
  if (placeholder) {
    dropdownOptions = [
      {
        value: "",
        menuListContent: (
          <div className={classes.placeholder}>{placeholder}</div>
        )
      },
      ...options
    ];
  }
  return (
    <MuiTextField
      id={id}
      select
      fullWidth={fullWidth}
      label={label}
      disabled={disabled}
      error={error}
      value={value ? value : dropdownOptions[0].value}
      onChange={onChange}
      FormHelperTextProps={{
        classes: {
          root: classes.helperTextRoot,
          error: classes.helperTextError
        }
      }}
      classes={{
        root: classes.formControlRoot,
        fullWidth: classes.formControlFullWidth
      }}
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.inputRoot,
          disabled: classes.inputDisabled,
          error: classes.inputError,
          formControl: classes.inputFormControl,
          focused: classes.inputFocused
        }
      }}
      InputLabelProps={{
        shrink: true,
        FormLabelClasses: {
          root: classes.labelRoot,
          disabled: classes.labelDisabled,
          error: classes.labelError,
          focused: classes.labelFocused
        },
        required: required
      }}
      SelectProps={{
        classes: {
          select: classes.selectSelect
        },
        displayEmpty: true,
        MenuProps: {
          classes: { paper: classes.paper },
          MenuListProps: {
            classes: { padding: classes.listPadding }
          },
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          getContentAnchorEl: null,
          marginThreshold: 0
        }
      }}
      helperText={helperText}
      {...rest}
    >
      {dropdownOptions.map(option => (
        <MenuItem
          disableGutters
          classes={{ root: classes.listItem }}
          key={option.value}
          value={option.value}
        >
          {option.menuListContent}
        </MenuItem>
      ))}
    </MuiTextField>
  );
}

Select.defaultProps = {
  value: "",
  disabled: false,
  required: false,
  error: false
};

Select.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the selected option of the dropdown*/
  value: PropTypes.any,
  /** Disables the dropdown*/
  disabled: PropTypes.bool,
  /** Adds an asterisk beside label */
  required: PropTypes.bool,
  /** If true, the input will take up the full width of its container. */
  fullWidth: PropTypes.bool,
  /** Sets the helper text */
  helperText: PropTypes.node,
  /** These are the options to be displayed in the dropdown.
   * They are an array of objects, each object contains a value
   * and a menuListContent property
   * */
  options: PropTypes.array.isRequired,
  /** Sets the placeholder inside the dropdown */
  placeholder: PropTypes.string,
  /** Callback for when the options in the dropdown are changed */
  onChange: PropTypes.func,
  /** Passed as true or false depending on whether the error state needs to be shown */
  error: PropTypes.bool,
  /** Id of the dropdown  */
  id: PropTypes.string,
  /** Label of the dropdown if any  */
  label: PropTypes.string
};

export const SelectComponent = Select;
export default withStyles(styles)(Select);
