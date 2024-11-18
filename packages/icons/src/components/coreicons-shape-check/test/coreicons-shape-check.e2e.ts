import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-check", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-check></coreicons-shape-check>");
		const element = await page.find("coreicons-shape-check");
		expect(element).toHaveClass("hydrated");
	});
});
