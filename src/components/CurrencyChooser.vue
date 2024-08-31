<template>
    <div>
        <Dropdown
            :dropdownName="currentCurrency"
            :items="availableCurrencies"
            @changeCurrency="changeCurrency"
        />
    </div>
</template>

<script setup lang="ts">
import { useCurrencyStore } from '@/store/currency';
import Dropdown from './Dropdown.vue';
import { Currencies } from '@/types/types';
import { computed } from 'vue';

const store = useCurrencyStore();

const currentCurrency = computed(() => store.currentCurrency);
const availableCurrencies = computed(() =>
    Object.values(Currencies).filter((storedCurrency) => storedCurrency !== currentCurrency.value),
);

const changeCurrency = (choosenCurrency: Currencies) => {
    store.currentCurrency = choosenCurrency;
};
</script>

<style scoped></style>
