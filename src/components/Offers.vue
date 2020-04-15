<template>
<div class="offersBackGround">
  <div class="offers">
      <div class="container">
          <div class="row">
                <div class="col-12 col-md-6" style="display: flex;justify-content: flex-start; align-items:center">
                    <h1 class="titles" style=""><p class="marginTop" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">Check out our</p>{{ msg }}
                        <p class="d-flex mt-5" style="margin-bottom:0px;color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                            Alaskan Fish & Chips 
                            <span class="d-flex ml-auto">$14.00</span>
                        </p>
                        <p style="padding-top:0px;color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Served with soy sauce, wasabi, pickled ginger and chopsticks</p>
                        <p class="d-flex mt-5" style="margin-bottom:0px;color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                            Fishermen’s Basket
                            <span class="d-flex ml-auto">$7.00</span>
                        </p>
                        <p style="padding-top:0px;color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Snow crab, avocado, cucumber, tobiko, Japanese mayonnaise</p>
                        <p class="d-flex mt-5" style="margin-bottom:0px;color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                            Chicken Breat Saute Sec 
                            <span class="d-flex ml-auto">$5.00</span>
                        </p>
                        <p style="padding-top:0px;color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">A Latte is a coffee drink made with espresso and steamed milk</p>
                        <p class="d-flex mt-5" style="margin-bottom:0px;color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                            Crisp Pork Belly 
                            <span class="d-flex ml-auto">$18.00</span>
                        </p>
                        <p style="padding-top:0px;color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Candied salmon, basil potato puree, baby kale marsala</p>
                    </h1>
                </div>
                <div class="col-12 col-md-6" style="">
                    <img class="imgOffers" src="../assets/images/eggAndForkPlate.png" style="" alt="picture">
                </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Offers',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>