import axios from 'axios'

const API_URL = 'http://localhost:4000'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {
    executeAuthenticationServiceget(username) {
        console.log(username);
        return axios.get(`${API_URL}/api/health`)
    }



    getAudio =  (text) => {
        console.log(text);
        return  axios.post(`${API_URL}/api/audio`, {
            text
        })
    }

    //  getAudio = async (text) => {
    //     console.log(text);
    //     return await axios.post(`${API_URL}/api/audio`, {
    //         text
    //     })
    // }





    registerSuccessfulLogin(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }


    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null || user==='') return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()