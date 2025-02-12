import Link from "next/link";
import React from "react";

interface AProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank";
  rel?: string;
  className?: string;
}
export function A({ children, href, target, rel, className }: AProps) {
  const isExternal = /^(http|https):\/\//.test(href.trim());
  const _target = isExternal ? "_blank" : target;
  const _rel = isExternal ? "external noopener" : rel;
  return (
    <Link
      href={href}
      target={_target}
      rel={_rel}
      className={`${className || "underline"}`}
    >
      {children}
    </Link>
  );
}
