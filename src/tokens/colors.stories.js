import React from "react";
import { storiesOf } from "@storybook/react";
import { withStyles } from "@material-ui/core/styles";
import * as colors from "./colors.json";

function ColorHeaderUnstyled({ label, classes }) {
  return <div className={classes.header}>{label}</div>;
}
const ColorHeader = withStyles(() => ({
  header: {
    width: "120px",
    height: "30px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px"
  }
}))(ColorHeaderUnstyled);

function ColorCellUnstyled({ backgroundColor, color, classes }) {
  return (
    <div
      className={classes.colorCell}
      style={{ backgroundColor: backgroundColor, color: color }}
    >
      {backgroundColor}
    </div>
  );
}
const ColorCell = withStyles(() => ({
  colorCell: {
    width: "120px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "8px"
  }
}))(ColorCellUnstyled);

function ColorRowUnstyled({ classes, weight, colorCellValues }) {
  return (
    <div className={classes.rowContainer}>
      <ColorHeader label={weight} />

      {colorCellValues.map(cell => (
        <ColorCell
          key={`${cell.color}_${weight}`}
          backgroundColor={cell.color}
          color={cell.labelColor}
        />
      ))}
    </div>
  );
}
const ColorRow = withStyles(() => ({
  rowContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px"
  }
}))(ColorRowUnstyled);

class ColorsDemo extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <h2>Main Colors</h2>
        <p>These are the main interface colors.</p>
        <div className={classes.rowContainer}>
          <ColorHeader label="White" />
          <ColorHeader label="Black" />
        </div>

        <div className={classes.rowContainer}>
          <ColorCell backgroundColor={colors.WHITE} color={colors.BLACK} />
          <ColorCell backgroundColor={colors.BLACK} color={colors.WHITE} />
        </div>

        <div className={classes.rowContainer} style={{ marginTop: "32px" }}>
          <ColorHeader />
          <ColorHeader label="Gray" />
          <ColorHeader label="Green" />
          <ColorHeader label="Yellow" />
          <ColorHeader label="Red" />
          <ColorHeader label="Blue" />
        </div>

        <ColorRow
          weight="ten"
          colorCellValues={[
            { color: colors.GRAY.ten, labelColor: colors.BLACK },
            { color: colors.GREEN.ten, labelColor: colors.BLACK },
            { color: colors.YELLOW.ten, labelColor: colors.BLACK },
            { color: colors.RED.ten, labelColor: colors.BLACK },
            { color: colors.BLUE.ten, labelColor: colors.BLACK }
          ]}
        />
        <ColorRow
          weight="thirty"
          colorCellValues={[
            { color: colors.GRAY.thirty, labelColor: colors.BLACK },
            { color: colors.GREEN.thirty, labelColor: colors.BLACK },
            { color: colors.YELLOW.thirty, labelColor: colors.BLACK },
            { color: colors.RED.thirty, labelColor: colors.BLACK },
            { color: colors.BLUE.thirty, labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight="fifty"
          colorCellValues={[
            { color: colors.GRAY.fifty, labelColor: colors.BLACK },
            { color: colors.GREEN.fifty, labelColor: colors.BLACK },
            { color: colors.YELLOW.fifty, labelColor: colors.BLACK },
            { color: colors.RED.fifty, labelColor: colors.BLACK },
            { color: colors.BLUE.fifty, labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight="primary"
          colorCellValues={[
            { color: colors.GRAY.primary, labelColor: colors.BLACK },
            { color: colors.GREEN.primary, labelColor: colors.WHITE },
            { color: colors.YELLOW.primary, labelColor: colors.BLACK },
            { color: colors.RED.primary, labelColor: colors.WHITE },
            { color: colors.BLUE.primary, labelColor: colors.WHITE }
          ]}
        />

        <ColorRow
          weight="ninety"
          colorCellValues={[
            { color: colors.GRAY.ninety, labelColor: colors.WHITE  },
            { color: colors.GREEN.ninety, labelColor: colors.WHITE  },
            { color: colors.YELLOW.ninety, labelColor: colors.WHITE  },
            { color: colors.RED.ninety, labelColor: colors.WHITE  },
            { color: colors.BLUE.ninety, labelColor: colors.WHITE  }
          ]}
        />

        <h2 style={{ marginTop: "32px" }}>Extra Colors</h2>
        <p>
          These are extra colors, meant for use mainly with charts and graphs.
        </p>

        <div className={classes.rowContainer} style={{ marginTop: "32px" }}>
          <ColorHeader />
          <ColorHeader label="Purple" />
          <ColorHeader label="Orange" />
          <ColorHeader label="Teal" />
          <ColorHeader label="Pink" />
          <ColorHeader label="Olive" />
        </div>

        <ColorRow
          weight="ten"
          colorCellValues={[
            { color: colors.PURPLE.ten, labelColor: colors.BLACK },
            { color: colors.ORANGE.ten, labelColor: colors.BLACK },
            { color: colors.TEAL.ten, labelColor: colors.BLACK },
            { color: colors.PINK.ten, labelColor: colors.BLACK },
            { color: colors.OLIVE.ten, labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight="thirty"
          colorCellValues={[
            { color: colors.PURPLE.thirty, labelColor: colors.BLACK },
            { color: colors.ORANGE.thirty, labelColor: colors.BLACK },
            { color: colors.TEAL.thirty, labelColor: colors.BLACK },
            { color: colors.PINK.thirty, labelColor: colors.BLACK },
            { color: colors.OLIVE.thirty, labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight="primary"
          colorCellValues={[
            { color: colors.PURPLE.primary, labelColor: colors.WHITE },
            { color: colors.ORANGE.primary, labelColor: colors.BLACK },
            { color: colors.TEAL.primary, labelColor: colors.BLACK },
            { color: colors.PINK.primary, labelColor: colors.BLACK },
            { color: colors.OLIVE.primary, labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight="seventy"
          colorCellValues={[
            { color: colors.PURPLE.seventy, labelColor: colors.WHITE },
            { color: colors.ORANGE.seventy, labelColor: colors.WHITE },
            { color: colors.TEAL.seventy, labelColor: colors.WHITE },
            { color: colors.PINK.seventy, labelColor: colors.WHITE },
            { color: colors.OLIVE.seventy, labelColor: colors.WHITE }
          ]}
        />

        <ColorRow
          weight="ninety"
          colorCellValues={[
            { color: colors.PURPLE.ninety, labelColor: colors.WHITE },
            { color: colors.ORANGE.ninety, labelColor: colors.WHITE },
            { color: colors.TEAL.ninety, labelColor: colors.WHITE },
            { color: colors.PINK.ninety, labelColor: colors.WHITE },
            { color: colors.OLIVE.ninety, labelColor: colors.WHITE }
          ]}
        />
      </>
    );
  }
}

const StyledDemo = withStyles(() => ({
  rowContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px"
  }
}))(ColorsDemo);

storiesOf("Colors", module).add("Default", () => (
  <div>
    <StyledDemo />
  </div>
));
