<template>
  <div class="peopleSay" style="position: relative;">
        <div class="container" style="width:100%;height:440px; background-color: transparent">
            <div class="row d-flex" style="text-align:center; ">
                <div style="color: #333333;font-family: Roboto;font-size: 24px;font-weight: 300;line-height: 32px;" class="col-12">What people</div>
                <div class="titles col-12" style="">Say About Us</div>
            </div>
        </div>
        <div class="container middle" style="">
             <img src="../assets/images/guy.png"  style="border-radius:50%;vertical-align: middle;width: 126px;height: 126px;margin-top:30px" alt="picture">
             <div class="row">
                 <div class="col-2"></div>
                 <div class="col-8 mt-3" style="text-align:justify">
                     As I went on, still gaining velocity, the palpitation of night and day merged into one continuous greyness the sky took on a wonderful deepness of blue, a splendid luminous color like that of early twilight; the jerking sun became a streak of fire, a brilliant arch.
                 </div>
                 <div class="col-2"></div>
             </div>
        </div>
        <div class="container" style="width:100%;min-width: -webkit-fill-available;height:440px; background-color: #333333">
        </div>
  </div>
</template>

<script>
export default {
  name: 'peopleSay',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">

</style>