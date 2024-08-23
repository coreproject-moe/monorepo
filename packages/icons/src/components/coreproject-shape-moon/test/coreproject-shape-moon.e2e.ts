import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-moon", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-moon></coreproject-shape-moon>");
		const element = await page.find("coreproject-shape-moon");
		expect(element).toHaveClass("hydrated");
	});
});
