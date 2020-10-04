<template>
  <div class="logo" :class="[`text-${size}`]">
    <span class="text-green-500">ASEAN</span>
    <span>C</span>
    <div class="nineteen">
      <span class="dot" v-for="i in dots" :key="i"></span>
    </div>
    <span>APP</span>
  </div>
</template>

<script>
export default {
  name: 'BrandLogo',
  props: {
    size: {
      type: String,
      default: '4xl',
    },
  },
  data: () => ({
    dots: 5,
  }),
}
</script>
<style lang="scss" scoped>
%baseDot {
  @apply absolute;
  @apply bg-purple-500;
  @apply rounded-full;
}

.logo {
  @apply flex;
  @apply flex-wrap;
  @apply items-center;
  @apply font-extrabold;

  .nineteen {
    $parentShape: 1em;
    @apply relative;
    @apply flex;
    @apply justify-center;
    @apply items-center;
    @apply bg-purple-600;
    @apply text-white;
    @apply rounded-full;
    margin: {
      left: 0.5em;
      right: 0.5em;
      top: 0.2em;
      bottom: 0.2em;
    }
    width: $parentShape;
    height: $parentShape;

    &::before {
      content: '19';
      @apply relative;
      @apply leading-none;
      font-size: 0.5em;
      z-index: 2;
    }

    .dot {
      $gap: -0.8em;
      $dotShapeSmall: 0.25em;
      $dotShapeLarge: 0.45em;
      @apply inset-0;
      @apply absolute;
      @apply m-auto;
      width: 0;
      height: 0;
      z-index: 1;

      &::before {
        content: '';
        @extend %baseDot;
        width: $dotShapeSmall;
        height: $dotShapeSmall;
      }

      &::after {
        content: '';
        @extend %baseDot;
        width: $dotShapeLarge;
        height: $dotShapeLarge;
      }

      &:nth-child(1) {
        transform: translateX(-$parentShape / 1.4);

        &::before {
          left: -$dotShapeSmall / 4;
          top: $dotShapeSmall / 3;
        }

        &::after {
          left: -$dotShapeLarge / 2;
          top: -$dotShapeLarge;
        }
      }

      &:nth-child(2) {
        transform: translateY(-$parentShape / 1.5) translateX(-$parentShape / 4);

        &::before {
          left: -$dotShapeSmall / 0.8;
          top: -$dotShapeSmall / 10;
        }

        &::after {
          left: $dotShapeLarge / 10;
          top: -$dotShapeLarge / 1.5;
        }
      }

      &:nth-child(3) {
        transform: translateY(-$parentShape / 2.4) translateX($parentShape / 2);

        &::before {
          left: -$dotShapeSmall / 0.8;
          top: -$dotShapeSmall / 1.8;
        }

        &::after {
          left: -$dotShapeLarge / 10;
          bottom: -$dotShapeLarge;
        }
      }

      &:nth-child(4) {
        transform: translateY($parentShape / 3) translateX($parentShape / 2) scale(0.8);

        &::before {
          right: -$dotShapeSmall;
          top: -$dotShapeSmall;
        }

        &::after {
          left: -$dotShapeLarge / 1.8;
          bottom: -$dotShapeLarge / 0.9;
        }
      }

      &:nth-child(5) {
        transform: translateY($parentShape / 1.8) translateX(-$parentShape / 6);

        &::before {
          right: -$dotShapeSmall / 0.8;
          top: $dotShapeSmall / 10;
        }

        &::after {
          left: -$dotShapeLarge / 1;
          bottom: -$dotShapeLarge / 2;
        }
      }
    }
  }
}
</style>
