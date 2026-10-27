import assert from "node:assert/strict";
import test from "node:test";
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
    5,
  );
  assert.equal(
    projects.filter((project) => project.category === "side").length,
    2,
  );
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
