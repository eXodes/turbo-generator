import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";

import { Card } from "./card";

describe("Card", () => {
  it("should have 'Card' page title", async () => {
    const { baseElement } = render(
      <Card title={"Card Title"} href={"#"}>
        Content
      </Card>,
    );

    expect(baseElement).toMatchSnapshot();
  });
});
