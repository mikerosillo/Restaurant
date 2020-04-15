<template>
  <div class="forLunch">
      <div class="container">
          <div class="row" style="text-align:center">
              <div style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;" class="marginTop col-12">Tasty dishes</div>
              <div class="titles col-12" style="">For Lunch</div>
          </div>
          <div class="row mt-5">
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Huitlacoche Tamle
                            <span class="d-flex ml-auto">$14.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Served pickled ginger and chopsticks</p>
                    </h1>
                </div>
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Mediterranean Salad
                            <span class="d-flex ml-auto">$17.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Soy sauce, wasabi, pickled ginger and chopsticks</p>
                    </h1>
                </div>
          </div>
          <div class="row mt-5">
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Creole Tempeh
                            <span class="d-flex ml-auto">$19.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Served with soy sauce, wasabi, pickled  chopsticks</p>
                    </h1>
                </div>
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Pumpkin Curry
                            <span class="d-flex ml-auto">$22.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Sauce, wasabi, pickled ginger and chopsticks</p>
                    </h1>
                </div>
          </div>
          <div class="row mt-5">
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Polenta Nera Cake
                            <span class="d-flex ml-auto">$13.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Served with soy sauce, wasabi, pickled ginger</p>
                    </h1>
                </div>
                <div class="col-12 col-md-6" style="display: flex;justify-content: center; align-items:center">
                    <img src="../assets/images/plate.png" style="width: 112px;height: 112px;border-radius: 50%;background-color: transparent; margin-right:10px" alt="picture">
                    <h1 class="row" style="color: #000000;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">
                        <p class="description col-12 d-flex ml-auto" style="">
                            Warm Kipfler Potato
                            <span class="d-flex ml-auto">$24.00</span>
                        </p>
                        <p class="col-12" style="color: rgba(51, 51, 51, 0.5);font-family: Roboto;font-size: 14px;font-weight: 400;line-height: 24px;">Wasabi, pickled ginger and chopsticks</p>
                    </h1>
                </div>
          </div>
          <div class="row mt-5">
              <div class="d-flex col-12" style="justify-content: center">
                  <div class="d-flex">
                    <b-button style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                        Full menu
                    </b-button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ForLunch',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>