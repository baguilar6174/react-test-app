import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

describe('Tests on <App /> component', () => {

  test('should be match with the snapshot', () => {
    const { container } = render(
      <App value={100} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should show 100 in init value', () => {
    render(<App value={100} />);
    // screen.debug();
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('should increase with +1 button', () => {
    render(<App value={10} />);
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText(11)).toBeTruthy();
  });

  test('should decrease with -1 button', () => {
    render(<App value={10} />);
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText(9)).toBeTruthy();
  });

  test('should works rest button', () => {
    render(<App value={10} />);
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByText("-1"));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(10)).toBeTruthy();
  });

});