import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-minus", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-minus></coreicons-shape-minus>");
		const element = await page.find("coreicons-shape-minus");
		expect(element).toHaveClass("hydrated");
	});
});
