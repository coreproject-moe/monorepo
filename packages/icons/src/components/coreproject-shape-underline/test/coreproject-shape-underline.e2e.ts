import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-underline", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-underline></coreproject-shape-underline>");
		const element = await page.find("coreproject-shape-underline");
		expect(element).toHaveClass("hydrated");
	});
});
