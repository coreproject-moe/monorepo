import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-smile", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-smile></coreicons-shape-smile>");
		const element = await page.find("coreicons-shape-smile");
		expect(element).toHaveClass("hydrated");
	});
});
