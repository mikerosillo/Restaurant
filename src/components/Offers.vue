<template>
<div class="history">
  <div class="offers">
      <div class="container">
          <div class="row">
                <div class="col-6" style="display: flex;justify-content: flex-start; align-items:center">
                    <h1 style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;"><p class="" style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">Check out our</p>{{ msg }}
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
                        <!-- <div>
                        <b-button style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                            Read more
                        </b-button>
                        </div> -->
                    </h1>
                </div>
                <div class="col-6" style="">
                    <img src="../assets/images/coffeVendor.png" style="width: 100%;height: 560px;border-radius: 3px;background-color: #bba285;" alt="picture">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>