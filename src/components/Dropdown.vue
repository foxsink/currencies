<template>
    <div>
        <div @click="toggleOpen()">{{ `${props.dropdownName || ''} ${icon}` }}</div>
        <div v-if="isShow">
            <div v-for="item in props.items">
                <span :key="item" @click="handleChangeClick(item as Currencies)">{{ item }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Currencies } from '@/types/types';
import { computed } from 'vue';
import { ref } from 'vue';

const props = defineProps<{
    dropdownName: string;
    items: string[];
}>();

const emit = defineEmits<{ changeCurrency: [selectedCurrency: Currencies] }>();

const isShow = ref(false);
//Завязываюсь на Currencies потому, что проект не предусматривает другого использования
const handleChangeClick = (item: Currencies) => {
    emit('changeCurrency', item);
    isShow.value = false;
};

const toggleOpen = () => {
    isShow.value = !isShow.value;
};

const icon = computed(() => (isShow.value ? '▲' : '▼'));
</script>
