"use client";

import { Suspense, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/components/shared";
import { projects } from "@/lib/content";

const categories = [
  { value: "company", label: "회사 프로젝트" },
  { value: "side", label: "사이드 프로젝트" },
].map((category) => ({
  ...category,
  projects: projects.filter((project) => project.category === category.value),
}));

function ProjectTabsView({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange?: (value: string) => void;
}) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange} className="gap-0">
      <TabsList
        variant="line"
        aria-label="프로젝트 분류"
        className="h-14 w-full justify-start group-data-horizontal/tabs:h-14 gap-5 rounded-none border-b bg-transparent p-0 sm:gap-7"
      >
        {categories.map(({ value, label, projects }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="relative h-14 flex-none gap-2 rounded-none border-0 bg-transparent px-0 text-[15px] font-semibold text-muted-foreground shadow-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:after:bg-primary data-[state=active]:after:opacity-100 after:bottom-0!"
          >
            {label}
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {projects.length}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      {categories.map(({ value, projects }) => (
        <TabsContent
          key={value}
          value={value}
          className="pt-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:pt-7"
        >
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}

function ProjectTabsInner() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const queryCategory = searchParams.get("category") || searchParams.get("tab");
  const urlTab = queryCategory === "side" ? "side" : "company";

  const [activeTab, setActiveTab] = useState(urlTab);

  useEffect(() => {
    setActiveTab(urlTab);
  }, [urlTab]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tab");
    params.set("category", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <ProjectTabsView activeTab={activeTab} onTabChange={handleTabChange} />
  );
}

export function ProjectTabs() {
  return (
    <Suspense fallback={<ProjectTabsView activeTab="company" />}>
      <ProjectTabsInner />
    </Suspense>
  );
}
