import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const files = [];

function walk(path) {
  for (const entry of readdirSync(path)) {
    const full = join(path, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (full.endsWith(".mjs")) files.push(full);
  }
}

walk("src/modules");

const violations = [];

for (const file of files) {
  const source = readFileSync(file, "utf8");

  if (file.includes("/domain/")) {
    if (/from\s+["'][^"']*\/(application|adapters|ports)\//.test(source)) {
      violations.push(`${file}: domain imports an outer layer`);
    }
  }

  if (file.includes("/application/")) {
    if (/from\s+["'][^"']*\/adapters\//.test(source)) {
      violations.push(`${file}: application imports a concrete adapter`);
    }
  }
}

if (violations.length > 0) {
  console.error("Architecture violations:\n" + violations.join("\n"));
  process.exit(1);
}

console.log("Architecture boundaries: OK");
