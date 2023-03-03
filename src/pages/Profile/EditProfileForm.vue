<!-- eslint-disable vue/no-mutating-props -->
<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-4">
        <img class="logo-img" onclick="alert('coming soon!')" src="img/anime6.png" alt="...">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 px-md-12">
        <base-input label="Username" placeholder="Enter Username" v-model="model.username">
        </base-input>
      </div>
      <div class="col-md-8 pl-md-1">
        <base-input label="Password" type="Password" placeholder="Enter Password">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <base-button slot="footer" type="primary" fill>Save</base-button>
        <base-button slot="footer" fill>Delete Account</base-button>
      </div>
    </div>
  </card>
</template>
<script>
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  }
};
</script>
<style></style>
