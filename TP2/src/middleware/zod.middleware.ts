import { z } from 'zod';
import { Request, Response, NextFunction } from "express";
const idSchema = z.string().min(1, 'El ID no puede estar vacio');
const statusSchema = z.enum(['pending' , 'confirmed' , 'delivered' , 'cancelled']);

const itemOrderSchema = z.object({
    size: z.enum(['S', 'M', 'L']),
    topping: z.array(z.string().min(1, "El topping no puede estar vacío")),
});
const orderSchema = z.object({
    idOrder: z.string().min(1),
    items: z.array(itemOrderSchema).nonempty("Debe haber al menos una pizza").max(5, 'No puede haber mas de 5 items'),
    address: z.string().min(5, "La dirección debe tener al menos 5 caracteres"),
    total: z.number().positive("El total debe ser mayor a 0"),
});

const validarIdParams = (req : Request, res: Response, next: NextFunction)=>{
    const validate = idSchema.safeParse(req.params.idOrder);
    if (!validate.success) {
        return res.status(400).json({message : validate.error.format})
    }
    next();
};
const validarStatusParams = (req : Request, res: Response, next: NextFunction)=>{
    const validate = statusSchema.safeParse(req.params.status);
    if (!validate.success) {
        return res.status(400).json({message : validate.error.format})
    };
    next();
};
const validarOrderBody = (req : Request, res: Response, next: NextFunction)=>{
    const validate = orderSchema.safeParse(req.body);
    if (!validate.success) {
        return res.status(400).json({message : validate.error.format});
    }
    next();
};

export {
    validarIdParams,
    validarOrderBody,
    validarStatusParams
}