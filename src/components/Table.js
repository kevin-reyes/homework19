import React from 'react' ;

export default (props)=>{
    console.log(props.users[0])
    return <table className="table">
    <thead>
      <tr>
        <th scope="col">Picture</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">Age</th>
      </tr>
    </thead>
    <tbody>
        {props.users.map(user=><tr>
        <td><img src={user.picture.thumbnail}/></td>
        <td>{user.name.first}</td>
        <td>{user.name.last}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.dob.age}</td>
      </tr>)}
    </tbody>
  </table>
}