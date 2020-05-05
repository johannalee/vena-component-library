import React from "react";
import capitalize from 'lodash/capitalize';
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
          backgroundColor={colors[`${cell.color}_${weight}`]}
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

const colorsWithDeg = colors.filter(color => typeof color !== 'string');

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
          { Object.keys(colorsWithDeg).map(key => <ColorHeader label={capitalize(key)} key={key} />) }
        </div>

        <ColorRow
          weight={10}
          colorCellValues={[
            { color: "GRAY", labelColor: colors.BLACK },
            { color: "GREEN", labelColor: colors.BLACK },
            { color: "YELLOW", labelColor: colors.BLACK },
            { color: "RED", labelColor: colors.BLACK },
            { color: "BLUE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={30}
          colorCellValues={[
            { color: "GRAY", labelColor: colors.BLACK },
            { color: "GREEN", labelColor: colors.BLACK },
            { color: "YELLOW", labelColor: colors.BLACK },
            { color: "RED", labelColor: colors.BLACK },
            { color: "BLUE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={50}
          colorCellValues={[
            { color: "GRAY", labelColor: colors.BLACK },
            { color: "GREEN", labelColor: colors.BLACK },
            { color: "YELLOW", labelColor: colors.BLACK },
            { color: "RED", labelColor: colors.BLACK },
            { color: "BLUE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={70}
          colorCellValues={[
            { color: "GRAY", labelColor: colors.BLACK },
            { color: "GREEN", labelColor: colors.WHITE },
            { color: "YELLOW", labelColor: colors.BLACK },
            { color: "RED", labelColor: colors.WHITE },
            { color: "BLUE", labelColor: colors.WHITE }
          ]}
        />

        <ColorRow
          weight={90}
          colorCellValues={[
            { color: "GRAY", labelColor: colors.WHITE },
            { color: "GREEN", labelColor: colors.WHITE },
            { color: "YELLOW", labelColor: colors.WHITE },
            { color: "RED", labelColor: colors.WHITE },
            { color: "BLUE", labelColor: colors.WHITE }
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
          weight={10}
          colorCellValues={[
            { color: "PURPLE", labelColor: colors.BLACK },
            { color: "ORANGE", labelColor: colors.BLACK },
            { color: "TEAL", labelColor: colors.BLACK },
            { color: "PINK", labelColor: colors.BLACK },
            { color: "OLIVE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={30}
          colorCellValues={[
            { color: "PURPLE", labelColor: colors.BLACK },
            { color: "ORANGE", labelColor: colors.BLACK },
            { color: "TEAL", labelColor: colors.BLACK },
            { color: "PINK", labelColor: colors.BLACK },
            { color: "OLIVE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={50}
          colorCellValues={[
            { color: "PURPLE", labelColor: colors.WHITE },
            { color: "ORANGE", labelColor: colors.BLACK },
            { color: "TEAL", labelColor: colors.BLACK },
            { color: "PINK", labelColor: colors.BLACK },
            { color: "OLIVE", labelColor: colors.BLACK }
          ]}
        />

        <ColorRow
          weight={70}
          colorCellValues={[
            { color: "PURPLE", labelColor: colors.WHITE },
            { color: "ORANGE", labelColor: colors.WHITE },
            { color: "TEAL", labelColor: colors.WHITE },
            { color: "PINK", labelColor: colors.WHITE },
            { color: "OLIVE", labelColor: colors.WHITE }
          ]}
        />

        <ColorRow
          weight={90}
          colorCellValues={[
            { color: "PURPLE", labelColor: colors.WHITE },
            { color: "ORANGE", labelColor: colors.WHITE },
            { color: "TEAL", labelColor: colors.WHITE },
            { color: "PINK", labelColor: colors.WHITE },
            { color: "OLIVE", labelColor: colors.WHITE }
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
