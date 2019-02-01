import React from 'react';
import { Dropdown, Grid, Segment } from 'semantic-ui-react';


class ThemeList extends React.Component {
  state = {}

  handleChange = (e, { value }) => {
    const { userFavTheme } = this.props;
    return (
      userFavTheme(value)
    );
  }

  render() {
    const { value } = this.state;
    const { themes } = this.props;

    return (
      <Grid>
        <Dropdown
          onChange={this.handleChange}
          options={themes}
          placeholder="Choisis ton thème favori"
          selection
          value={value}
        />
      </Grid>
    );
  }
}

export default ThemeList;
