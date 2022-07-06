<template>
  <Box>
    <div class="project">
      <figure v-if="project.imageUrl" class="project__logo">
        <img :src="project.imageUrl" />
      </figure>

      <div class="project__text">
        <div class="project__name">
          {{ project.name }}
        </div>

        <div class="project__description">
          {{ project.description }}
        </div>
      </div>

      <div class="project__links">
        <a v-if="project.website"
          v-tippy
          title="Website"
          :href="project.website"
          target="_blank"
          class="item">
          <svg-icon name="globe-grid-svgrepo-com" />
        </a>  

        <a v-if="project.githubHandle"
          v-tippy
          title="Github"
          :href="`https://github.com/${project.githubHandle}`"
          target="_blank"
          class="item">
          <svg-icon name="github" />
        </a>

        <a v-if="project.twitterHandle"
          v-tippy
          title="Twitter"
          :href="`https://twitter.com/${project.twitterHandle}`"
          target="_blank"
          class="item">
          <svg-icon name="twitter" />
        </a>

        <a v-if="project.slug"
          v-tippy
          title="OpenCollective"
          :href="`https://opencollective.com/${project.slug}`"
          target="_blank"
          class="item">
          <svg-icon name="oc" />
        </a>
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import Vue from 'vue'
import { Account } from '~/modules/api'

export default Vue.extend({
  props: {
    project: {
      type: Object as () => Account,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.project {
  @apply space-y-6;
}

.project__logo {
  @apply flex justify-center;
}

.project__name {
  @apply font-bold text-origin-lighten text-lg;
}

.project__description {
  @apply text-origin-dark;
}

.project__links {
  @apply flex justify-center space-x-6;

  svg {
    @apply text-origin-darken fill-current;
    width: 24px;
    height: 24px;
  }
}
</style>