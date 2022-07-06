<template>
  <div class="contact max-w-prose">
    <Box>
      <div class="prose">
        <NuxtContent :document="category" />
      </div>
    </Box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { IContentDocument } from '@nuxt/content/types/content'

interface IData {
  categories: IContentDocument[]
}

export default Vue.extend({
  data: (): IData => ({
    categories: []
  }),

  mounted() {
    this.fetch()
  },

  methods: {
    async fetch() {
      // @ts-ignore
      this.categories = await this.$content('contact').sortBy('order').fetch() as IContentDocument[]
    }
  }
})
</script>

<style lang="scss" scoped>
.contact {
  @apply gap-x-9 space-y-9;

  @screen lg {
    column-count: 3;

    &::v-deep {
      .box {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
        overflow: hidden;
      }

      .box__body ul {
        @apply m-0;
      }
    }
  }
}
</style>
