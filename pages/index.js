import Reactm, { Component } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { APP_LOAD } from '../actions/actionsTypes';
import Input from '../components/Input';
require('es6-promise').polyfill();
require('isomorphic-fetch');

class Home extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.onAdd = this.onAdd.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      transactionValue: 0,
      data: []
    };
  }

  async onAdd() {
    //TODO: validations of possible errors

    let type = this.state.transactionValue > 0 ? 'credit' : 'debit';
    await fetch('http://localhost:3001/api/post/transaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type,
        amount: this.state.transactionValue
      })
    });

    const res = await fetch('http://localhost:3001/api/get/transaction');
    const data = await res.json();
    this.setState({ data });
  }

  onChange(value) {
    this.setState({ transactionValue: value });
  }
  render() {
    return (
      <>
        <h1>Welcome Money Transaction Service!</h1>
        <Input value={this.state.transactionValue} onChange={this.onChange} />
        <button className="" onClick={this.onAdd}>
          Add
        </button>
        <ul>
          {this.state.data.map(x => {
            return (
              <li>
                {' '}
                {x.type} - {x.amount}{' '}
              </li>
            );
          })}
          ;
        </ul>
      </>
    );
  }
}

Home.getInitialProps = async ({ reduxStore, req }) => {
  const isServer = !!req;

  const res = await fetch('http://localhost:3001/api/get/transaction');
  const data = await res.json();

  // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
  reduxStore.dispatch({ type: APP_LOAD });
  return { data };
};

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
