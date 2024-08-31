import { ref } from 'vue';

export async function useFetch(url: string) {
    const data = ref(null) as any;
    const error = ref(null);

    await fetch(url)
        .then((res) => res.json())
        .then((json) => (data.value = json))
        .catch((err) => (error.value = err));

    return { data, error };
}
