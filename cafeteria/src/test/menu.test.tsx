import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '../components/menu';

describe('Menu test',  ()=>{
    
    beforeEach(()=>{
        render(<Menu />);
    });
    it('HU1 y HU2', async()=>{
        await waitFor(()=>{
        // verificando que este la lista completa
        expect(screen.getByText('Café Americano')).toBeInTheDocument();
        expect(screen.getByText('Medialuna')).toBeInTheDocument();
        expect(screen.getByText('Jugo de Naranja')).toBeInTheDocument();
        expect(screen.getByText('Tostado de Jamón y Queso')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });
    })
    
    // simulacion de click
    //HU3
        it('HU3',async ()=>{
            const user = userEvent.setup();
            const botones = await screen.findAllByRole('button', {name: /Agregar/});
            await user.click(botones[0]);
            expect(await screen.findByText('Café Americano - 350')).toBeInTheDocument();
            expect(await screen.findByText(/total: \$\d+/i)).toBeInTheDocument();
        })
        
    //HU4
    it('HU4', async()=>{
        const user = userEvent.setup();
        const botones = await screen.findAllByRole('button', {name: /Agregar/});
        await user.click(botones[0]);
        const botonesEliminar = await screen.findAllByRole('button', {name: /Eliminar/});
        const botonEliminar = botonesEliminar[0];
        expect(botonEliminar).toBeInTheDocument();
        await user.click(botonEliminar);
    })
        
    //HU5
    it('HU5 y HU6', async()=>{
        const user = userEvent.setup();
        const botones = await screen.findAllByRole('button', {name: /Agregar/});
        await user.click(botones[0]);
        await user.click(botones[1]);
        await user.click(botones[2]);
        const botonEnviar = screen.getAllByRole('button', {name: /Enviar Pedido/})[0];
        await user.click(botonEnviar)
        const mensaje = await screen.findByText(/Orden creada y añadida al mock list/i)
        expect(mensaje).toBeInTheDocument()

    })

})