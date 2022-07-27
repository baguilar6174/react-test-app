import { render, screen } from "@testing-library/react";
import FirstComponent from "../../src/components/FirstComponent";

describe('Test on <FirstComponent/>', () => {

  const title = "Hi, I am Bryan";
  const subtitle = "subtitle";

  test('should be match with the snapshot', () => {
    const { container } = render(
      <FirstComponent title={title} />
    );
    expect(container).toMatchSnapshot();
  });

  test('should show "Hi, I am Bryan"', () => {
    render(<FirstComponent title={title} />);
    // screen.debug
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show title in <h1></h1>', () => {
    render(<FirstComponent title={title} />);
    // screen.debug
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(title);
  });

  test('should show the subtitle sent in props', () => {
    render(<FirstComponent title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle)).toBeTruthy();
  });

});