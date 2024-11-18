import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-share", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-share></coreicons-shape-share>");
		const element = await page.find("coreicons-shape-share");
		expect(element).toHaveClass("hydrated");
	});
});
