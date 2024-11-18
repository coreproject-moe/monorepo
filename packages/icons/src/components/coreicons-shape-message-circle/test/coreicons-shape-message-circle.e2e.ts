import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-message-circle", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-message-circle></coreicons-shape-message-circle>");
		const element = await page.find("coreicons-shape-message-circle");
		expect(element).toHaveClass("hydrated");
	});
});
