import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-grid", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-grid></coreproject-shape-grid>");
		const element = await page.find("coreproject-shape-grid");
		expect(element).toHaveClass("hydrated");
	});
});
