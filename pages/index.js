import Reactm, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { APP_LOAD } from '../actions/actionsTypes';

class Home extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Welcome !</h1>;
  }
}

Home.getInitialProps = async ({ reduxStore, req }) => {
  const isServer = !!req;

  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  reduxStore.dispatch({ type: APP_LOAD });
  return {};
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
