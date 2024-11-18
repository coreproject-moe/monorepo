import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-smartphone", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-smartphone></coreicons-shape-smartphone>");
		const element = await page.find("coreicons-shape-smartphone");
		expect(element).toHaveClass("hydrated");
	});
});
