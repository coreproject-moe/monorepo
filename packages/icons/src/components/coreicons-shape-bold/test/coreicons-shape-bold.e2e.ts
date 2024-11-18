import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-bold", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-bold></coreicons-shape-bold>");
		const element = await page.find("coreicons-shape-bold");
		expect(element).toHaveClass("hydrated");
	});
});
