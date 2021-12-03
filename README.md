# nuxt-i18n-composable

Composition API for `@nuxtjs/i18n` in Nuxt 2.x

<a href="https://www.npmjs.com/package/nuxt-i18n-composable">
<img alt="npm" src="https://img.shields.io/npm/v/nuxt-i18n-composable">
</a>

Use this package to make use of the [composition API](https://composition-api.nuxtjs.org/) while using Nuxt 2.x.
This is heavily inspired by [vue-i18n-composable](https://github.com/intlify/vue-i18n-composable) (by [Anthony Fu](https://github.com/antfu)) and should only be used until there is an official solution by [nuxt-i18n](https://github.com/nuxt-community/i18n-module).

*If you have to use `nuxt-i18n` (which got deprecated), please use version 0.1.1 of this package.*

## Install

<pre>
npm i @nuxtjs/i18n <b>nuxt-i18n-composable</b> @nuxtjs/composition-api
</pre>

## Usage

Simply configure @nuxtjs/i18n as usual.

In components, you import `useI18n` from `nuxt-i18n-composable`.

```vue
<template>
  <div>{{ t('language') }} or {{ language }}</div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { useI18n } from 'nuxt-i18n-composable'

export default defineComponent({
  setup() {
    const i18n = useI18n();
    const language = computed(() => i18n.t('language'));

    return {
      ...useI18n(),
      language,
      // i18n.locale can be used as writable computed to modify locale
      changeLanguage() {
        i18n.locale.value = 'en';
      }
    }
  }
})
</script>
<i18n>
{
  "en": {
    "language": "English"
  },
  "de": {
    "language": "Deutsch"
  }
}
</i18n>
```

## Tips

You can access the nuxt-i18n instance like this:

```vue
<script>
const { app } = useContext();
const locales = app.i18n.locales;
</script>
```

## 📄 License

[MIT License](https://github.com/nbrx-ag/nuxt-i18n-composable/blob/master/LICENSE) © 2021 [NBRX AG](https://github.com/nbrx-ag)