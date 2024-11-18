import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-grid", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-grid></coreicons-shape-grid>");
		const element = await page.find("coreicons-shape-grid");
		expect(element).toHaveClass("hydrated");
	});
});
