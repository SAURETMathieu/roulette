"use client";

import React from "react";
import { useParams } from "next/navigation";
import { allPathnames } from "@/src/config";
import { usePathname } from "@/src/navigation";
import { Home } from "lucide-react";
import { useLocale } from "next-intl";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function BreadcrumbSection() {
  const path = usePathname();
  const locale = useLocale();
  const params = useParams();

  // Replace the path parameters with the actual values
  const replaceParamsInPath = (
    path: string,
    params: Record<string, any>
  ): string => {
    return Object.keys(params).reduce((updatedPath, param) => {
      const placeholder = `[${param}]`;
      return updatedPath.includes(placeholder)
        ? updatedPath.replace(new RegExp(`\\[${param}\\]`, "g"), params[param])
        : updatedPath;
    }, path);
  };

  // Split the path into an array of path names
  let currentPathNames: string[] = path.split("/").filter((p) => p);

  // Replace the path parameters with the actual values
  currentPathNames = currentPathNames.map((pathname) => replaceParamsInPath(pathname, params));

  // Translate the path names and remove slashes
  const currentPathNamesTranslated = currentPathNames
    ?.map((name: string) => {
      if (allPathnames[("/" + name) as keyof typeof allPathnames]) {
        return (
          //@ts-ignore
          allPathnames[("/" + name) as keyof typeof allPathnames][locale] ?? name
        );
      }
      return name;
    })
    .map((name) => name.replace(/\//g, ""));

  const maxVisibleItems = 3;
  const invisibleItems =
    currentPathNamesTranslated.length > maxVisibleItems
      ? currentPathNamesTranslated.slice(0, -2)
      : [];

  // Generate the full path up to the given index
  const generateFullPath = (index: number) => {
    if (index >= 0 && index < currentPathNames.length) {
      const path = currentPathNames.slice(0, index + 1).join("/");
      return "/" + path;
    }
    return "/";
  };

  return (
    <Breadcrumb className="hidden sm:flex">
      <BreadcrumbList>
        {/* Render the home icon if there are path names */}
        {currentPathNamesTranslated.length > 0 && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="size-4" />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {/* Render the invisible items into the dropdown menu*/}
        {invisibleItems.length > 0 && (
          <>
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {invisibleItems.map((name, index) => {
                    const href = generateFullPath(index);
                    return (
                      <DropdownMenuItem key={index}>
                        <BreadcrumbLink href={href} className="w-full">
                          {name}
                        </BreadcrumbLink>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {/* Render the rest of visible items */}
        {currentPathNamesTranslated
          .slice(invisibleItems.length)
          .map((name, index) => {
            const actualIndex = invisibleItems.length + index;
            const href = generateFullPath(actualIndex);
            const isLastItem =
              index ===
              currentPathNamesTranslated.slice(invisibleItems.length).length -
                1;

            return (
              <React.Fragment key={index}>
                {index > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {isLastItem ? (
                    <BreadcrumbPage className="rounded bg-foreground/30 p-1 font-bold">
                      {name}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>{name}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
