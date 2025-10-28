import { render, screen } from '@testing-library/react';
import Product  from '../components/product';

test('Product test', ()=>{
    const producto = {
        id : '1',
        name: 'Café Americano',
        price: 350
    }
    render(<Product {...producto}  />);
    expect(screen.getAllByText(/Café Americano/)).toBeInTheDocument();
    expect(screen.getAllByText(`${350}`)).toBeInTheDocument();
    expect(screen.getByRole('button')).not.toBeDisabled();
})