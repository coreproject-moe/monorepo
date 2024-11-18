import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-clipboard", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-clipboard></coreicons-shape-clipboard>");
		const element = await page.find("coreicons-shape-clipboard");
		expect(element).toHaveClass("hydrated");
	});
});
