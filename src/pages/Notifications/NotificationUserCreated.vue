<template>
    <div>Congrats! <b>{{ store.user.username }}</b> has been created</div>
</template>
  
<script>
import { store } from '../../store/store';

export default {


    name: 'notification-user-created',
    data() {
        return {
            store: store
        }
    }
}
</script>
  