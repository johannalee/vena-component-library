import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { WHITE, BLACK, RED, GRAY, GREEN, BLUE } from '../../tokens/colors.json';

const webStyles = {
  root: {
    minHeight: "36px",
    borderRadius: "6px",
    fontWeight: "bold"
  }
};

const addinStyles = {
  root: {
    minHeight: "32px",
    borderRadius: "0",
    lineHeight: "20px",
    boxShadow: "none"
  }
};

const styles = theme => {
  return {
    root: {
      minWidth: "80px",
      paddingLeft: "16px",
      paddingRight: "16px",
      fontSize: "14px",
      color: WHITE,
      textTransform: "none",

      "&:disabled": {
        cursor: "not-allowed",
        pointerEvents: "auto"
      },
      ...(theme.venaTheme === "addin" ? addinStyles.root : webStyles.root)
    },
    primary: {
      backgroundColor: BLUE.primary,

      "&:hover": {
        backgroundColor: BLUE.ninety,
      },

      "&:disabled": {
        backgroundColor: BLUE.thirty,
        color: WHITE
      },

      "&:disabled&:hover": {
        backgroundColor: BLUE.thirty,
        color: WHITE
      }
    },
    secondary: {
      backgroundColor: GRAY.fifty,
      color: BLACK,

      "&:hover": {
        backgroundColor: GRAY.primary
      },

      "&:disabled": {
        backgroundColor: GRAY.fifty,
        color: GRAY.primary
      },

      "&:disabled&:hover": {
        backgroundColor: GRAY.fifty,
        color: GRAY.primary
      }
    },
    confirmation: {
      backgroundColor: GREEN.primary,

      "&:hover": {
        backgroundColor: GREEN.ninety
      },

      "&:disabled": {
        backgroundColor: GREEN.thirty,
        color: WHITE
      },

      "&:disabled&:hover": {
        backgroundColor: GREEN.thirty,
        color: WHITE
      }
    },
    danger: {
      backgroundColor: RED.fifty,

      "&:hover": {
        backgroundColor: RED.primary
      },

      "&:disabled": {
        backgroundColor: RED.thirty,
        color: WHITE
      },

      "&:disabled&:hover": {
        backgroundColor: RED.thirty,
        color: WHITE
      }
    },
    icon: {
      marginRight: "8px"
    },
    loadingButtonLabel: {
      visibility: "hidden"
    },
    loadingIconContainer: {
      position: "absolute",
      top: "6px",
      left: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "calc(100% - 12px)",
      visibility: "visible"
    }
  };
};

function Button({
  classes,
  color,
  disabled,
  isLoading,
  iconClass,
  onClick,
  children,
  ...rest
}) {
  let colorClass = "";

  switch (color) {
    case "primary":
      colorClass = classes.primary;
      break;
    case "secondary":
      colorClass = classes.secondary;
      break;
    case "confirmation":
      colorClass = classes.confirmation;
      break;
    case "danger":
      colorClass = classes.danger;
      break;
    default:
      colorClass = classes.primary;
      break;
  }

  return (
    <MuiButton
      classes={{
        root: classes.root,
        contained: colorClass,
        label: isLoading ? classes.loadingButtonLabel : null
      }}
      variant="contained"
      disabled={disabled || isLoading}
      onClick={onClick}
      {...rest}
    >
      {iconClass && <i className={iconClass + " " + classes.icon} />}
      {isLoading && (
        <div className={classes.loadingIconContainer}>
          <CircularProgress color="inherit" size={14} />
        </div>
      )}
      {children}
    </MuiButton>
  );
}

Button.defaultProps = {
  color: "primary",
  disabled: false,
  isLoading: false,
  iconClass: ""
};

Button.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Sets the background and text colors. */
  color: PropTypes.oneOf(["primary", "secondary", "confirmation", "danger"]),
  /** Disables button including all pointer events. */
  disabled: PropTypes.bool,
  /** Disables button and overlays a circular progress spinner. */
  isLoading: PropTypes.bool,
  /** Prepends the icon to the start of the button contents.
   * Expects font-awesome class values such as "`fa fa-plus`".
   * */
  iconClass: PropTypes.string,
  /** Button onClick handler */
  onClick: PropTypes.func.isRequired,
  /** The content of the button. */
  children: PropTypes.node
};

export const ButtonComponent = Button;
export default withStyles(styles)(Button);
