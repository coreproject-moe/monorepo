import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-filter", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-filter></coreicons-shape-filter>");
		const element = await page.find("coreicons-shape-filter");
		expect(element).toHaveClass("hydrated");
	});
});
