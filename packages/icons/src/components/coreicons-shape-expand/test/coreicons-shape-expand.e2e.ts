import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-expand", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-expand></coreicons-shape-expand>");
		const element = await page.find("coreicons-shape-expand");
		expect(element).toHaveClass("hydrated");
	});
});
