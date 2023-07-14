import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('showing button', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toBeInTheDocument();
    });
    test('showing button with theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>123</Button>);
        expect(screen.getByText('123')).toHaveClass('clear');
    });
});
