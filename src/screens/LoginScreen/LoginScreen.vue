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
                  <fg-input class="mt-3" v-model="form.username"  v-validate="modelValidations.username" addon-left-icon="nc-icon nc-single-02"
                            placeholder="First Name..."></fg-input>

                  <fg-input   v-validate="modelValidations.password" v-model="form.password" addon-left-icon="nc-icon nc-key-25" placeholder="Password"
                            type="password"></fg-input>

                  <br>

                  <p-checkbox>
                    Remember
                  </p-checkbox>

                  <p-button class="btn btn-primary"  native-type="submit" slot="footer" style="background-color:#65B4B5" type="button" round block>login</p-button>
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
import swal from 'sweetalert2'
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
       validate () {
        this.$validator.validateAll().then(isValid => {
          this.$emit('on-submit', this.registerForm, isValid)
        })
      },
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
        }else{
         swal({
            title: `รหัสผ่านไม่ถูกต้อง`,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-defulet btn-fill'
          })
        }
      }
    },
    data() {
      return {
          modelValidations: {
          username: {
            required: true,
            email: true
          },
          password: {
            required: true,
            min: 5
          }
        },
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
