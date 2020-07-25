import React , {Component}from 'react';
import Layout from './hoc/Layout/Layout';
import Container from './Containers/Container';
class App extends Component {
  render(){
    return (
      <Layout>
        <Container />
      </Layout>
    );
  }
}
export default App;
