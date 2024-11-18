import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-hard-drive", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-hard-drive></coreicons-shape-hard-drive>");
		const element = await page.find("coreicons-shape-hard-drive");
		expect(element).toHaveClass("hydrated");
	});
});
