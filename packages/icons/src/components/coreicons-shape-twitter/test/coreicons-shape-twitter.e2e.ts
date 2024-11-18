import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-twitter", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-twitter></coreicons-shape-twitter>");
		const element = await page.find("coreicons-shape-twitter");
		expect(element).toHaveClass("hydrated");
	});
});
