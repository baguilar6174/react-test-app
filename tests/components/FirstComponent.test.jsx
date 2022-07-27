import { render } from "@testing-library/react";
import FirstComponent from "../../src/components/FirstComponent";

describe('Test on <FirstComponent/>', () => {
  
  // test('should be match with the snapshot', () => {
  //   const title = "Hi, I am Bryan";
  //   const { container } = render(
  //     <FirstComponent title={title} />
  //   );
  //   expect(container).toMatchSnapshot();
  // });

  test('should show title in <h1></h1>', () => {
    const title = "Hi, I am Bryan";
    const { getByText, getByTestId } = render(
      <FirstComponent title={title} />
    );
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

});