<template>
  <header class="header" :class="headerClass">
    <div class="container nav">
      <!-- Left (Logo) -->
      <nav class="nav__left">
        <NuxtLink to="/" class="logo title">
          {{ $config.name || 'OpenDreamnet' }}
        </NuxtLink>
      </nav>

      <!-- Navigation 
      <nav class="nav__center">
        <NuxtLink to="/" class="item">
          Projects
        </NuxtLink>

        <NuxtLink to="/contact" class="item">
          Contact
        </NuxtLink>
      </nav>
      -->

      <!-- Social -->
      <nav v-if="$api.org" class="nav__right">
        <a v-if="$api.org.githubHandle"
           :href="`https://github.com/${$api.org.githubHandle}`"
           target="_blank"
           class="item">
          <svg-icon name="github" />
        </a>

        <a v-if="$api.org.twitterHandle"
           :href="`https://twitter.com/${$api.org.twitterHandle}`"
           target="_blank"
           class="item">
          <svg-icon name="twitter" />
        </a>

        <a :href="`https://opencollective.com/${$api.org.slug}`"
           target="_blank"
           class="item">
          <svg-icon name="oc" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    scrollTop: 0
  }),

  computed: {
    headerClass() {
      return {
        'header--scrolled': this.scrollTop > 80
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', () => {
      // Get the scroll position
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
    })
  }
})
</script>

<style lang="scss" scoped>
.header {
  @apply py-5 px-3 sticky top-0 z-50;
  @apply bg-menus transition-shadow;
  transition-timing-function: ease-in-out;

  &.header--scrolled {
    @apply shadow-lg;
  }

  @supports (backdrop-filter: blur(8px)) {
    @apply backdrop-blur bg-opacity-95;
  }
}

.nav {
  @apply grid items-center gap-6;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:  "left right"
                        "center center";

  @screen md {
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "left center right";
  }
}

.nav__left {
  grid-area: left;
}

.nav__center {
  @apply flex flex-wrap items-center justify-center gap-9;
  grid-area: center;
}

.nav__right {
  @apply flex items-center justify-end gap-9;
  grid-area: right;
}

.logo {
  @apply text-white tracking-widest text-xl;
}

.item {
  @apply text-origin-darken transition-colors cursor-pointer;

  &:hover,
  &.nuxt-link-exact-active {
    @apply text-primary-light;
  }

  svg {
    @apply fill-current;
    width: 24px;
    height: 24px;
  }
}
</style>
