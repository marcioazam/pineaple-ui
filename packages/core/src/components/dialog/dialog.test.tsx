import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './dialog';

describe('Dialog Component', () => {
  it('should not render content when closed', () => {
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('should render content when open', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('should open dialog when trigger is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.queryByText('Dialog Title')).not.toBeInTheDocument();

    await user.click(screen.getByText('Open Dialog'));

    await waitFor(() => {
      expect(screen.getByText('Dialog Title')).toBeInTheDocument();
    });
  });

  it('should close dialog when close button is clicked', async () => {
    const user = userEvent.setup();

    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogClose data-testid="close">Close</DialogClose>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();

    await user.click(screen.getByTestId('close'));

    await waitFor(() => {
      expect(screen.queryByText('Title')).not.toBeInTheDocument();
    });
  });

  it('should call onOpenChange when dialog state changes', async () => {
    const onOpenChange = vi.fn();
    const user = userEvent.setup();

    render(
      <Dialog onOpenChange={onOpenChange}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));

    await waitFor(() => {
      expect(onOpenChange).toHaveBeenCalledWith(true);
    });
  });
});

describe('Dialog Subcomponents', () => {
  it('should render DialogHeader', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader data-testid="header">Header Content</DialogHeader>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toHaveClass('flex');
  });

  it('should render DialogFooter', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter data-testid="footer">Footer Content</DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toHaveClass('flex');
  });

  it('should render DialogTitle with correct role', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>My Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText('My Title')).toBeInTheDocument();
    expect(screen.getByText('My Title')).toHaveClass('font-semibold');
  });

  it('should render DialogDescription', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogDescription>My Description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText('My Description')).toBeInTheDocument();
    expect(screen.getByText('My Description')).toHaveClass('text-sm');
  });
});

describe('Dialog Accessibility', () => {
  it('should have dialog role', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should close on escape key', async () => {
    const user = userEvent.setup();

    render(
      <Dialog defaultOpen>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByText('Title')).toBeInTheDocument();

    await user.keyboard('{Escape}');

    await waitFor(() => {
      expect(screen.queryByText('Title')).not.toBeInTheDocument();
    });
  });
});

describe('Dialog Full Example', () => {
  it('should render complete dialog structure', () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes to your profile here.</DialogDescription>
          </DialogHeader>
          <div>Form content</div>
          <DialogFooter>
            <DialogClose>Cancel</DialogClose>
            <button>Save</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Edit Profile')).toBeInTheDocument();
    expect(screen.getByText('Make changes to your profile here.')).toBeInTheDocument();
    expect(screen.getByText('Form content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
  });
});
