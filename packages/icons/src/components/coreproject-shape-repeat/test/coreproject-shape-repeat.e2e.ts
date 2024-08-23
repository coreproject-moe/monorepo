import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-repeat", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-repeat></coreproject-shape-repeat>");
		const element = await page.find("coreproject-shape-repeat");
		expect(element).toHaveClass("hydrated");
	});
});
