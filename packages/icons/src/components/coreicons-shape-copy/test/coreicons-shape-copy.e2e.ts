import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-copy", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-copy></coreicons-shape-copy>");
		const element = await page.find("coreicons-shape-copy");
		expect(element).toHaveClass("hydrated");
	});
});
