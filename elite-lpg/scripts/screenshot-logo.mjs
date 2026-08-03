import { chromium } from "playwright";
import path from "node:path";

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.resolve("screenshots/logo-navbar.png"), clip: { x: 0, y: 0, width: 400, height: 90 } });

await page.mouse.wheel(0, 3000);
await page.waitForTimeout(600);
await page.screenshot({ path: path.resolve("screenshots/logo-footer.png"), clip: { x: 0, y: 400, width: 500, height: 200 } });

await browser.close();
console.log("done");
