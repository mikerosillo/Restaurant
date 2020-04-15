<template>
  <div id="app">
    <div id="nav">
      <div class="container">
          <div v-if="window.width > 768">
        <div class="row">
          <div class="col-3" 
            style="color: #ffffff;font-family: PTSerif;font-size: 40px;font-weight: 700;line-height: 48px;text-transform: uppercase; text-align:start"
          >
            REST
          </div>
          <div class="d-flex col-6" style="justify-content:space-around; width: 502px;height: 32px;color: #ffffff;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;text-align: center;"
          >
            <router-link to="/">About Us</router-link>
            <router-link to="/about">Menu</router-link>
            <router-link to="/">Events</router-link>
            <router-link to="/about">News</router-link>
            <router-link to="/">Contact</router-link>
          </div>
          <!-- </div> -->
          
          <div class="col-3" style="text-align:end">
            <social-sharing url="https://vuejs.org/" inline-template>
              <div style=" color:#FFF">
                <network network="facebook" style="padding:30px">
                  <font-awesome-icon class="fa-lg" style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                </network>
                <network network="twitter">
                  <font-awesome-icon class="fa-lg"  style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                </network>
                <network network="twitter">
                  <font-awesome-icon class="fa-lg"  style="cursor:pointer;margin-left:30px" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </network>
              </div>
            </social-sharing>  
          </div>
        </div>
        
        </div>
        <div v-else>
          <div class="row">
            <div class="col-3 mb-5" 
              style="color: #ffffff;font-family: PTSerif;font-size: 40px;font-weight: 700;line-height: 48px;text-transform: uppercase; text-align:start"
            >
              REST
            </div>
            <div class="col-9 mb-5">
              <Slide 
              :isOpen="!open"
              right
              width="300"
              >
              </Slide>
            </div>
          </div>
            
            <!-- @openMenu="setOpenState()" -->
          </div>
      </div>
    </div>
    <router-view/>
    <footer id="footer" class="" style="text-align:center;height:376px; background-color:#333333">
      <div class="container">
        <div class="row">
          <div class="col-12" 
            style="color: #ffffff;font-family: PTSerif;font-size: 40px;font-weight: 700;line-height: 48px;text-transform: uppercase; text-align:center"
          >
            REST
          </div>
        </div>
        
        <div class="row mt-5 mb-5">
          <div class="col-2"></div>
          <div class="d-flex col-8" style="justify-content:space-around; width: 502px;height: 32px;color: #ffffff;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;text-align: center;"
          >
            <router-link to="/">About Us</router-link>
            <router-link to="/about">Menu</router-link>
            <router-link to="/">Events</router-link>
            <router-link to="/about">News</router-link>
            <router-link to="/">Contact</router-link>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="row mt-5">
          <div class="col-12 mt-5" style="text-align:center">
            <social-sharing url="https://vuejs.org/" inline-template>
              <div style=" color:#FFF">
                <network network="facebook" style="padding:30px">
                  <font-awesome-icon class="fa-lg" style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                </network>
                <network network="twitter">
                  <font-awesome-icon class="fa-lg"  style="cursor:pointer" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                </network>
                <network network="twitter">
                  <font-awesome-icon class="fa-lg"  style="cursor:pointer;margin-left:30px" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                </network>
              </div>
            </social-sharing> 
            <p class="mt-3" style="color: rgba(255, 255, 255, 0.5);font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">2019 Restaurant. All Rights Reserved.</p> 
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu' 

export default {
  components: {
        Slide 
    },
    data() {
    return {
      window: {
          width: 0,
      },
      open: true,
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #333333 !important;
  padding-bottom: 0px;

  a {
    color: #ffffff;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
#footer {
  padding: 30px;
  background-color: #333333 !important;
  padding-bottom: 0px;

  a {
    color: #ffffff;
    font-family:'Roboto';
    font-size: 20px;
    font-weight: 300;
    line-height: 32px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
