<template>
  <footer class="footer">
    <div class="container">
      <!-- Copyright -->
      <div class="footer__copyright">
        <p>
          © {{ new Date().getFullYear() }} {{ $config.name }} S.A.S. de C.V. All rights reserved.
        </p>
      </div>

      <div class="w-10 h-10" />

      <!-- Links -->
      <nav class="nav">
        <!--
        <NuxtLink to="/docs/tos" class="item">
          Terms of Service
        </NuxtLink>

        <NuxtLink to="/docs/privacy" class="item">
          Privacy Policy
        </NuxtLink>
        -->

        <a href="mailto:support@opendreamnet.com" class="item">
          Contact
        </a>

        <a href="https://forms.gle/XaYFcTe1dZzTQCbq7" target="_blank" class="item">
          Anonymous form
        </a>

        <a href="https://status.opendreamnet.com" target="_blank" class="item">
          Status
        </a>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>


<style lang="scss" scoped>
.footer {
  @apply border-t border-menus p-10;
  @apply mt-40 #{!important};

  @screen md {
    @apply text-sm;
  }

  .container {
    @apply flex flex-col-reverse justify-between gap-6;

    @screen md {
      @apply flex-row;
    }
  }
}

.nav {
  @apply space-y-6;

  a {
    @apply block font-semibold text-white;

    &:hover {
      @apply text-primary;
    }
  }
}

.footer__copyright {
  @apply space-y-1;

  a {
    @apply text-white;

    &:hover {
      @apply text-primary underline;
    }
  }

  .version {
    @apply font-semibold;
  }

  .cid {
    @apply text-xs text-origin-darken cursor-default;
    @apply mb-6 #{!important};
  }
}
</style>
