import React, { Component } from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/badge-header.svg'

import './styles/BadgeNew.css'

export class BadgeNew extends Component {

  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      twitter: "",
      jobTitle: "",
    }
  }

  handleChange = e => {

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value,
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                jobTitle={this.state.form.jobTitle}
                avatarUrl=" https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew;

