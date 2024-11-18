import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-heart", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-heart></coreicons-shape-heart>");
		const element = await page.find("coreicons-shape-heart");
		expect(element).toHaveClass("hydrated");
	});
});
