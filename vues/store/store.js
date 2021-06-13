/**
 * @Author: Hichem Aitouakli <Hayden>
 * @Date:   2021-06-02T17:48:18+01:00
 * @Email:  alterhichem99@gmail.com
 * @Project: Jobhunt
 * @Last modified by:   Hayden
 * @Last modified time: 2021-06-13T16:37:07+01:00
 */
import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from 'js-cookie';

Vue.use(Vuex);
/* eslint-disable */
export default new Vuex.Store({
    state: {
        auth: false,
        role: "",
        name:"",
        email:"",
    },
    getters: {
        getRole: state => {
            return state.role;
        },
        getAuth: state => {
            return state.auth;
        },
        getName: state => {
            return state.name;
        },
        getEmail: state => {
            return state.email;
        },

    },
    plugins: [
        createPersistedState({
            paths: ['auth', 'role', 'name', 'email'],
            storage: {
                getItem: (key) => Cookies.get(key),
                setItem: (key, value) =>
                    Cookies.set(key, value, { expires: 7}),
                removeItem: (key) => Cookies.remove(key),
            },
        }),
    ],
    mutations: {
        //mutation will change the states like auth and role
        setAuthentification(state,status){
           state.auth = status;
        },
        setRole(state,status){
          state.role = status;
        },
        setName(state,status){
          state.name = status;
        },
        setEmail(state,status){
          state.email = status;
        },
    },
    actions: { //your actions which commit a mutation
    }
});
