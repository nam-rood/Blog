import fs from "node:fs";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const inputDir = path.join(rootDir, "old-blog-import");
const outputDir = path.join(rootDir, "src", "content", "posts", "imported");

function parseOldFile(raw) {
	const lines = raw.split("\n");
	let title = "";

	for (const line of lines) {
		const titleMatch = line.match(/^#\s+(.+)$/);
		if (titleMatch) {
			title = titleMatch[1].trim();
			break;
		}
	}

	const dateMatch = raw.match(/-\s*日期:\s*(\d{4}-\d{2}-\d{2})T/);
	const published = dateMatch ? dateMatch[1] : "";

	const linkMatch = raw.match(/-\s*原链接:\s*(\S+)/);
	const sourceLink = linkMatch ? linkMatch[1].trim() : "";

	const separatorIndex = raw.indexOf("---");
	const body = separatorIndex !== -1 ? raw.slice(separatorIndex + 3).trim() : "";

	return { title, published, sourceLink, body };
}

function extractDescription(body, fallbackTitle) {
	const lines = body.split("\n");
	const result = [];
	let inCodeBlock = false;

	for (const line of lines) {
		const trimmed = line.trim();

		if (trimmed.startsWith("```")) {
			inCodeBlock = !inCodeBlock;
			if (result.length > 0) break;
			continue;
		}

		if (inCodeBlock) continue;
		if (trimmed === "") {
			if (result.length > 0) break;
			continue;
		}
		if (trimmed.startsWith("#") || trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
			continue;
		}

		result.push(trimmed);
	}

	const description = result.join(" ").trim();
	return description || fallbackTitle;
}

function sanitizeBody(body) {
	return body.replace(/(key\s*=\s*)sk-\S+/g, "$1***");
}

fs.mkdirSync(outputDir, { recursive: true });

for (const file of fs.readdirSync(outputDir)) {
	if (file.endsWith(".md")) {
		fs.unlinkSync(path.join(outputDir, file));
	}
}

const inputFiles = fs
	.readdirSync(inputDir)
	.filter((file) => file.endsWith(".md") && file !== "README.md")
	.sort();

let importedCount = 0;

for (const file of inputFiles) {
	const raw = fs.readFileSync(path.join(inputDir, file), "utf8");
	const { title, published, sourceLink, body } = parseOldFile(raw);
	const description = extractDescription(body, title);
	const sanitizedBody = sanitizeBody(body);

	const frontmatter = [
		"---",
		`title: ${JSON.stringify(title)}`,
		`published: ${published}`,
		`description: ${JSON.stringify(description)}`,
		"draft: false",
		`sourceLink: ${JSON.stringify(sourceLink)}`,
		"---",
	].join("\n");

	const content = `${frontmatter}\n\n${sanitizedBody}\n`;
	fs.writeFileSync(path.join(outputDir, file), content, "utf8");
	importedCount += 1;
}

console.log(`Imported ${importedCount} posts to ${path.relative(rootDir, outputDir)}`);
