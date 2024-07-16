"use client";

import { ComponentProps, forwardRef } from "react";
import { usePathname } from "@/src/navigation";
import { Link } from "@/src/navigation";

const NavigationLink = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof Link<any>>
>(({ href, ...rest }, ref) => {
  const pathname = usePathname();
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
