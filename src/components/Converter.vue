<template>
    <div class="converter">
        <div class="converter-line">
            <Dropdown
                :dropdownName="upperCurrency"
                :items="availableUpperCurrencies"
                @changeCurrency="changeUpperCurrency"
            />
            <input type="number" v-model="amount" />
        </div>

        <div class="converter-line">
            <Dropdown
                :dropdownName="lowerCurrency"
                :items="availableLowerCurrencies"
                @changeCurrency="changeLowerCurrency"
            />
            <input type="number" :value="convert()" disabled />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConverter } from '@/composables/converter';
import Dropdown from './Dropdown.vue';
import { useCurrencyStore } from '@/store/currency';
import { Currencies } from '@/types/types';
import { ref } from 'vue';
import { computed } from 'vue';

const store = useCurrencyStore();
const converter = useConverter();
const amount = ref(1);

const upperCurrency = ref(store.currentCurrency);
const lowerCurrency = ref(store.currentCurrency);
const availableUpperCurrencies = computed(() =>
    Object.values(Currencies).filter((currency) => currency !== upperCurrency.value),
);
const availableLowerCurrencies = computed(() =>
    Object.values(Currencies).filter((currency) => currency !== lowerCurrency.value),
);

const changeUpperCurrency = (choosenCurrency: Currencies) => {
    upperCurrency.value = choosenCurrency;
};
const changeLowerCurrency = (choosenCurrency: Currencies) => {
    lowerCurrency.value = choosenCurrency;
};

const convert = () => {
    return Number(
        converter.convert(amount.value, upperCurrency.value, lowerCurrency.value).toFixed(2),
    );
};
</script>

<style scoped>
.converter {
    display: flex;
    flex-direction: column;
}
.converter-line {
    display: flex;
    margin-top: 20px;
}
</style>
