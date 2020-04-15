<template>
  <div class="welcome">
      <div class="container">
          <div class="row">
              <div class="col-12 col-md-6" style="display: flex;justify-content: flex-start; align-items:center">
                <h1 class="title" style=""><div v-if="window.width > 768">{{ msg }}</div><div v-else><p class="mb-0">Welcome</p><p class="mt-0 mb-0">to our</p><p class="mt-0">restaurant</p></div>
                    <p class="" style="color: #ffffff;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                        Everyday 8:00 am - 23:00 pm 
                    </p>
                    <div>
                    <b-button style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                        Book a table
                    </b-button>
                    <b-button style="margin-left:5px;width: 170px;height: 48px;border-radius: 3px;background-color: transparent;font-size:18px;">See menu</b-button>
                    </div>
                </h1>
              </div>
              <div class="col-12 col-md-6" style="">
                <img class="imgWelcome" src="../assets/images/plate.png" style="" align="right" alt="dish">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  },
  data() {
    return {
      window: {
          width: 0,
      },
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

<style scoped lang="scss">

</style>