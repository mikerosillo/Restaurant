<template>
  <div class="upcoming">
      <div class="container">
          <div class="row" style="text-align:center">
              <div style="color: #ffffff;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;" class="marginTop col-12">Party with us!</div>
              <div class="titles text-white col-12" style="">Upcoming events</div>
          </div>
          <div class="row mt-5">
              <div class="col-12 col-md-6" style="margin-bottom: 0px">
                  <img src="../assets/images/beerGirl.png" style="width: 100%;height: 480px;" alt="picture">
              </div>
              <div class="col-12 col-md-6" style="width: 100%;height: 480px;margin-bottom:0px; display: flex">
                  <div class="container" style="background-color:#FFF" alt="picture">
                        <div class="mt-5 ml-5">
                            <p class="" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                Upcoming</p>
                            <p class="mb-0" style="color: #333333;font-family:PTSerif;font-size: 40px;font-weight: 700;line-height: 48px;">
                                Coffee Night</p>
                            <p class="mt-0" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">
                                25 september, 2019
                            </p>
                            <p class="" style="color: #333333;font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                                Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                            </p>
                            <b-button class="mt-3" style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                                Book a table
                            </b-button>
                        </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingEvents',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>