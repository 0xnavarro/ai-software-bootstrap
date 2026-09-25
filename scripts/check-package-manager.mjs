import { existsSync, readFileSync } from "node:fs";

const forbidden = ["package-lock.json", "yarn.lock", "npm-shrinkwrap.json"];
const found = forbidden.filter(existsSync);

if (found.length > 0) {
  console.error(`Mixed package managers are not allowed: ${found.join(", ")}`);
  process.exit(1);
}

if (!existsSync("pnpm-lock.yaml")) {
  console.error("pnpm-lock.yaml is required.");
  process.exit(1);
}

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
if (!String(pkg.packageManager ?? "").startsWith("pnpm@")) {
  console.error("package.json must pin pnpm via packageManager.");
  process.exit(1);
}

console.log("Package-manager policy: OK");
