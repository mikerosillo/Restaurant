<template>
  <div class="history">
      <div class="container">
          <div class="row">
              <div class="col-6" style="">
                <img src="../assets/images/coffeVendor.png" style="width: 100%;height: 560px;border-radius: 3px;background-color: #bba285;" alt="picture">
              </div>
              <div class="col-6" style="display: flex;justify-content: flex-start; align-items:center">
                <h1 style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;"><p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">Discover</p>{{ msg }}
                    <p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                        A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good. 
                    </p>
                    <div>
                    <b-button style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                        Read more
                    </b-button>
                    </div>
                </h1>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>