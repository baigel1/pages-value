"use client";

import { Button } from "@/components/ui/button";

interface NavItem {
  label: string;
  id: string;
}

interface TopNavProps {
  items: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
}

export function TopNav({ items, activeId, onNavigate }: TopNavProps) {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center h-16 px-4 gap-2">
        <div className="flex gap-1">
          {items.map((item) => (
            <Button
              key={item.id}
              variant={activeId === item.id ? "default" : "ghost"}
              onClick={() => onNavigate(item.id)}
              className="text-sm font-medium"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
