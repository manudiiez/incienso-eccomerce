import { z } from 'zod'

export const createProductSchema = z.object({
    name: z.string({
        required_error: 'Name is required'
    }),
    price: z.number({
        required_error: 'Price is required'
    }),
    category: z.string({
        required_error: 'Category is required'
    }),
    description: z.string({
        required_error: 'Description is required'
    }),
    image: z.any({
        required_error: 'Image is required'
    }).optional(),
    date: z.string().datetime().optional()
})