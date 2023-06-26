import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
    test('showing button', () => {
        render(<Button>123</Button>);
        expect(screen.getByText('123')).toBeInTheDocument();
    });
    test('showing button with theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>123</Button>);
        expect(screen.getByText('123')).toHaveClass('clear');
    });
});
