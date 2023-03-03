<!-- eslint-disable vue/no-mutating-props -->
<template>
    <card class="col-md-8">
        <h5 slot="header" class="title">Login / Create Account</h5>
        <div class="row">
            <div class="col-md-4 px-md-12">
                <base-input label="Username" placeholder="Enter Username" v-model="user">
                </base-input>
            </div>
            <div class="col-md-8 pl-md-1">
                <base-input v-model="pass" label="Password" type="Password" placeholder="Enter Password">
                </base-input>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <base-button @click="getTok(user, pass)" slot="footer" type="primary" fill>Login</base-button>
                <base-button slot="footer" fill>Create Account</base-button>
            </div>
        </div>
    </card>
</template>
<script>

import { getToken } from '../../external/auth';
import { store } from '../../store/store';

export default {
    data() {
        return {
            user: "",
            pass: "",
            store: store,
        }
    },
    props: {
        model: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    methods: {
        getTok(user, pass) {
            var tok = getToken(user, pass);
            store.token = tok;
        }
    }
};
</script>

  