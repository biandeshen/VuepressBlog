<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: "Valine",
  mounted: function() {
    // require window
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }

    new Valine({
      el: "#vcomments",
      appId: "YSfyTlN40jpWaDtGbx6nK85d-gzGzoHsz", // your appId
      appKey: "LwUp1UR1uEQLYEHi9yjmpy2x", // your appKey
      notify: false,
      verify: false,
      avatar: "mm",
      placeholder: "说点什么吧!"
    });
  }
};
</script>