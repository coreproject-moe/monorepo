import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-underline", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-underline></coreicons-shape-underline>");
		const element = await page.find("coreicons-shape-underline");
		expect(element).toHaveClass("hydrated");
	});
});
