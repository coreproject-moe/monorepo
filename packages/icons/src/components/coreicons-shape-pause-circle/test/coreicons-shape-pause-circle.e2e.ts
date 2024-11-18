import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-pause-circle", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-pause-circle></coreicons-shape-pause-circle>");
		const element = await page.find("coreicons-shape-pause-circle");
		expect(element).toHaveClass("hydrated");
	});
});
