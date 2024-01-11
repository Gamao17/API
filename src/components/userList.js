import axios from 'axios'
import { useState, useEffect } from 'react';

const UserList = () => {

    const [usersName, setUsersName] = useState([])
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsersName(response.data)
        }).catch(error =>{
            setError('error')
        })
    }, [])

    const handleOnClick = ()=>{
        setShow(!show)
        {console.log(show)}
    }


    return ( 
        <div className="container" style={{ margin: 30 }}>
      <button onClick={handleOnClick} style={{margin : 20}}>Show / hide</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {show && (
        usersName.map(user => (
          <div key={user.id} className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{user.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
     );
}
export default UserList;
