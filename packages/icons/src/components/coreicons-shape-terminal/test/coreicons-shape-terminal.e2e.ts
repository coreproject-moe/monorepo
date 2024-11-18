import { newE2EPage } from "@stencil/core/testing";

describe("coreicons-shape-terminal", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreicons-shape-terminal></coreicons-shape-terminal>");
		const element = await page.find("coreicons-shape-terminal");
		expect(element).toHaveClass("hydrated");
	});
});
