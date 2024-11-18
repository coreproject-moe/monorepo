import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-unlock", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-unlock></coreicons-shape-unlock>");
		const element = await page.find("coreicons-shape-unlock");
		expect(element).toHaveClass("hydrated");
	});
});
