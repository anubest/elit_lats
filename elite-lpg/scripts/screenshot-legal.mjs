import { chromium } from "playwright";
import path from "node:path";
import { mkdirSync } from "node:fs";

const outDir = path.resolve("screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then((c) => c.newPage());

const errors = [];
page.on("pageerror", (e) => errors.push(e.message));

await page.goto("http://localhost:3000/projects/117-surguuli", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
const el = await page.locator("text=Анхдагч туршлага").first();
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(outDir, "legal-reference.png"), fullPage: false });
await page.mouse.wheel(0, -900);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "legal-reference-timeline.png") });

await browser.close();
console.log(errors.length ? errors.join("\n") : "No errors");
