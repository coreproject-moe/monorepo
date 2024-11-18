import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-speaker", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-speaker></coreicons-shape-speaker>");
		const element = await page.find("coreicons-shape-speaker");
		expect(element).toHaveClass("hydrated");
	});
});
