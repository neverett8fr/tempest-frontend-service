<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>
  </div>
</template>
<script>
import EditProfileForm from './Profile/EditProfileForm';
import UserCard from './Profile/UserCard'
export default {
  components: {
    EditProfileForm,
    UserCard
  },
  data() {
    return {
      model: {
        company: 'Creative Code Inc.',
        email: 'mike@email.com',
        username: "",
        firstName: 'Mike',
        lastName: 'Andrew',
        address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
        city: 'Melbourne',
        country: 'Australia',
        about: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
      },
      user: {
        fullName: 'N/A',
        title: 'N/A',
        description: `N/A`,
      }
    }
  }
}
</script>
<style></style>
