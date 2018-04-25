<template>
  <div>
    <header class="header">
      <article>
        <span />
        <div class="search-fields">
          <input />
          <button>搜 索</button>
        </div>
      </article>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    height: 61px;
    background: #ff4401;
    padding: 12px 0;
    position: relative;
    z-index: 5;
    border-bottom: 1px #e7e7e7 solid;
    article {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      min-width: 860px;
      max-width: 1190px;

      span {
        width: 140px;
        height: 36px;
        display: inline-block;
        vertical-align: middle;
        background-image: -webkit-image-set(url(//img.alicdn.com/tps/i4/T1IraRFjVcXXcEPB2X-140-34.png) 1x,url(//img.alicdn.com/tps/i1/T1KXqHFbdbXXaqVtDA-280-62.png) 2x);
        background-repeat: no-repeat;
        background-position: left center;
      }

      .search-fields {
        height: 27px;
        display: flex;
        input {
          border-top: 0;
          padding-top: 5px;
          background-position: 0 -40px;
          background-color: #fff;
          width: 253px;
          height: 27px;
          padding-right: 3px;
          text-indent: 5px;
        }
        button {
          text-indent: 0;
          font-size: 12px;
          color: #666;
          background: #f5f5f5;
          height: 27px;
          width: 72px;
          border-left: 1px solid #d9d9d9;
        }
      }
    }
  }
</style>

<script>
export default {
  name: 'MtHeader'
}
</script>
