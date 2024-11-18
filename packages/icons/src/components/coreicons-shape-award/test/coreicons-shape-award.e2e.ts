import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-award", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-award></coreicons-shape-award>");
		const element = await page.find("coreicons-shape-award");
		expect(element).toHaveClass("hydrated");
	});
});
