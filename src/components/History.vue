<template>
  <div class="history">
      <div class="container">
          <div class="row">
              <div class="imgHistoryContainer col-12 col-md-6" style="">
                <img class="imgHistory" src="../assets/images/coffeVendor.png" style="" alt="picture">
              </div>
              <div class="col-12 col-md-6" style="display: flex;justify-content: flex-start; align-items:center">
                <h1 class="titles" style=""><p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">Discover</p>{{ msg }}
                    <p class="description" style="">
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