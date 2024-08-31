<template>
    <div>
        <div v-for="converted in convertedAmounts">
            <div>
                {{ converted.currencyPair }}
                {{ converted.amount }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useConverter } from '@/composables/converter';
import { computed } from 'vue';

const converter = useConverter();

const convertedAmounts = computed(() => converter.getCurrencyPairs());
</script>
