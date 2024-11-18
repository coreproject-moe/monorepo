import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-shopping-cart", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-shopping-cart></coreicons-shape-shopping-cart>");
		const element = await page.find("coreicons-shape-shopping-cart");
		expect(element).toHaveClass("hydrated");
	});
});
