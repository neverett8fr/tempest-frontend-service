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
                <base-button @click="createUser(user, pass)" slot="footer" fill>Create Account</base-button>
            </div>
        </div>
    </card>
</template>
<script>

import { getToken, createUser } from '../../external/auth';
import { store } from '../../store/store';
import { BaseAlert } from '@/components';
import NotificationUserCreated from '../Notifications/NotificationUserCreated.vue';

export default {
    components: {
        BaseAlert
    },
    data() {
        return {
            user: "",
            pass: "",
            store: store,
            type: ["", "info", "success", "warning", "danger"]
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
        },
        createUser(user, pass) {
            var msg = createUser(user, pass)
            store.user.username = user
            console.log(msg)

            const color = Math.floor(Math.random() * 4 + 1);
            this.$notify({
                component: NotificationUserCreated,
                icon: "tim-icons icon-bell-55",
                horizontalAlign: 'top',
                verticalAlign: 'right',
                type: this.type[color],
                timeout: 0
            });


        }
    }
};
</script>

  