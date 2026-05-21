import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const importedPostsDir = path.resolve(__dirname, "../src/content/posts/imported");

function parseFrontmatter(content) {
	const match = content.match(/^---\n([\s\S]*?)\n---\n/);
	assert.ok(match, "frontmatter is required");
	return match[1];
}

function getField(frontmatter, name) {
	const match = frontmatter.match(new RegExp(`^${name}:\\s*(.+)$`, "m"));
	return match?.[1]?.trim() ?? "";
}

describe("imported old blog posts", () => {
	it("contains generated markdown posts with required metadata", () => {
		assert.equal(
			existsSync(importedPostsDir),
			true,
			`Expected imported posts directory to exist: ${importedPostsDir}`,
		);

		const files = readdirSync(importedPostsDir).filter((file) =>
			file.endsWith(".md"),
		);
		assert.equal(files.length, 20, "all exported posts should be imported");

		for (const file of files) {
			const content = readFileSync(path.join(importedPostsDir, file), "utf8");
			const frontmatter = parseFrontmatter(content);

			assert.notEqual(getField(frontmatter, "title"), "", `${file} should have a title`);
			assert.match(
				getField(frontmatter, "published"),
				/^\d{4}-\d{2}-\d{2}$/,
				`${file} should have a published date`,
			);
			assert.notEqual(
				getField(frontmatter, "description"),
				"",
				`${file} should have a description`,
			);
			assert.notEqual(getField(frontmatter, "draft"), "", `${file} should have a draft field`);
			assert.notEqual(getField(frontmatter, "category"), "", `${file} should have a category`);
			assert.match(
				getField(frontmatter, "tags"),
				/^\[.+\]$/,
				`${file} should have a tags array`,
			);
			assert.equal(
				content.includes("key = sk-"),
				false,
				`${file} should not keep exported secret-like config examples`,
			);
		}
	});
});
