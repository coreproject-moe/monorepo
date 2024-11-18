import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-headphones", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-headphones></coreicons-shape-headphones>");
		const element = await page.find("coreicons-shape-headphones");
		expect(element).toHaveClass("hydrated");
	});
});
