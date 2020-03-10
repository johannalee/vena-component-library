import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiTextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {
  BLUE_50,
  BLUE_70,
  GRAY_30,
  GRAY_50,
  GRAY_70,
  GRAY_90,
  RED_50,
  RED_70,
  BLACK,
  WHITE,
  GREEN_70
} from "../../styles/colors";

// TODO for web-client as per the mockup (https://projects.invisionapp.com/share/7VVOHYTJD6P#/screens/389652810_Fields): 
// 1. Add error & success state icons
// 2. Add right-side link
//
// TODO for add-in:
// 1. Get a mockup of a success state and add it

const webStyles = {
  formControlRoot: {
    width: "340px"
  },
  helperTextRoot: {
    color: BLACK,
    
    "&$helperTextError": {
      color: RED_70
    }
  },
  inputRoot: {
    height: "36px",
    borderRadius: "3px",

    "&:hover": {
      border: `1px solid ${GRAY_70}`
    },
    "&$inputError": {
      border: `1px solid ${RED_70}`
    },
    "&$inputFocused": {
      border: `1px solid ${BLUE_70}`
    },
  },
  inputDisabled: {
    "&:hover": {
      cursor: "not-allowed"
    }
  },
  inputSuccess: {
    border: `1px solid ${GREEN_70}`,

    "&:hover": {
      border: `1px solid ${GREEN_70}`
    },
    "&$inputFocused": {
      border: `1px solid ${BLUE_70}`
    }
  },
  inputAdornment: {
    "& p": {
      color: BLACK
    }
  },
  labelRoot: {
    fontWeight: "bold"
  }
};

const addinStyles = {
  formControlRoot: {
    width: "320px"
  },
  helperTextRoot: {
    "&$helperTextError": {
      color: RED_50
    }
  },
  inputRoot: {
    height: "32px",

    "&:hover": {
      border: `1px solid ${GRAY_90}`
    },
    "&$inputError": {
      border: `1px solid ${RED_50}`
    },
    "&$inputFocused": {
      border: `1px solid ${BLUE_50}`
    },
  },
  inputSuccess: {} // Add success state here
}

const styles = theme => {
  const projectTheme = theme.venaTheme === "addin" ? addinStyles : webStyles;
  
  return {
    formControlRoot: {
      "&$formControlFullWidth": {
        width: "100%"
      },

      ...projectTheme.formControlRoot
    },
    formControlFullWidth: {},
    helperTextRoot: {
      color: GRAY_90,
      fontSize: "12px",
      fontStyle: "italic",

      ...projectTheme.helperTextRoot
    },
    helperTextError: {},
    inputInput: {
      padding: "1px 0 0 0"
    },
    inputRoot: {
      backgroundColor: WHITE,
      border: `1px solid ${GRAY_50}`,
      boxSizing: "border-box",
      color: BLACK,
      fontSize: "14px",
      paddingLeft: "8px",
      paddingRight: "8px",

      "$labelRoot + &": {
        marginTop: "8px"
      },
      "&$inputDisabled": {
        border: `1px solid ${GRAY_50}`,
        backgroundColor: GRAY_30
      },

      ...projectTheme.inputRoot
    },
    inputDisabled: { ...projectTheme.inputDisabled },
    inputError: {},
    inputSuccess: { ...projectTheme.inputSuccess },
    inputFormControl: {},
    inputFocused: {},
    inputAdornment: { ...projectTheme.inputAdornment },
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
      },

      ...projectTheme.labelRoot
    },
    labelDisabled: {},
    labelError: {},
    labelFocused: {} // Need this here to increase CSS specificity. See https://github.com/mui-org/material-ui/issues/13683#issuecomment-441357881
  };
};

function TextField({
  classes,
  disabled,
  endAdornment,
  error,
  success,    
  fullWidth,
  helperText,
  id,
  label,
  onChange,
  placeholder,
  readOnly,
  required,
  value,
  ...rest
}) {
  return (
    <MuiTextField
      disabled={disabled}
      error={error}
      fullWidth={fullWidth}
      helperText={helperText}
      id={id}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      variant="standard"
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
      InputProps={{
        classes: {
          root: success ? `${classes.inputSuccess} ${classes.inputRoot}` : classes.inputRoot,
          input: classes.inputInput,
          disabled: classes.inputDisabled,
          error: classes.inputError,
          formControl: classes.inputFormControl,
          focused: classes.inputFocused
        },
        disableUnderline: true,
        endAdornment: endAdornment ? (
          <InputAdornment position="end" className={classes.inputAdornment}>{endAdornment}</InputAdornment>
        ) : null,
        readOnly: readOnly
      }}
      classes={{
        root: classes.formControlRoot,
        fullWidth: classes.formControlFullWidth
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.helperTextRoot,
          error: classes.helperTextError
        }
      }}
      {...rest}
    />
  );
}

TextField.defaultProps = {
  disabled: false,
  error: false,
  readOnly: false,
  required: false
};

TextField.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** If true, the input will be disabled. */
  disabled: PropTypes.bool,
  /** If true, the field will be displayed in an error state */
  error: PropTypes.bool,
  /**  End InputAdornment for this component */
  endAdornment: PropTypes.node,
  /** If true, the field will be displayed in a success state */
  success: PropTypes.bool,
  /** If true, the input will take up the full width of its container. */
  fullWidth: PropTypes.bool,
  /** The helper text content. */
  helperText: PropTypes.node,
  /** The id of the input element. Use this property to make label and helperText accessible for screen readers. */
  id: PropTypes.string,
  /** The label content. */
  label: PropTypes.node,
  /** Callback fired when the value is changed.
   * function(event: object) => void
   * You can pull out the new value by accessing event.target.value
   */
  onChange: PropTypes.func,
  /** The short hint displayed in the input before the user enters a value. */
  placeholder: PropTypes.string,
  /** It prevents the user from changing the value of the field (not from interacting with the field). */
  readOnly: PropTypes.bool,
  /** If true, the label is displayed as required and the input will be required. */
  required: PropTypes.bool,
  /** The value of the input element. */
  value: PropTypes.any
};

export const TextFieldComponent = TextField;
export default withStyles(styles)(TextField);
