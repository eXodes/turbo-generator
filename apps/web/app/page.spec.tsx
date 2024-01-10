import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import Page from "./page";

describe("Page", () => {
  it("should render successfully", async () => {
    const { container } = render(<Page />);

    expect(container).toMatchSnapshot();
  });
});
