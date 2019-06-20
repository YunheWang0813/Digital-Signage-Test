<template>
  <div class="ds">
    <Slideshow></Slideshow>
  </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Slideshow from '@/components/Slideshow.vue';

    @Component({
      components: {
        Slideshow,
      },
    })

    export default class DS extends Vue {

    }
</script>
