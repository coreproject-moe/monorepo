import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-headphones", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-headphones></coreproject-shape-headphones>");
		const element = await page.find("coreproject-shape-headphones");
		expect(element).toHaveClass("hydrated");
	});
});
