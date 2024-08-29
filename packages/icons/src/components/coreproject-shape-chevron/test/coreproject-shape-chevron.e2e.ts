import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-chevron", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-chevron></coreproject-shape-chevron>");
		const element = await page.find("coreproject-shape-chevron");
		expect(element).toHaveClass("hydrated");
	});
});
