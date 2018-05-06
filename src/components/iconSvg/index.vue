<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconClass"></use>
  </svg>
</template>

<script>
export default {
  name: 'iconSvg',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    iconClass () {
      return `#icon-${this.name}`
    }
  }
}
</script>
