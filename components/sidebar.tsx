"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  FolderPlus,
  Workflow,
  Users,
  Building2,
  FileText,
  Settings,
  ChevronRight,
  ChevronDown,
} from "lucide-react"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  href?: string
  active?: boolean
  hasChildren?: boolean
  expanded?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const SidebarItem = ({ icon, label, href, active, hasChildren, expanded, onClick, children }: SidebarItemProps) => {
  const content = (
    <div
      className={`flex items-center space-x-3 p-2 rounded ${
        active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
      } ${hasChildren ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span className="text-sm flex-1">{label}</span>
      {hasChildren && (expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
    </div>
  )

  if (href && !hasChildren) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    )
  }

  return (
    <div>
      {content}
      {hasChildren && expanded && <div className="pl-4 mt-1 border-l ml-3 space-y-1">{children}</div>}
    </div>
  )
}

export function Sidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["construction-process"])

  const toggleExpand = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const isActive = (path: string) => pathname === path

  return (
    <aside className="w-64 bg-white shadow-sm h-screen flex-shrink-0 overflow-hidden">
      <div className="p-4 border-b flex items-center space-x-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </div>
        <div>
          <h1 className="font-semibold text-sm">National Water Harvesting</h1>
          <p className="text-xs text-gray-600">& Storage Authority</p>
        </div>
      </div>
      <nav className="p-4 h-[calc(100vh-72px)] overflow-y-auto">
        <ul className="space-y-1">
          <li>
            <SidebarItem icon={<Home className="h-4 w-4" />} label="Dashboard" href="/" active={isActive("/")} />
          </li>
          <li>
            <SidebarItem
              icon={<FolderPlus className="h-4 w-4" />}
              label="Project Creation"
              hasChildren
              expanded={expandedItems.includes("project-creation")}
              onClick={() => toggleExpand("project-creation")}
            >
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="New Project"
                href="/projects/new"
                active={isActive("/projects/new")}
              />
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="Project Templates"
                href="/projects/templates"
                active={isActive("/projects/templates")}
              />
            </SidebarItem>
          </li>
          <li>
            <SidebarItem
              icon={<Workflow className="h-4 w-4" />}
              label="Construction Process"
              hasChildren
              expanded={expandedItems.includes("construction-process")}
              onClick={() => toggleExpand("construction-process")}
            >
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="Phase 1(Documentation)"
                href="/construction/phase-1"
                active={isActive("/construction/phase-1")}
              />
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="Phase 2(Procurement)"
                href="/construction/phase-2"
                active={isActive("/construction/phase-2")}
              />
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="Phase 3(Construction)"
                href="/construction/phase-3"
                active={isActive("/construction/phase-3")}
              />
              <SidebarItem
                icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                label="Phase 4"
                href="/construction/phase-4"
                active={isActive("/construction/phase-4")}
              />
            </SidebarItem>
          </li>
          <li>
            <SidebarItem
              icon={<Users className="h-4 w-4" />}
              label="User Management"
              href="/users"
              active={isActive("/users")}
            />
          </li>
          <li>
            <SidebarItem
              icon={<Building2 className="h-4 w-4" />}
              label="Site Management"
              href="/sites"
              active={isActive("/sites")}
            />
          </li>
          <li>
            <SidebarItem
              icon={<FileText className="h-4 w-4" />}
              label="Reports"
              href="/reports"
              active={isActive("/reports")}
            />
          </li>
          <li>
            <SidebarItem
              icon={<Settings className="h-4 w-4" />}
              label="Setup"
              href="/setup"
              active={isActive("/setup")}
            />
          </li>
        </ul>
      </nav>
    </aside>
  )
}
