import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
    test('showing button', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toBeInTheDocument();
    });
    test('showing button with theme', () => {
        render(<Button variant={ButtonVariant.clear}>123</Button>);
        expect(screen.getByText('123')).toHaveClass('clear');
    });
});
