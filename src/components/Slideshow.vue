<template>
    <div>
        <button @click="nextSlide">next</button>
        <transition name="slide">
            <p :key="products[product]">{{products[product]}}</p>
        </transition>
        <button @click="offTimer">{{btnString}}</button>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator'

    @Component
    export default class Slideshow extends Vue{
        private products: string[] = ['a', 'b', 'c'];
        private product: number = 0;
        private timer: number = 0;

        private get btnString(): string {
            return this.timer === 0 ? 'start' : 'stop';
        }

        private mounted(): void {
            this.onTimer();
        }

        private nextSlide(): void {
            this.product = this.product < this.products.length - 1 ? this.product += 1 : 0;
        }

        private onTimer(): void {
            this.timer = setInterval(() => {
                this.nextSlide();
            }, 2000);
        }

        private offTimer(): void {
            if (this.timer === 0) {
                this.onTimer();
            } else {
                clearInterval(this.timer);
                this.timer = 0;
            }
        }
    }
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform .5s
}
.slide-enter {
  transform: translateX(300px)
}
.slide-leave-active {
  transform: translateX(-300px);
}

p {
  position: absolute;
  margin: 0;
  font-size: 3em;
}
</style>
