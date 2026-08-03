import { chromium } from "playwright";
import path from "node:path";
import { mkdirSync } from "node:fs";

const outDir = path.resolve("screenshots");
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: path.join(outDir, "v2-home-hero.png") });

const partnersEl = page.locator("text=Хамтран ажилладаг байгууллага").first();
await partnersEl.scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await page.screenshot({ path: path.join(outDir, "v2-partners-marquee.png") });

await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: path.join(outDir, "v2-about.png") });

await page.goto("http://localhost:3000/business-activities", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: path.join(outDir, "v2-business-top.png") });
const majorEl = page.locator("#major-projects");
await majorEl.scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "v2-major-projects.png") });
await page.mouse.wheel(0, 1400);
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, "v2-major-projects-gallery.png") });

await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
await page.screenshot({ path: path.join(outDir, "v2-contact.png") });

await browser.close();
console.log(errors.length ? errors.join("\n") : "No console errors");
