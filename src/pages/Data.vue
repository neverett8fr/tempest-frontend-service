<template>
    <div class="row">
        <div>
            <Data></Data>
        </div>
        <div class="table-full-width table-responsive">
            <FileList v-onload="getFiles()" :rows="store.files">
            </FileList>
        </div>
    </div>
</template>
<script>
import { store } from '../store/store';
import { getUserFiles } from '../external/data';
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
    },
    methods: {
        getFiles() {
            getUserFiles()
        }
    }
}
</script>
<style></style>