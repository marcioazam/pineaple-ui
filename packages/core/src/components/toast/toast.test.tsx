import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { Toast, ToastTitle, ToastDescription } from './toast';

describe('Toast Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render with default status', () => {
    render(<Toast data-testid="toast">Content</Toast>);
    const toast = screen.getByTestId('toast');
    expect(toast).toBeInTheDocument();
    expect(toast).toHaveAttribute('role', 'status');
  });

  it('should render with success status', () => {
    render(
      <Toast status="success" data-testid="toast">
        Success
      </Toast>
    );
    const toast = screen.getByTestId('toast');
    expect(toast).toHaveClass('bg-success-50');
  });

  it('should render with warning status', () => {
    render(
      <Toast status="warning" data-testid="toast">
        Warning
      </Toast>
    );
    const toast = screen.getByTestId('toast');
    expect(toast).toHaveClass('bg-warning-50');
  });

  it('should render with error status', () => {
    render(
      <Toast status="error" data-testid="toast">
        Error
      </Toast>
    );
    const toast = screen.getByTestId('toast');
    expect(toast).toHaveClass('bg-danger-50');
  });

  it('should render dismiss button when onDismiss is provided', () => {
    const onDismiss = vi.fn();
    render(<Toast onDismiss={onDismiss}>Content</Toast>);
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });

  it('should not render dismiss button when onDismiss is not provided', () => {
    render(<Toast>Content</Toast>);
    expect(screen.queryByRole('button', { name: 'Dismiss' })).not.toBeInTheDocument();
  });

  it('should call onDismiss when dismiss button is clicked', async () => {
    vi.useRealTimers();
    const user = userEvent.setup();
    const onDismiss = vi.fn();

    render(<Toast onDismiss={onDismiss}>Content</Toast>);

    await user.click(screen.getByRole('button', { name: 'Dismiss' }));

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('should auto-dismiss after duration', async () => {
    const onDismiss = vi.fn();

    render(
      <Toast duration={3000} onDismiss={onDismiss}>
        Content
      </Toast>
    );

    expect(onDismiss).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('should not auto-dismiss when duration is 0', () => {
    const onDismiss = vi.fn();

    render(
      <Toast duration={0} onDismiss={onDismiss}>
        Content
      </Toast>
    );

    act(() => {
      vi.advanceTimersByTime(10000);
    });

    expect(onDismiss).not.toHaveBeenCalled();
  });

  it('should forward ref correctly', () => {
    vi.useRealTimers();
    const ref = React.createRef<HTMLDivElement>();
    render(<Toast ref={ref}>Content</Toast>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should apply custom className', () => {
    render(
      <Toast className="custom-class" data-testid="toast">
        Content
      </Toast>
    );
    expect(screen.getByTestId('toast')).toHaveClass('custom-class');
  });
});

describe('Toast Subcomponents', () => {
  it('should render ToastTitle', () => {
    render(<ToastTitle>Title</ToastTitle>);
    const title = screen.getByRole('heading', { level: 5 });
    expect(title).toHaveTextContent('Title');
    expect(title).toHaveClass('font-medium');
  });

  it('should render ToastDescription', () => {
    render(<ToastDescription data-testid="desc">Description</ToastDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc).toHaveTextContent('Description');
    expect(desc).toHaveClass('text-sm');
  });

  it('should forward refs for subcomponents', () => {
    const titleRef = React.createRef<HTMLParagraphElement>();
    const descRef = React.createRef<HTMLParagraphElement>();

    render(
      <>
        <ToastTitle ref={titleRef}>Title</ToastTitle>
        <ToastDescription ref={descRef}>Desc</ToastDescription>
      </>
    );

    expect(titleRef.current).toBeInstanceOf(HTMLHeadingElement);
    expect(descRef.current).toBeInstanceOf(HTMLParagraphElement);
  });
});

describe('Toast Accessibility', () => {
  it('should have role="status" by default', () => {
    render(<Toast data-testid="toast">Content</Toast>);
    expect(screen.getByTestId('toast')).toHaveAttribute('role', 'status');
  });

  it('should have role="alert" for error status', () => {
    render(
      <Toast status="error" data-testid="toast">
        Error
      </Toast>
    );
    expect(screen.getByTestId('toast')).toHaveAttribute('role', 'alert');
  });

  it('should have aria-live="polite" for non-error statuses', () => {
    render(<Toast data-testid="toast">Content</Toast>);
    expect(screen.getByTestId('toast')).toHaveAttribute('aria-live', 'polite');
  });

  it('should have aria-live="assertive" for error status', () => {
    render(
      <Toast status="error" data-testid="toast">
        Error
      </Toast>
    );
    expect(screen.getByTestId('toast')).toHaveAttribute('aria-live', 'assertive');
  });

  it('should have accessible dismiss button', () => {
    const onDismiss = vi.fn();
    render(<Toast onDismiss={onDismiss}>Content</Toast>);
    const button = screen.getByRole('button', { name: 'Dismiss' });
    expect(button).toHaveAttribute('aria-label', 'Dismiss');
  });
});

describe('Toast Full Example', () => {
  it('should render complete toast structure', () => {
    const onDismiss = vi.fn();

    render(
      <Toast status="success" onDismiss={onDismiss} data-testid="toast">
        <ToastTitle>Success!</ToastTitle>
        <ToastDescription>Your changes have been saved.</ToastDescription>
      </Toast>
    );

    expect(screen.getByTestId('toast')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 5 })).toHaveTextContent('Success!');
    expect(screen.getByText('Your changes have been saved.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dismiss' })).toBeInTheDocument();
  });
});
