<template>
    <div class="row">
        <app-item v-for="(item, index) in items" :data="item" :key="index" @click.native="removeItem(index)">{{ item }}</app-item>
    </div>
</template>

<script>
import Items from './Items'

export default {
    props: ['items'],
    components: {
        appItem: Items
    },
    methods: {
        removeItem(index) {
            this.$emit('removeItem', index);
        }
    },
}
</script>

<style>
    
</style>