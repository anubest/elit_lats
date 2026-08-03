import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve("screenshots");
const browser = await chromium.launch();
const page = await browser.newContext({ viewport: { width: 1440, height: 900 } }).then(c => c.newPage());
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: path.join(outDir, "restructure-home-1.png") });
await page.mouse.wheel(0, 900);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "restructure-home-2.png") });
await page.mouse.wheel(0, 900);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "restructure-home-3.png") });

await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.mouse.wheel(0, 2200);
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, "restructure-about-process.png") });

await page.goto("http://localhost:3000/business-activities", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.mouse.wheel(0, 900);
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, "restructure-ba-services.png") });

await browser.close();
console.log(errors.length ? errors.join("\n") : "No console errors");
