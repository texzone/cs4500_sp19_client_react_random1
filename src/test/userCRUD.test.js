import React from 'react'
import TestRenderer from 'react-test-renderer'
import ReactDOM from 'react-dom'
import users from '../mock/data/users.mock.json'
import UserService from '../services/UserService'
import Users from "../components/Users";

const userService = UserService.getInstance();

test('Create and Delete Users', () => {
    let cool_ali = {id: 13, username: "coolali", password: "lolwutt", firstName: "Ali",
     lastName: "Gabri"};

    const saveUser = () => {
        users.push(cool_ali);

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const deleteUser = userId => {
        users.splice(0, 1)

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

    };

    const testRenderer = TestRenderer.create(
        <Users users={users} editingUser={cool_ali} deleteUser={deleteUser} saveUser={saveUser}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

test('userRenders', () => {
    const testRenderer = TestRenderer.create(
        <Users users={users} editingUser={users[2]}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;

    const usernameField = testInstance.findByProps({className: 'form-control username-edit'});
    const numUsers = testInstance.findAllByProps({className: 'btn btn-primary btn-block delete-user-btn'});

    expect(usernameField.props.value).toBe('Username');
    expect(numUsers.length).toBe(0);
});

test('userRendersService', () => {
    userService.findAllUser().then(users => {
        const testRenderer = TestRenderer.create(
            <Users users={users} editingUser={users[2]}/>
        );

        let tree = testRenderer.toJSON();
        expect(tree).toMatchSnapshot();

        const testInstance = testRenderer.root;

        const usernameField = testInstance.findByProps({className: 'form-control username-edit'});
        const numUsers = testInstance.findAllByProps({className: 'btn btn-primary btn-block delete-user-btn'});

        expect(usernameField.props.value).toBe('JamesWutang');
        expect(numUsers.length).toBe(users.length);
    });
});