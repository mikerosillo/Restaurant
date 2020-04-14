<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Welcome msg="Welcome to our restaurant"/>
    <History msg="Our History"/>
    <Offers msg="Seasonal Offers"/>
    <ForLunch msg="For Lunch"/>
    <UpcomingEvents msg="From events"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <SubHome msg="SubHome Component"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SubHome from '@/components/SubHome.vue'
import Welcome from '@/components/Welcome.vue'
import History from '@/components/History.vue'
import Offers from '@/components/Offers.vue'
import ForLunch from '@/components/ForLunch.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    SubHome,
    Welcome,
    History,
    Offers,
    ForLunch,
    UpcomingEvents
  }
}
</script>
