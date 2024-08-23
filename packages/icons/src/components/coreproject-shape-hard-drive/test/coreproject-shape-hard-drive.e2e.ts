import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-hard-drive", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-hard-drive></coreproject-shape-hard-drive>");
		const element = await page.find("coreproject-shape-hard-drive");
		expect(element).toHaveClass("hydrated");
	});
});
