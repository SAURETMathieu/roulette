"use client";

import { ComponentProps, forwardRef } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Link, type AppPathnames } from "@/src/navigation";

const NavigationLink = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof Link<AppPathnames>>
>(({ href, ...rest }, ref) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      ref={ref}
      {...rest}
    />
  );
});

NavigationLink.displayName = "NavigationLink";

export default NavigationLink;
