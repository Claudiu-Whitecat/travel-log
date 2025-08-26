import type { Strapi4Error } from '@nuxtjs/strapi/dist/runtime/types/v4'

export default defineNuxtPlugin((nuxt) => {
    const toast = useToast();

    nuxt.hook('strapi:error' as any, (e: Strapi4Error) => {
        const errors = {
        };

        const customError = errors?.[e.error.name]?.[e.error.message];
        const title = customError?.title || e.error.name;
        const message = customError?.message || e.error.message;

        toast.add({ title: 'Ooops!', description: message });
    });
});
