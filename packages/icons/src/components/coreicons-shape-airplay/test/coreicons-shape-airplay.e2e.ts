import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-airplay", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-airplay></coreicons-shape-airplay>");
		const element = await page.find("coreicons-shape-airplay");
		expect(element).toHaveClass("hydrated");
	});
});
