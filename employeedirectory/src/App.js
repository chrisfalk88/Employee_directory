import { Component } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import API from "./utils/API.js";
import Jumbo from "./components/Jumbo.js";
import TableSearch from "./components/TableSearch.js";
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
        <Jumbo />
        <TableSearch />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        </Form>
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
                <td>{i + 1}</td>
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
