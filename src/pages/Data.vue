<template>
    <div class="row">
        <div>
            <Data></Data>
        </div>
        <div class="table-full-width table-responsive">
            <FileList :rows="store.files">
            </FileList>
        </div>
    </div>
</template>
<script>
import { store } from '../store/store';
import FileList from './Dashboard/FileList.vue';
import Data from './Data/Upload.vue'
export default {
    components: {
        Data,
        FileList
    },
    computed: {
    },
    data() {
        return {
            store: store
        }
    }
}
</script>
<style></style>