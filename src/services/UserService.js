import MIDDLE_TIER_URL from '../Env.js'
export default class UserService {
    static instance = null;
    static getInstance() {
        if(UserService.instance === null) {
            UserService.instance = new UserService()
        }
        return this.instance
    }
    findUserById = userId =>
        fetch(MIDDLE_TIER_URL + "/api/users/" + userId)
            .then(response => response.json())
    findAllUsers = () =>
        fetch(MIDDLE_TIER_URL + "/api/users")
            .then(response => response.json())
}