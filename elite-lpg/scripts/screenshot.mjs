import { chromium } from "playwright";
import path from "node:path";

const outDir = path.resolve("screenshots");
const { mkdirSync } = await import("node:fs");
mkdirSync(outDir, { recursive: true });

const pages = [
  { url: "/", name: "home" },
  { url: "/about", name: "about" },
  { url: "/business-activities", name: "business-activities" },
  { url: "/projects", name: "projects" },
  { url: "/projects/117-surguuli", name: "project-detail-top" },
  { url: "/news", name: "news" },
  { url: "/contact", name: "contact" },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(`[console] ${msg.text()}`);
});
page.on("pageerror", (err) => errors.push(`[pageerror] ${err.message}`));

for (const p of pages) {
  await page.goto(`http://localhost:3000${p.url}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200); // allow page loader / entrance animations
  await page.screenshot({ path: path.join(outDir, `${p.name}.png`) });
  console.log(`captured ${p.name}`);

  if (p.name === "project-detail-top") {
    const height = await page.evaluate(() => document.body.scrollHeight);
    const steps = 4;
    for (let i = 1; i <= steps; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), (height / steps) * i);
      await page.waitForTimeout(500);
      await page.screenshot({ path: path.join(outDir, `project-detail-scroll-${i}.png`) });
      console.log(`captured project-detail-scroll-${i}`);
    }
  }
}

await browser.close();

if (errors.length) {
  console.log("\n--- CONSOLE ERRORS ---");
  console.log(errors.join("\n"));
} else {
  console.log("\nNo console errors detected.");
}
