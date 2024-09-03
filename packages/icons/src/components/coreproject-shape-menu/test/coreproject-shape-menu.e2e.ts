import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-menu", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-menu></coreproject-shape-menu>");
		const element = await page.find("coreproject-shape-menu");
		expect(element).toHaveClass("hydrated");
	});
});
