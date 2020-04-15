<template>
  <div class="peopleSay" style="position: relative;">
        <div class="container" style="width:100%;height:600px; background-color: transparent">
        </div>
        <div class="container" style="display-flex; align-content:center; min-width:90%;height: 880px;box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);border-radius: 3px;background-color: #ffffff;position: absolute;top:-40px;left: 60px;">
            <div class="row" style="height: 880px;">
                <div class="col-6" style="display: flex; align-items:center">
                    <h1 style="padding-left:20px;color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;"><p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">Reserve</p>{{ msg }}
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
                <div class="col-6" style="display: flex;align-items:center">
                    <div class="d-flex" style="padding-right:20px;text-align: center;display: block;">
                    <img class="d-flex" src="../assets/images/cupWithForks.png" style="width: 100%;height: 560px;border-radius: 3px;background-color: #bba285;" alt="picture">
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="width:100%;min-width: -webkit-fill-available;height:280px; background-color: #333333">
        </div>
  </div>
</template>

<script>
export default {
  name: 'ReserveATable',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>