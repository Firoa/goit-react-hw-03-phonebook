import React, { Component } from 'react';
import styles from './Filter.module.css';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.props.onChange(value);
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <form className={styles.filter}>
          <h2 className={styles.title}>Find contacts by name</h2>
          <label>
            <input
              type="text"
              placeholder="Enter contact"
              value={filter}
              onChange={this.handleChange}
              id={this.formId}
              name="filter"
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default Filter;
