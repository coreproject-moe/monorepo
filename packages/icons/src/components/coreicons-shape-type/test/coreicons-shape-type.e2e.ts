import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-type", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-type></coreicons-shape-type>");
		const element = await page.find("coreicons-shape-type");
		expect(element).toHaveClass("hydrated");
	});
});
