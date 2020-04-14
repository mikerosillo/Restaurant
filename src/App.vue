<template>
  <div id="app">
    <div id="nav">
      <div class="container">
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
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #333333 !important;
  padding-bottom: 0px;
  // text-align: center;

  a {
    font-weight: bold;
    color: #ffffff;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
