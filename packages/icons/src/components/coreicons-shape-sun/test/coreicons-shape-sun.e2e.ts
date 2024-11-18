import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-sun", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-sun></coreicons-shape-sun>");
		const element = await page.find("coreicons-shape-sun");
		expect(element).toHaveClass("hydrated");
	});
});
