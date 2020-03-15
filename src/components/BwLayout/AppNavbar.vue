<template>
<div>
  <navbar navbar-menu-classes="navbar-right" v-model="showMenu">
    <div class="navbar-wrapper">
      <div class='row'>
        <img :src="proIcon" style="width:40; height:35px;">
        <a class="navbar-brand" href="#pablo">Container Tracking</a>
      </div>
    </div>
    <template slot="navbar-menu">
      <router-link to="/admin" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-layout-11"></i> Dashboard
        </a>
      </router-link>
      <router-link to="/register" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-book-bookmark"></i> Register
        </a>
      </router-link>
      <router-link to="/" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-tap-01"></i> Login
        </a>
      </router-link>

      <router-link to="/pages/user" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-satisfied"></i> User
        </a>
      </router-link>
      <router-link to="/lock" class="nav-item" tag="li">
        <a class="nav-link">
          <i class="nc-icon nc-key-25"></i> Lock
        </a>
      </router-link>
    </template>
  </navbar>
  </div>
</template>

<script>
  import {Navbar} from '../UIComponents'
  import Images from '../../theme/images'
  export default {
    name: 'main-navbar',
    components: {
      Navbar
    },
    data() {
      return {
        showMenu: false,
        proIcon : Images.productIcon
      }
    }
  }
</script>

<style scoped>

</style>
