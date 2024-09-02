import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-search", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-search></coreproject-shape-search>");
		const element = await page.find("coreproject-shape-search");
		expect(element).toHaveClass("hydrated");
	});
});
