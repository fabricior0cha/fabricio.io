import React, { PropsWithChildren } from "react";

export default function Menu({ children }: PropsWithChildren) {
  return <ul className="flex items-center gap-6">{children}</ul>;
}
