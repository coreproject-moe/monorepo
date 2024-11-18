import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-monitor", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-monitor></coreicons-shape-monitor>");
		const element = await page.find("coreicons-shape-monitor");
		expect(element).toHaveClass("hydrated");
	});
});
