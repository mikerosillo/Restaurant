<template>
  <div class="home">
    <Welcome msg="Welcome to our restaurant"/>
    <History msg="Our History"/>
    <Offers msg="Seasonal Offers"/>
    <ForLunch msg="For Lunch"/>
    <UpcomingEvents msg="From events"/>
    <OurInterior msg="From our interior"/>
    <PeopleSay msg="From peolpe"/>
    <AboutUs msg="From About us"/>
    <OurChef msg="Our chef"/>
    <ReserveATable msg="A Table"/>
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'
import History from '@/components/History.vue'
import Offers from '@/components/Offers.vue'
import ForLunch from '@/components/ForLunch.vue'
import UpcomingEvents from '@/components/UpcomingEvents.vue'
import OurInterior from '@/components/OurInterior.vue'
import PeopleSay from '@/components/PeopleSay.vue'
import AboutUs from '@/components/AboutUs.vue'
import OurChef from '@/components/OurChef.vue'
import ReserveATable from '@/components/ReserveATable.vue'

export default {
  name: 'Home',
  components: {
    Welcome,
    History,
    Offers,
    ForLunch,
    UpcomingEvents,
    OurInterior,
    PeopleSay,
    AboutUs,
    OurChef,
    ReserveATable
  }
}
</script>
