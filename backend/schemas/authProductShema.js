import { z } from "zod";

export const authCreateProduct = z.any({
    category: z.string({
        required_error: "La descripcion es requerida"
    }),

    title: z.string({
        required_error: "Title is required",
    }).min(1, {
        message: 'El titulo debe tener almenos 4 caracteres.'
    }),

    description: z.string({
        required_error: "La descripcion es requerida"
    }),

    price: z.number({
        required_error: "El precio es requerido"
    }),

    colors: z.string().optional(),

    image :z.any().refine((value) => value instanceof Blob || value instanceof File, {
        message: "Image must be a Blob or a File",
      }).optional()
})