import React, { Component } from 'react';
import Layout from "../components/layout";
import Container from '../components/contentContainer';
import FullWidth from '../components/fullWidth';

export default class Contact extends Component {
  render() {
    return (
      <Layout>
        <Container name='row-two-one'>
        <div className="col-1">
        TEST 
        </div>
        <div className="col-2">
        TEST
        </div>
        </Container>
        <Container name='row-one-two'>
        <div className="col-1">
        TEST 
        </div>
        <div className="col-2">
        TEST
        </div>
        </Container>
        <Container name='row-one-one'>
        <div className="col-1">
        TEST 
        </div>
        <div className="col-2">
        TEST
        </div>
        </Container>
        <FullWidth name='band'>
          <div>
            TEST 
          </div>
        </FullWidth>
      </Layout>
    )
  }
}
