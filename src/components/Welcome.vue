<template>
  <div class="welcome">
      <div class="container">
          <div class="row">
              <div class="col-6" style="display: flex;justify-content: flex-start; align-items:center">
                <h1 style="color: #ffffff;font-family: PTSerif;font-size: 72px;font-weight: 700;line-height: 80px;">{{ msg }}
                    <p class="" style="color: #ffffff;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;">
                        Every day 8:00 am - 23:00 pm  
                    </p>
                    <div>
                    <b-button style="width: 170px;height: 48px;border-radius: 3px;background-color: #6327eb;font-size:18px;">
                        Book a table
                    </b-button>
                    <!-- <b-button variant="danger">Button</b-button>
                    <b-button variant="success">Button</b-button> -->
                    <b-button style="margin-left:20px;width: 170px;height: 48px;border-radius: 3px;background-color: transparent;font-size:18px;">See menu</b-button>
                    </div>
                </h1>
              </div>
              <div class="col-6" style="">
                <img src="../assets/images/plate.png" style="width:100%;height: 555px;" align="right" alt="dish">
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