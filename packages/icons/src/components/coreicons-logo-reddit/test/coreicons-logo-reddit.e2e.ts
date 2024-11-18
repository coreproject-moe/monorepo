import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-logo-reddit", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-logo-reddit></coreicons-logo-reddit>");
		const element = await page.find("coreicons-logo-reddit");
		expect(element).toHaveClass("hydrated");
	});
});
