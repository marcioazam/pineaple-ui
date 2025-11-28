import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Alert, AlertTitle, AlertDescription } from './alert';

describe('Alert Component', () => {
  it('should render with role="alert"', () => {
    render(<Alert>Alert message</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('should apply status variant styles', () => {
    const { rerender } = render(<Alert status="success" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('bg-success-50');

    rerender(<Alert status="error" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('bg-danger-50');

    rerender(<Alert status="warning" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('bg-warning-50');

    rerender(<Alert status="info" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('bg-primary-50');
  });

  it('should render AlertTitle and AlertDescription', () => {
    render(
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>Description text</AlertDescription>
      </Alert>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    render(<Alert className="custom-class" data-testid="alert" />);
    expect(screen.getByTestId('alert').className).toContain('custom-class');
  });
});
