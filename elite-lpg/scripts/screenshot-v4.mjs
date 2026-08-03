import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve("screenshots");
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
const errors = [];
page.on("pageerror", (e) => errors.push(`[${page.url()}] ${e.message}`));
page.on("console", (m) => { if (m.type() === "error") errors.push(`[${page.url()}] ${m.text()}`); });

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
for (let i = 0; i < 8; i++) {
  await page.screenshot({ path: path.join(outDir, `v4-home-${i}.png`) });
  await page.mouse.wheel(0, 850);
  await page.waitForTimeout(500);
}

await page.goto("http://localhost:3000/projects", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(outDir, "v4-projects-1.png") });
await page.mouse.wheel(0, 1200);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "v4-projects-2.png") });

await page.goto("http://localhost:3000/business-activities", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.mouse.wheel(0, 1600);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "v4-ba-projects.png") });

await browser.close();
console.log(errors.length ? errors.join("\n") : "No console errors");
