<template>
  <div class="login-page">
    <!-- <app-navbar></app-navbar> -->
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="d-flex content justify-content-center">
          <div class="col-lg-10">
            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <!-- <h3 slot="header" class="header text-center">Login</h3> -->
                  <div class="text-center">
                     <img :src="proIcon" style="width:150px; height:120px;" >
                  </div>
                  <fg-input class="mt-3" v-model="form.username" addon-left-icon="nc-icon nc-single-02"
                            placeholder="First Name..."></fg-input>

                  <fg-input v-model="form.password" addon-left-icon="nc-icon nc-key-25" placeholder="Password"
                            type="password"></fg-input>

                  <br>

                  <p-checkbox>
                    Subscribe to newsletter
                  </p-checkbox>

                  <p-button native-type="submit" slot="footer" type="warning" round block class="mb-3">Get started</p-button>
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <div class="full-page-background" :style="`background-image: url(${background})`"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Checkbox, Button } from '../../components/UIComponents';
  import AppNavbar from '../../components/BwLayout/AppNavbar'
  import AppFooter from '../../components/BwLayout/AppFooter'
  import Api from '../../service/CallHttp'
  import Images from '../../theme/images'

import Axios from 'axios';
  export default {
    components: {
      Card,
      AppNavbar,
      AppFooter,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button
    },
    methods: {
      toggleNavbar() {
        document.body.classList.toggle('nav-open')
      },
      closeMenu() {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      },
      async login(data) {
        let {token} = await (await Api()).generatToken(this.form.username,this.form.password)
        if(token){
            localStorage.setItem('token',token)
            this.$router.push({ path: "/admin" }) 
        }
      }
    },
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        proIcon:Images.productIcon,
        background:Images.background
      }
    },
    beforeDestroy() {
      this.closeMenu()
    }
  }
</script>
<style>
</style>
