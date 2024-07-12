import React from "react";

interface AProps {
  children: React.ReactNode;
  href: string;
  target?: "_blank";
  rel?: string;
}
export function A({ children, href, target, rel }: AProps) {
  const isExternal = /^(http|https):\/\//.test(href.trim());
  const _target = isExternal ? "_blank" : target;
  const _rel = isExternal ? "external noopener" : rel;
  return (
    <a href={href} target={_target} rel={_rel} className="underline">
      {children}
    </a>
  );
}
