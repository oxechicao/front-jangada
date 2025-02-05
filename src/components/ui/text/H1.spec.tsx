import { render, screen } from '@testing-library/react'
import { H1 } from './H1';

describe("<H1 />", () => {
  const childrenMock = 'text mock'
  it("should render the children", () => {
    render(<H1>{childrenMock}</H1>)
    const element = screen.getByText(childrenMock)
    expect(element).toBeDefined()
    expect(element.classList).toContain('font-bold')
    expect(element.classList).toContain('text-4xl')
  });
});
