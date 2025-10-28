import { render, screen, waitFor} from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import Menu from '../components/menu';

test('Menu test', async ()=>{
    render(<Menu />);
    await waitFor(()=>{
        expect(screen.getByText('Café Americano')).toBeInTheDocument();
        expect(screen.getByText('Medialuna')).toBeInTheDocument();
        expect(screen.getByText('Jugo de Naranja')).toBeInTheDocument();
        expect(screen.getByText('Tostado de Jamón y Queso')).toBeInTheDocument();
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });

})