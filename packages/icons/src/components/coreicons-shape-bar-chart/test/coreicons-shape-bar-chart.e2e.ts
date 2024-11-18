import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-bar-chart", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-bar-chart></coreicons-shape-bar-chart>");
		const element = await page.find("coreicons-shape-bar-chart");
		expect(element).toHaveClass("hydrated");
	});
});
