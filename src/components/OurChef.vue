<template>
  <div class="ourChef">
      <div class="container">
          <div class="row marginTop">
              <div class="imgMiddle col-12 col-md-6" style="">
                <img class="imgChef" src="../assets/images/chef.png" style="vertical-align: middle;" alt="picture">
              </div>
              <div class="col-12 col-md-6" style="display: flex;justify-content: flex-start; align-items:center">
                <h1 class="titles marginTop" style=""><p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">The word from</p>{{ msg }}
                    <p class="description" style="">
                        "A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets. It always does one good." 
                    </p>
                    <p class="mt-5 mb-0" style="color: #333333;font-family:PTSerif;font-size: 24px;font-weight: 700;line-height: 32px;">
                        Slavcho Karbashewski
                    </p>
                    <p class="mt-0" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 20px;font-weight: 300;line-height: 32px;">
                        Head Chef
                    </p>
                </h1>
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OurChef',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>