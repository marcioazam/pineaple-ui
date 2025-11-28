import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table';

describe('Table Component', () => {
  it('should render table element', () => {
    render(
      <Table data-testid="table">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLTableElement>();
    render(
      <Table ref={ref}>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it('should apply custom className', () => {
    render(
      <Table className="custom-class">
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByRole('table')).toHaveClass('custom-class');
  });
});

describe('Table Subcomponents', () => {
  it('should render TableHeader', () => {
    render(
      <Table>
        <TableHeader data-testid="header">
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('should render TableBody', () => {
    render(
      <Table>
        <TableBody data-testid="body">
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('body')).toBeInTheDocument();
  });

  it('should render TableFooter', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter data-testid="footer">
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toHaveClass('bg-neutral-50');
  });

  it('should render TableRow', () => {
    render(
      <Table>
        <TableBody>
          <TableRow data-testid="row">
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByTestId('row')).toBeInTheDocument();
    expect(screen.getByTestId('row')).toHaveClass('border-b');
  });

  it('should render TableHead', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Column</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(screen.getByRole('columnheader')).toHaveTextContent('Column');
    expect(screen.getByRole('columnheader')).toHaveClass('font-medium');
  });

  it('should render TableCell', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByRole('cell')).toHaveTextContent('Data');
    expect(screen.getByRole('cell')).toHaveClass('p-4');
  });

  it('should render TableCaption', () => {
    render(
      <Table>
        <TableCaption>Table caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Table caption')).toBeInTheDocument();
    expect(screen.getByText('Table caption')).toHaveClass('text-sm');
  });
});

describe('Table Ref Forwarding', () => {
  it('should forward refs for all subcomponents', () => {
    const headerRef = React.createRef<HTMLTableSectionElement>();
    const bodyRef = React.createRef<HTMLTableSectionElement>();
    const footerRef = React.createRef<HTMLTableSectionElement>();
    const rowRef = React.createRef<HTMLTableRowElement>();
    const headRef = React.createRef<HTMLTableCellElement>();
    const cellRef = React.createRef<HTMLTableCellElement>();
    const captionRef = React.createRef<HTMLTableCaptionElement>();

    render(
      <Table>
        <TableCaption ref={captionRef}>Caption</TableCaption>
        <TableHeader ref={headerRef}>
          <TableRow>
            <TableHead ref={headRef}>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody ref={bodyRef}>
          <TableRow ref={rowRef}>
            <TableCell ref={cellRef}>Cell</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter ref={footerRef}>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(headerRef.current).toBeInstanceOf(HTMLTableSectionElement);
    expect(bodyRef.current).toBeInstanceOf(HTMLTableSectionElement);
    expect(footerRef.current).toBeInstanceOf(HTMLTableSectionElement);
    expect(rowRef.current).toBeInstanceOf(HTMLTableRowElement);
    expect(headRef.current).toBeInstanceOf(HTMLTableCellElement);
    expect(cellRef.current).toBeInstanceOf(HTMLTableCellElement);
    expect(captionRef.current).toBeInstanceOf(HTMLTableCaptionElement);
  });
});

describe('Table Full Example', () => {
  it('should render complete table structure', () => {
    render(
      <Table>
        <TableCaption>A list of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>john@example.com</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>jane@example.com</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total: 2 users</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByText('A list of users')).toBeInTheDocument();
    expect(screen.getAllByRole('columnheader')).toHaveLength(3);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Total: 2 users')).toBeInTheDocument();
  });
});
