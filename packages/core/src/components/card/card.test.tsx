import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './card';

describe('Card Component', () => {
  it('should render with default variant', () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass('rounded-lg');
  });

  it('should render with elevated variant', () => {
    render(
      <Card variant="elevated" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('shadow-md');
  });

  it('should render with outlined variant', () => {
    render(
      <Card variant="outlined" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('border');
  });

  it('should render with filled variant', () => {
    render(
      <Card variant="filled" data-testid="card">
        Content
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('bg-neutral-100');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Card ref={ref}>Content</Card>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('should apply custom className', () => {
    render(
      <Card className="custom-class" data-testid="card">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });
});

describe('Card Subcomponents', () => {
  it('should render CardHeader', () => {
    render(<CardHeader data-testid="header">Header</CardHeader>);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('p-6');
  });

  it('should render CardTitle as h3', () => {
    render(<CardTitle>Title</CardTitle>);
    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toHaveTextContent('Title');
    expect(title).toHaveClass('font-semibold');
  });

  it('should render CardDescription', () => {
    render(<CardDescription data-testid="desc">Description</CardDescription>);
    const desc = screen.getByTestId('desc');
    expect(desc).toHaveTextContent('Description');
    expect(desc).toHaveClass('text-sm');
  });

  it('should render CardContent', () => {
    render(<CardContent data-testid="content">Content</CardContent>);
    const content = screen.getByTestId('content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('p-6');
  });

  it('should render CardFooter', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('flex');
  });

  it('should forward refs for all subcomponents', () => {
    const headerRef = React.createRef<HTMLDivElement>();
    const titleRef = React.createRef<HTMLHeadingElement>();
    const descRef = React.createRef<HTMLParagraphElement>();
    const contentRef = React.createRef<HTMLDivElement>();
    const footerRef = React.createRef<HTMLDivElement>();

    render(
      <>
        <CardHeader ref={headerRef}>Header</CardHeader>
        <CardTitle ref={titleRef}>Title</CardTitle>
        <CardDescription ref={descRef}>Desc</CardDescription>
        <CardContent ref={contentRef}>Content</CardContent>
        <CardFooter ref={footerRef}>Footer</CardFooter>
      </>
    );

    expect(headerRef.current).toBeInstanceOf(HTMLDivElement);
    expect(titleRef.current).toBeInstanceOf(HTMLHeadingElement);
    expect(descRef.current).toBeInstanceOf(HTMLParagraphElement);
    expect(contentRef.current).toBeInstanceOf(HTMLDivElement);
    expect(footerRef.current).toBeInstanceOf(HTMLDivElement);
  });
});

describe('Card Full Example', () => {
  it('should render complete card structure', () => {
    render(
      <Card data-testid="card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
        </CardHeader>
        <CardContent>Main content here</CardContent>
        <CardFooter>Footer actions</CardFooter>
      </Card>
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Card Title');
    expect(screen.getByText('Card description text')).toBeInTheDocument();
    expect(screen.getByText('Main content here')).toBeInTheDocument();
    expect(screen.getByText('Footer actions')).toBeInTheDocument();
  });
});
