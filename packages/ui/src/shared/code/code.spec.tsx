import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Code } from "./code";

describe("Code", () => {
  it("should have 'Code' page title", async () => {
    const { baseElement } = render(<Code>Code</Code>);

    expect(baseElement).toMatchSnapshot();
  });
});
