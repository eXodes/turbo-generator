import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  it("should have 'Button' page title", async () => {
    const { baseElement } = render(<Button appName={"App"}>Button</Button>);

    expect(baseElement).toMatchSnapshot();
  });
});
