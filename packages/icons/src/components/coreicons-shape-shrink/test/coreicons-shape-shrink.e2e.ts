import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-shrink", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-shrink></coreicons-shape-shrink>");
		const element = await page.find("coreicons-shape-shrink");
		expect(element).toHaveClass("hydrated");
	});
});
