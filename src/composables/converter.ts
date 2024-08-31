import { useCurrencyStore } from '@/store/currency';
import { Currencies } from '@/types/types';

export const useConverter = () => {
    const store = useCurrencyStore();

    const convert = (
        baseAmount: number,
        convertibleCurrency: Currencies,
        baseCurrency: Currencies,
    ) => {
        if (convertibleCurrency === baseCurrency) {
            return baseAmount;
        }
        return baseAmount * store.exchangeRate[`${convertibleCurrency}-${baseCurrency}`];
    };

    const getCurrencyPairs = (baseCurrency: Currencies = store.currentCurrency) => {
        return Object.values(Currencies)
            .filter((currentCurrency) => currentCurrency !== baseCurrency)
            .map((currentCurrency) => {
                return {
                    currencyPair: `${currentCurrency.toUpperCase()} - ${baseCurrency.toUpperCase()}`,
                    amount: convert(1, currentCurrency, baseCurrency),
                };
            });
    };

    return { convert, getCurrencyPairs };
};
