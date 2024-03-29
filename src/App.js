import UserList from './components/userList.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">X warrior</a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Work</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <h2 className="mb-4 ml-4"> Userlist </h2>
    <UserList />
  </div>
  );
}

export default App;
