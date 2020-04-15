<template>
  <div class="aboutUs">
      <div class="container">
          <div class="row" style="text-align:center">
              <div style="color: #ffffff;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;" class="col-12">Press</div>
              <div class="titles text-white col-12" style="">About Us</div>
          </div>
          <div v-if="window.width > 768">
            <div class="row mt-5">
                <div class="col-4" >
                    <div class="" style="width:100%;height:464px; background-color: #ffffff;">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10 mt-5" style="flex-direction:column;display:flex; align-content: space-around;">
                                <img class="d-flex" src="../assets/images/theNewyorkTimes.png"  style="width:100%;height: auto;" alt="picture">
                                <p class="d-flex mt-3" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."
                                </p>
                                <p class="d-flex; mt-3" style="color: #333333;font-family:PTSerif;font-size: 24px;font-weight: 700;line-height: 32px;">
                                    The New York Times
                                </p>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="" style="width:100%;height:464px; background-color: #ffffff;">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10 mt-5" style="flex-direction:column;display:flex; align-content: space-around;">
                                <img class="d-flex" src="../assets/images/theGardian.png"  style="width:100%;height: auto;" alt="picture">
                                <p class="d-flex mt-3" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."
                                </p>
                                <p class="d-flex mt-3" style="color: #333333;font-family:PTSerif;font-size: 24px;font-weight: 700;line-height: 32px;">
                                    The Guardian
                                </p>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-4" >
                    <div class="" style="width:100%;height:464px; background-color: #ffffff;">
                        <div class="row">
                            <div class="col-1"></div>
                            <div class="col-10 mt-5" style="flex-direction:column;display:flex; align-content: space-around;">
                                <img class="d-flex" src="../assets/images/theWallStreetJournal.png"  style="width:100%;height: auto;" alt="picture">
                                <p class="d-flex mt-3" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                    "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."
                                </p>
                                <p class="d-flex mt-3" style="color: #333333;font-family:PTSerif;font-size: 24px;font-weight: 700;line-height: 32px;">
                                    The Wall Street Journal
                                </p>
                            </div>
                            <div class="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
          </div><div v-else>
                <div class="row mt-5">
                    <div class="col-12" >
                        <div class="" style="width:100%;height:464px; background-color: #ffffff;">
                            <div class="row">
                                <div class="col-1"></div>
                                <div class="col-10 mt-5" style="flex-direction:column;display:flex; align-content: space-around;">
                                    <img class="d-flex" src="../assets/images/theNewyorkTimes.png"  style="width:100%;height: auto;" alt="picture">
                                    <p class="d-flex mt-3" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                        "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level."
                                    </p>
                                    <p class="d-flex; mt-3" style="color: #333333;font-family:PTSerif;font-size: 24px;font-weight: 700;line-height: 32px;">
                                        The New York Times
                                    </p>
                                </div>
                                <div class="col-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
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