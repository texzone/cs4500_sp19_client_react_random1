import React from 'react'

const UserDetails = props =>
    <div>
        <h3>Users</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Username</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th>&nbsp;</th>
            </tr>
            <tr>
                <th><input className= "form-control username-edit" type="text" onChange={props.renderUsername} value={props.username}
                           placeholder="username"/></th>
                <th><input className= "form-control firstname-edit" type="text" onChange={props.renderFirstName} value={props.firstName}
                           placeholder="firstName"/></th>
                <th><input className= "form-control lastname-edit" type="text" onChange={props.renderLastName} value={props.lastName}
                           placeholder="lastName"/></th>
                <th>
                    <button type="button" onClick={props.createUser}
                            className="btn btn-primary btn-block create-btn-user">Create
                    </button>
                </th>
                <th>
                    <button type="button" onClick={props.updateUser}
                            className="btn btn-primary btn-block save-user-btn">Save
                    </button>
                </th>
            </tr>
            </thead>
            <tbody>
            {
                props.users
                    .map(user =>
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                                <button type="button" onClick={() => props.deleteUser(user)}
                                        className="btn btn-primary btn-block delete-user-btn">Delete
                                </button>
                                <button type="button" onClick={() => props.renderUser(user)}
                                        className="btn btn-primary btn-block edit-user-btn">Edit
                                </button>
                            </td>
                        </tr>
                    )
            }
            </tbody>
        </table>
    </div>

export default UserDetails

