import { chromium } from "playwright";
import path from "node:path";

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
await page.goto("http://localhost:3000/projects", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.resolve("screenshots/projects-fixed.png") });
await browser.close();
console.log("done");
