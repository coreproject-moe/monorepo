import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-zap-off", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-zap-off></coreproject-shape-zap-off>");
		const element = await page.find("coreproject-shape-zap-off");
		expect(element).toHaveClass("hydrated");
	});
});
