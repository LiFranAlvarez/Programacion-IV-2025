import { z }from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductSchema = z.object({
    id: z.string(),
    name: z.string().min(2),
    price: z.number().positive(),
});
export type Product = z.infer<typeof ProductSchema>;

