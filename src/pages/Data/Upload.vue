<template>
    <div>

        <input type="file" @change="submitFile" ref="file" />
        <base-button @click="callUpload()" slot="footer" type="primary" fill>
            Upload
        </base-button>

    </div>
</template>
<script>
import { store } from '../../store/store';
import { uploadFile, getUserFiles } from '../../external/data';

export default {
    components: {

    },
    computed: {
    },
    data() {
        return {
            store: store,
            chosenFile: File()
        };
    },
    methods: {
        // temp() {
        //     store.files.push(
        //         {
        //             key: "as", metadata: { name: "tempName", extension: "txt", thumbnail: "" }
        //         }
        //     )
        // },
        callUpload() {

            console.log("file: ", this.chosenFile.name)
            console.log("file: ", this.chosenFile.name)

            const reader = new FileReader()
            reader.onload = () => {
                // const byteArray = new Uint8Array(reader.result)
                // uploadFile(byteArray)

                const arrayBuffer = reader.result;
                const bytes = new Uint8Array(arrayBuffer)
                console.log(bytes)
                uploadFile(bytes)

                // getUserFiles()
            }
            reader.readAsArrayBuffer(this.chosenFile)

        },
        submitFile() {
            this.chosenFile = this.$refs.file.files[0];
            console.log("chosenFile ", this.chosenFile)

        }
    }
}
</script>
<style></style>
  