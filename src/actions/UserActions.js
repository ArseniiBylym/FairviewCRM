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
            console.log(body);

            const result = await fetchFromApi(URL_PATH.AUTHENTICATION, {
                method: 'post',
                headers: {
                    "Content-Type": "application/json" 
                },
                data: body
            })
            console.log(result);
            console.log('You are loged in')

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

                return result
            }

        } catch (err) {
            console.log(err);
        }

    }


    @action async logout() {
        console.log('You are loged out')
        UserStore.isLoged = false;
    }
}