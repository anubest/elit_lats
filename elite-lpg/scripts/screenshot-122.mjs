import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve("screenshots");
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
const errors = [];
page.on("pageerror", (e) => errors.push(`[${page.url()}] ${e.message}`));
page.on("console", (m) => { if (m.type() === "error") errors.push(`[${page.url()}] ${m.text()}`); });

await page.goto("http://localhost:3000/projects", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(outDir, "v5-projects-list.png") });

await page.goto("http://localhost:3000/projects/122-surguuli", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
for (let i = 0; i < 8; i++) {
  await page.screenshot({ path: path.join(outDir, `v5-122-${i}.png`) });
  await page.mouse.wheel(0, 900);
  await page.waitForTimeout(400);
}

await page.goto("http://localhost:3000/projects/117-surguuli", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: path.join(outDir, "v5-117-top.png") });
await page.mouse.wheel(0, 1600);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "v5-117-overview.png") });

await browser.close();
console.log(errors.length ? errors.join("\n") : "No console errors");
