<template>
    <div>
        <ul>
            <li v-for="(item, index) in fbdata" :key="index">{{item.title}}</li>
        </ul>
        <button @click="nextSlide">next</button>
        <transition name="slide">
            <p :key="products[product]">{{products[product]}}</p>
        </transition>
        <button @click="offTimer">{{btnString}}</button>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
    import db from '@/firebase/init';

    @Component
    export default class Slideshow extends Vue {
        private products: string[] = ['a', 'b', 'c'];
        private fbdata: object[] = [];
        private product: number = 0;
        private timer: number = 0;

        private get btnString(): string {
            return this.timer === 0 ? 'start' : 'stop';
        }

        private mounted(): void {
            this.onTimer();
            this.GetBoardPosts();
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

        private GetBoardPosts(): void {
            const ref = db.collection('BoardPost').get()
            .then((snapshot: any) => {
                snapshot.forEach((doc: any) => {
                    const post = doc.data();
                    post.id = doc.id;
                    this.fbdata.push(post);
                });
            });
            console.log('why', this.fbdata);
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
