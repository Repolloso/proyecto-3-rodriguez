import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        users: [],
        products: [],
        cart: [],
        product_edit: [],
        },
    mutations: {
        SAVE_USERS: (state, users) => {
            state.users = users;
        },
        SAVE_PRODUCTS: (state, products) => {
            state.products = products;
        },
        SAVE_ONE_PRODUCT: (state, product) => {
            state.product_edit = product;
        }
    },
    actions: {
        async register(payload) {
            try{
                await axios.post('https://62d8b1a29088313935937e1f.mockapi.io/api/users', payload)
            } catch(err){
                console.log(err)
            }
        },
        async login(context) {
            try{
                let resp = await axios.get('https://62d8b1a29088313935937e1f.mockapi.io/api/users')
                context.commit('SAVE_USERS', resp.data)
            } catch(e) {
                console.log(e)
            }
        },
        async showProducts(context) {
            try{
                let resp = await axios.get("https://62d8b1a29088313935937e1f.mockapi.io/api/products")
                context.commit('SAVE_PRODUCTS', resp.data)
            } catch(e) {
                console.log(e)
            }
        },
        // aconsejable poner context primero aunque no se use para que sepa que el segundo parametro a recibir es un objeto
        async deleteProduct(context, payload) {
            await axios.delete("https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + payload)
            .then(response => {
                console.log(response);
                location.reload()
            })
            .catch(error => {
                console.log(error);
            });
        },
        async getOneProduct(context, payload) {
            try{
                let resp = await axios.get("https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + payload)
                context.commit('SAVE_ONE_PRODUCT', resp.data)
            } catch(e) {
                console.log(e)
            }
        }, 
        async editProduct(context, payload) {
            console.log(payload)
            try{
                await axios.put("https://62d8b1a29088313935937e1f.mockapi.io/api/products/" + payload.id, {
                    name: payload.data.name,
                    description: payload.data.description,
                    price: payload.data.price,
                    amount: payload.data.amount
                })
            } catch(e) {
                console.log(e)
            }
        },
        async createProduct(context, payload) {
            console.log(payload)
            try{
                await axios.post("https://62d8b1a29088313935937e1f.mockapi.io/api/products", {
                    title: payload.title,
                    description: payload.description,
                    price: payload.price,
                    amount: payload.amount
                })
            } catch(e) {
                console.log(e)
            }
        }
    },
    getters: {
        getUsers: (state) => {
            return state.users
        },
        getProducts: (state) => {
            return state.products
        },
        getOneProduct: (state) => {
            return state.product_edit
        }
    }
})


