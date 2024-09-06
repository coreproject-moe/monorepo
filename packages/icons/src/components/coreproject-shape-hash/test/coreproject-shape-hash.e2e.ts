import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-hash", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-hash></coreproject-shape-hash>");
		const element = await page.find("coreproject-shape-hash");
		expect(element).toHaveClass("hydrated");
	});
});
