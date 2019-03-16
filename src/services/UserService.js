export default class UserService {
    static instance = null;

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }

    findUserById = userId =>
        fetch(MIDDLE_TIER_URL + "/api/users/${userId}")
            .then(response => response.json())
    findAllUsers = () =>
        fetch(MIDDLE_TIER_URL + "/api/users")
            .then(response => response.json())
    createUser = user =>
        fetch(MIDDLE_TIER_URL + "/api/users",
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    updateUser = user =>
        fetch(MIDDLE_TIER_URL + "/api/users/${user.id},
            {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: {'content-type': 'application/json'}
            })
            .then(response => response.json())
    deleteUser = user =>
        fetch(MIDDLE_TIER_URL + "/api/users/${user.id}",
            {
                method: 'DELETE',
            })
}