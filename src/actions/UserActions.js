import { action } from 'mobx';
import { UsersStore, UserStore } from '../store/AllStores';
import { fetchFromApi, URL_PATH } from '../api/api'

export class UserActionsClass {
    @action async login(name, password) {

        const body = JSON.stringify({
            strategy: 'local',
            username: name,
            password: password
        })
        try {

            const result = await fetchFromApi(URL_PATH.AUTHENTICATION, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json" 
                },
                data: body
            })

            const data = result.data;
            if (data) {
                UserStore.name = data.user.name;
                UserStore.id = data.user.id;
                UserStore.username = data.user.username;
                UserStore.email = data.user.email;
                UserStore.type = data.user.type;
                UserStore.slpcode = data.user.slpcode;
                UserStore.status = data.user.status;

                UserStore.accessToken = data.accessToken;
                UserStore.isLoged = true;

                UserStore.loginError = '';

                localStorage.setItem('token', data.accessToken);

                return result
            }

        } catch (err) {
            UserStore.loginError = 'Wrong name or password'
        }

    }


    @action async logout() {
        localStorage.removeItem('token')
        UserStore.isLoged = false;
    }

    @action setLoginError(message) {
        UserStore.loginError = message
    }

    @action async session() {
        const token = localStorage.getItem('token');
        if(!token) return null;

        const result = await fetchFromApi(URL_PATH.AUTHENTICATION, {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        const data = result.data
        if(data){
            UserStore.name = data.user.name;
            UserStore.id = data.user.id;
            UserStore.username = data.user.username;
            UserStore.email = data.user.email;
            UserStore.type = data.user.type;
            UserStore.slpcode = data.user.slpcode;
            UserStore.status = data.user.status;

            UserStore.accessToken = data.accessToken;
            UserStore.isLoged = true;

            UserStore.loginError = '';

            localStorage.setItem('token', data.accessToken);

            return result
        } else {
            return result
        }
    }
}