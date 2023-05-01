<template>
    <div>
        <base-button @click="temp()" slot="footer" type="primary" fill>
            Upload
        </base-button>


    </div>
</template>
<script>
import { store } from '../../store/store';

export default {
    components: {

    },
    computed: {
    },
    methods: {
        temp() {
            console.log(store)
            // store.files.push(
            //     {
            //         name: "tempName",
            //         extension: "txt",
            //         thumbnail: ""
            //     }
            // )
        }
    }
}
</script>
<style></style>
  