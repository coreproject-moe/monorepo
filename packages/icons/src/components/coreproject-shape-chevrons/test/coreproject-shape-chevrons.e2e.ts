import { newE2EPage } from "@stencil/core/testing";

describe("coreproject-shape-chevrons", () => {
	it("renders", async () => {
		const page = await newE2EPage();
		await page.setContent("<coreproject-shape-chevrons></coreproject-shape-chevrons>");
		const element = await page.find("coreproject-shape-chevrons");
		expect(element).toHaveClass("hydrated");
	});
});
