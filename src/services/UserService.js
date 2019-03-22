export default class UserService {
    static MIDDLE_TIER_URL = "https://cs4500-sp19-random1.herokuapp.com"
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(MIDDLE_TIER_URL + '/api/users/' + `${userId}`)
            .then(response => response.json())
    findAllUser = () =>
        fetch(MIDDLE_TIER_URL + '/api/users/')
            .then(response => response.json())

    createUser = (user) => {
        return fetch(MIDDLE_TIER_URL + '/api/users/', {
            body: JSON.stringify(user),
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'POST'
        }).then(response => {
            return response.json();
        })
    }

    updateUser = (user) => {
        return fetch(MIDDLE_TIER_URL + '/api/users/' + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(response => {
            console.log(response)
            return response.json();
        });
    }

    deleteUser = (userId) => {
        return fetch(MIDDLE_TIER_URL + '/api/users/' + `${userId}`, {
            method: 'DELETE'
            }
        );
    }
}