<template>
  <div class="main-container">
    <div class="title-container">
      <h1>{{ title }}</h1>
    </div>
    <div class="social-link-container">
      <font-awesome-icon :icon="['fab', 'square-github']" size="2x" />
      <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContainer',

  data() {
    return {
      emailCopied: false,
    };
  },

  props: {
    title: String,
  },

  methods: {
    openGithubLink() {
      window.open('https://github.com/KyleJayMaxwell');
    },
    openLinkedinLink() {
      window.open('https://www.linkedin.com/in/kylejaymaxwell/');
    },
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-container {
  width: 100vw;
  height: 95vh;
}

.main-container .title-container h1 {
  position: absolute;
  top: 8px;
  left: 16px;
  font-size: 18px;
}

.main-container .title-container h1.black {
  color: black;
}

.main-container .title-container h1.white {
  color: white;
}

.main-container .social-link-container {
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50vh;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100vw;
}

.main-container .social-link-container svg {
  cursor: pointer;
  margin: 0px 20px;
}

.main-container .social-link-container svg.black {
  color: black;
}

.main-container .social-link-container svg.white {
  color: white;
}

</style>
