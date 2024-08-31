<template>
    <div class="converter-view">
        <Converter />
    </div>
</template>

<script setup lang="ts">
import Converter from '@/components/Converter.vue';
</script>

<style scoped>
.converter-view {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
