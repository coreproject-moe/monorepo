import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-menu", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-menu></coreicons-shape-menu>");
		const element = await page.find("coreicons-shape-menu");
		expect(element).toHaveClass("hydrated");
	});
});
