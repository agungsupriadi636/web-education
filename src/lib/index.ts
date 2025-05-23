// src/lib/getRelatedPosts.ts
import { getCollection } from 'astro:content';

export async function getRelatedPosts(categories: string[], currentSlug: string, limit: number) {
    const posts = await getCollection('blog');

    const related = posts.filter((post) => {
        // Pastikan bukan dirinya sendiri
        if (post.data.title === currentSlug) return false;

        const postCategories = post.data.categories;
        if (!Array.isArray(postCategories)) return false;

        // Cek apakah ada intersection kategori
        return categories.some(cat => postCategories.includes(cat));
    });

    return related.slice(0, limit);
}
