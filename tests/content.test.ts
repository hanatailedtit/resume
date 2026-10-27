import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { ProjectArchitecture } from "../src/components/project-architectures";
import { experiences, featuredProjects, projects } from "../src/lib/content";

test("every project has a unique route and complete case study", () => {
  assert.equal(
    new Set(projects.map((project) => project.slug)).size,
    projects.length,
  );
  for (const project of projects) {
    assert.match(project.slug, /^[a-z0-9-]+$/);
    for (const field of [
      "title",
      "overview",
      "problem",
      "approach",
      "result",
    ] as const) {
      assert.ok(project[field].trim(), `${project.slug}: missing ${field}`);
    }
    assert.ok(project.work.length > 0);
    if (project.experience)
      assert.ok(
        experiences.some((experience) => experience.id === project.experience),
      );
  }
});

test("resume and featured work only link to existing project pages", () => {
  for (const experience of experiences) {
    if (experience.project)
      assert.ok(
        projects.some((project) => project.slug === experience.project),
      );
  }
  for (const project of featuredProjects)
    assert.ok(project && projects.includes(project));
  assert.equal(
    projects.filter((project) => project.category === "company").length,
    6,
  );
  assert.equal(
    projects.filter((project) => project.category === "side").length,
    2,
  );
});

test("project screenshots point to local WebP assets with accessible descriptions", () => {
  const screenshotProjects = projects.filter(
    (project) => project.screenshots?.length,
  );
  assert.equal(screenshotProjects.length, 4);
  for (const project of screenshotProjects) {
    for (const image of project.screenshots!) {
      assert.match(image.src, /^\/projects\/[a-z0-9-]+\.webp$/);
      const file = readFileSync(
        new URL(`../public${image.src}`, import.meta.url),
      );
      assert.equal(file.toString("ascii", 0, 4), "RIFF");
      assert.equal(file.toString("ascii", 8, 12), "WEBP");
      assert.ok(image.width > 0 && image.height > 0);
      assert.ok(image.alt.trim() && image.caption.trim());
    }
  }
  const pomerium = projects.find(
    (project) => project.slug === "pomerium-space",
  );
  assert.equal(pomerium?.website, "https://pomerium.space/");
  assert.equal(pomerium?.experience, "shiftclick");
});

test("every project has a dedicated architecture diagram", () => {
  for (const project of projects) {
    const component = ProjectArchitecture({ slug: project.slug });
    assert.ok(
      component !== null,
      `Project "${project.slug}" is missing an architecture diagram in ProjectArchitecture`,
    );
  }
});

test("Pomerium shows full-page ownership, section captures, theme comparisons and mobile strips", () => {
  const project = projects.find(
    (project) => project.slug === "pomerium-space",
  )!;
  assert.match(project.role, /전체 개발/);
  const images = project.screenshots!;
  assert.equal(
    images.filter((image) => image.group === "데스크톱 섹션별 화면").length,
    11,
  );
  for (const group of ["라이트·다크 모드 비교", "모바일 반응형"]) {
    const comparisons = images.filter((image) => image.group === group);
    assert.equal(comparisons.length, 2);
    for (const image of comparisons)
      assert.ok(image.width > image.height * 1.5);
  }
});

test("every project has a valid category linking to portfolio query tabs", () => {
  for (const project of projects) {
    assert.ok(
      project.category === "company" || project.category === "side",
      `Project "${project.slug}" has invalid category: ${project.category}`,
    );
    const expectedBackHref = `/portfolio?category=${project.category}`;
    assert.match(expectedBackHref, /^\/portfolio\?category=(company|side)$/);
  }
});
