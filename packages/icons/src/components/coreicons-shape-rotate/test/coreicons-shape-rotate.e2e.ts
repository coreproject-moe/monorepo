import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-rotate", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-rotate></coreicons-shape-rotate>");
		const element = await page.find("coreicons-shape-rotate");
		expect(element).toHaveClass("hydrated");
	});
});
