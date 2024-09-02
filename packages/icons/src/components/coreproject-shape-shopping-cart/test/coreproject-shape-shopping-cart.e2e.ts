import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-shopping-cart", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-shopping-cart></coreproject-shape-shopping-cart>");
		const element = await page.find("coreproject-shape-shopping-cart");
		expect(element).toHaveClass("hydrated");
	});
});
