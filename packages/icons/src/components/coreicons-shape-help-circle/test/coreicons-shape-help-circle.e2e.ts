import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-help-circle", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-help-circle></coreicons-shape-help-circle>");
		const element = await page.find("coreicons-shape-help-circle");
		expect(element).toHaveClass("hydrated");
	});
});
