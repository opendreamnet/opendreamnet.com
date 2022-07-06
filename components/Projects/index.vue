<template>
  <section v-if="$api.org && $api.org.childrenAccounts" class="projects">
    <ProjectsItem
      v-for="project of $api.org.childrenAccounts.nodes"
      :key="project.id"
      :project="project"
     />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style lang="scss" scoped>
.projects {
  @apply grid gap-6; 

  @screen md {
    @apply grid-cols-2;
  }

  @screen xl {
    @apply grid-cols-3;
  }
}
</style>