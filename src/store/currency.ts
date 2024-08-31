import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Currencies, type ExchangeRate } from '@/types/types';

export const useCurrencyStore = defineStore('currency', () => {
    const currentCurrency = ref(Currencies.RUB);
    const exchangeRate = ref({} as ExchangeRate);

    return { currentCurrency, exchangeRate };
});
