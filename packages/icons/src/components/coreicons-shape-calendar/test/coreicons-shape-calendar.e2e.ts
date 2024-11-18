import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-calendar", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-calendar></coreicons-shape-calendar>");
		const element = await page.find("coreicons-shape-calendar");
		expect(element).toHaveClass("hydrated");
	});
});
