import { Component } from "react";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import API from "./utils/API.js";
import "./App.css";

class App extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    API.getUsers()
      .then((res) => {
        console.log(res.data);
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container>
            <h1>Employee Tracking System v. 2.7</h1>
            <p>something. all you base belong to us</p>
          </Container>
        </Jumbotron>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.state.results.map((result, i) => (
              <tr>
                <td>{i+1}</td>
                <td>{result.name.first}</td>
                <td>{result.name.last}</td>
                <td>{result.login.username}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
