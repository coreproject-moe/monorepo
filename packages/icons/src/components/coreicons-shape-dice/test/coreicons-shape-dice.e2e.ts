import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-dice", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-dice></coreicons-shape-dice>");
		const element = await page.find("coreicons-shape-dice");
		expect(element).toHaveClass("hydrated");
	});
});
