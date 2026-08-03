import { chromium } from "playwright";
import path from "node:path";
import { mkdirSync } from "node:fs";

const outDir = path.resolve("screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto("http://localhost:4000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);

for (let i = 0; i < 7; i++) {
  await page.screenshot({ path: path.join(outDir, `v3-home-${i}.png`) });
  await page.mouse.wheel(0, 850);
  await page.waitForTimeout(500);
}

await browser.close();
console.log(errors.length ? errors.join("\n") : "No console errors");

