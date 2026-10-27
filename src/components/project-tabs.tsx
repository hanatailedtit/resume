"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/shared";
import { projects } from "@/lib/content";

export function ProjectTabs() {
  return (
    <Tabs defaultValue="company" className="gap-0">
      <TabsList
        variant="line"
        aria-label="프로젝트 분류"
        className="h-14 w-full justify-start group-data-horizontal/tabs:h-14 gap-7 rounded-none border-b bg-transparent p-0"
      >
        {[
          ["company", "회사 프로젝트"],
          ["side", "사이드 프로젝트"],
        ].map(([value, label]) => (
          <TabsTrigger
            key={value}
            value={value}
            className="relative h-14 flex-none gap-2 rounded-none border-0 bg-transparent px-0 text-[15px] font-semibold text-muted-foreground shadow-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:after:opacity-100 after:bottom-0!"
          >
            {label}
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {projects.filter((project) => project.category === value).length}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {[
        ["company", "재직 중 담당한 작업", "회사 프로젝트"],
        ["side", "직접 기획하거나 팀으로 만든 작업", "사이드 프로젝트"],
      ].map(([category, subtitle, title]) => (
        <TabsContent
          key={category}
          value={category}
          className="pt-10 focus-visible:outline-none md:pt-12"
        >
          <p className="mb-2 text-sm text-muted-foreground">{subtitle}</p>
          <h2 className="section-title">{title}</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {projects
              .filter((project) => project.category === category)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
