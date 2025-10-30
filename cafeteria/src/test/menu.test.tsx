import { render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '../components/menu';

test('Menu test', async ()=>{
    render(<Menu />);
    await waitFor(()=>{
        // verificando que este la lista completa
        expect(screen.getByText('Café Americano')).toBeInTheDocument();
        expect(screen.getByText('Medialuna')).toBeInTheDocument();
        expect(screen.getByText('Jugo de Naranja')).toBeInTheDocument();
        expect(screen.getByText('Tostado de Jamón y Queso')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });
    // simulacion de click
    //HU3
        const user = userEvent.setup();
        const botones = screen.getAllByRole('button', {name: /Agregar/});
        await user.click(botones[0]);
        expect(screen.getByText('Café Americano - 350')).toBeInTheDocument();
        expect(screen.getByText(/total: \$\d+/i)).toBeInTheDocument();
    //HU4
        const botonesEliminar = screen.getAllByRole('button', {name: /Eliminar/});
        const botonEliminar = botonesEliminar[0];
        expect(botonEliminar).toBeInTheDocument();
        await user.click(botonEliminar);
        expect(botonEliminar).not.toBeInTheDocument();
    //HU5
        await user.click(botones[0]);
        await user.click(botones[1]);
        await user.click(botones[2]);
        const botonEnviar = screen.getAllByRole('button', {name: /Enviar Pedido/})[0];
        await user.click(botonEnviar)
        await waitFor(()=>{
            //no se como mirar el mensaje de confirmado
        })

        
    

})