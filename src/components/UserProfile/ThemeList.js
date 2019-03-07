import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Grid } from 'semantic-ui-react';


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
      <Grid className="theme-list">
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

ThemeList.propTypes = {
  userFavTheme: PropTypes.func.isRequired,
  themes: PropTypes.array.isRequired,
};

export default ThemeList;
