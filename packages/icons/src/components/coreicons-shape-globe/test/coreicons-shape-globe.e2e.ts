import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-globe", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-globe></coreicons-shape-globe>");
		const element = await page.find("coreicons-shape-globe");
		expect(element).toHaveClass("hydrated");
	});
});
