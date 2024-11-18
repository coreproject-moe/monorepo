import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-map-pin", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-map-pin></coreicons-shape-map-pin>");
		const element = await page.find("coreicons-shape-map-pin");
		expect(element).toHaveClass("hydrated");
	});
});
