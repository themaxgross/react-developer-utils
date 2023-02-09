/**
 * @jest-environment jsdom
 */

import { useMountLogging } from "./useMountLogging";
import { render } from "@testing-library/react";
import { faker } from "@faker-js/faker";

describe(useMountLogging, () => {
  it("if passed a component name, should log that name when mounted and unmounted", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const componentName = faker.random.word();
    const Component = () => {
      useMountLogging(componentName);
      return null;
    };

    const { rerender } = render(<Component />);

    expect(consoleSpy).toHaveBeenCalledWith(`${componentName}: Mounted`);

    rerender(<div />);

    expect(consoleSpy).toHaveBeenCalledWith(`${componentName}: Unmounted`);
  });

  it("if the component has no name, it should log 'Unnamed: Mounted' and 'Unnamed: Unmounted'", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    const Component = () => {
      useMountLogging();
      return null;
    };

    const { rerender } = render(<Component />);

    expect(consoleSpy).toHaveBeenCalledWith(`Unnamed: Mounted`);

    rerender(<div />);

    expect(consoleSpy).toHaveBeenCalledWith(`Unnamed: Unmounted`);
  });
});
