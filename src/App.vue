<template>
    <header>
        <div class="wrapper">
            <CurrencyChooser />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/convert">Convert</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView v-if="!isLoading" />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import CurrencyChooser from './components/CurrencyChooser.vue';
import { useFetch } from './composables/fetch';
import { onBeforeMount, ref } from 'vue';
import { useCurrencyStore } from './store/currency';
import type { ExchangeRate } from './types/types';

const store = useCurrencyStore();
const isLoading = ref(true);
onBeforeMount(async () => {
    const { data, error } = await useFetch('https://status.neuralgeneration.com/api/currency');
    store.exchangeRate = data.value as ExchangeRate;
    isLoading.value = false;
});
</script>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
