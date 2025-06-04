"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  FileText,
  Users,
  MapPin,
  Settings,
  Home,
  FolderOpen,
  UserCheck,
  ClipboardList,
  BarChart3,
  Plus,
  Eye,
  Edit,
  Download,
  Search,
  ChevronRight,
  ChevronDown,
  Activity,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { enhancedProjects } from "@/lib/project-data"
import { ProjectPhasesModal } from "@/components/project-phases-modal"
import { toast } from "sonner"

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

export default function ProjectsPage() {
  const pathname = usePathname()
  const [projects, setProjects] = useState(enhancedProjects)
  const [selectedProject, setSelectedProject] = useState(enhancedProjects[0])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [phasesModalOpen, setPhasesModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<"view" | "edit">("view")
  const [expandedItems, setExpandedItems] = useState<string[]>(["project-management"])

  const toggleExpand = (item: string) => {
    setExpandedItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  const isActive = (path: string) => pathname === path

  const handleProjectAction = (action: string, project: any) => {
    setSelectedProject(project)

    if (action === "View") {
      setModalMode("view")
      setPhasesModalOpen(true)
      toast.success(`Viewing phases for ${project.name}`)
    } else if (action === "Edit") {
      setModalMode("edit")
      setPhasesModalOpen(true)
      toast.success(`Editing phases for ${project.name}`)
    } else if (action === "Download") {
      toast.success(`Downloading project data for ${project.name}`)
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status.toLowerCase().includes(statusFilter.toLowerCase())
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white h-16 flex items-center px-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">N</span>
          </div>
          <div>
            <h1 className="font-semibold">National Water Harvesting & Storage Authority</h1>
            <p className="text-xs text-blue-100">Project Management System</p>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <span className="text-sm">Project Manager</span>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Unified Sidebar with Dropdowns */}
        <aside className="w-64 bg-white shadow-sm flex-shrink-0 overflow-hidden">
          <nav className="p-4 h-full overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <SidebarItem icon={<Home className="h-4 w-4" />} label="Dashboard" href="/" active={isActive("/")} />
              </li>
              <li>
                <SidebarItem
                  icon={<BarChart3 className="h-4 w-4" />}
                  label="Survey Dashboard"
                  href="/survey"
                  active={isActive("/survey")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<Activity className="h-4 w-4" />}
                  label="Public Dashboard"
                  href="/public"
                  active={isActive("/public")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<FolderOpen className="h-4 w-4" />}
                  label="Project Management"
                  hasChildren
                  expanded={expandedItems.includes("project-management")}
                  onClick={() => toggleExpand("project-management")}
                >
                  <SidebarItem
                    icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                    label="Large Dam Projects"
                    href="/projects"
                    active={isActive("/projects")}
                  />
                  <SidebarItem
                    icon={<div className="w-1 h-1 rounded-full bg-gray-400" />}
                    label="Small Dam Projects"
                    href="/small-dams"
                    active={isActive("/small-dams")}
                  />
                </SidebarItem>
              </li>
              <li>
                <SidebarItem
                  icon={<UserCheck className="h-4 w-4" />}
                  label="Expert Management"
                  href="/experts"
                  active={isActive("/experts")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<ClipboardList className="h-4 w-4" />}
                  label="Contract Management"
                  href="/contracts"
                  active={isActive("/contracts")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<FileText className="h-4 w-4" />}
                  label="Documents"
                  href="/documents"
                  active={isActive("/documents")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<BarChart3 className="h-4 w-4" />}
                  label="Reports"
                  href="/reports"
                  active={isActive("/reports")}
                />
              </li>
              <li>
                <SidebarItem
                  icon={<Settings className="h-4 w-4" />}
                  label="Settings"
                  href="/settings"
                  active={isActive("/settings")}
                />
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Page Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Large Dam Projects</h1>
              <p className="text-gray-600">Manage and monitor large dam construction projects across Kenya</p>
            </div>

            {/* Filters and Search */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search projects by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="planning">Planning</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="completion">Near Completion</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4 mr-2" />
                  New Project
                </Button>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {project.location} • {project.river}
                        </p>
                      </div>
                      <Badge
                        variant={
                          project.status === "Construction Phase"
                            ? "default"
                            : project.status === "Near Completion"
                              ? "secondary"
                              : project.status === "Design Phase"
                                ? "outline"
                                : "outline"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Overall Progress</span>
                          <span className="font-medium">{project.overallProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all"
                            style={{ width: `${project.overallProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Budget</p>
                          <p className="font-medium">{project.totalBudget}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Height</p>
                          <p className="font-medium">{project.technicalSpecs.height}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Capacity</p>
                          <p className="font-medium">{project.technicalSpecs.capacity}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Type</p>
                          <p className="font-medium">{project.damType.split(" ")[0]}</p>
                        </div>
                      </div>

                      <div className="pt-3 border-t">
                        <p className="text-xs text-gray-600 mb-2">Current Phase</p>
                        <p className="text-sm font-medium">{project.currentPhase}</p>
                      </div>

                      <div className="flex space-x-2 pt-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleProjectAction("View", project)}
                        >
                          <Eye className="h-3 w-3 mr-1" />
                          View
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => handleProjectAction("Edit", project)}
                        >
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleProjectAction("Download", project)}>
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Project Phases Modal */}
      <ProjectPhasesModal
        project={selectedProject}
        isOpen={phasesModalOpen}
        onClose={() => setPhasesModalOpen(false)}
        mode={modalMode}
      />
    </div>
  )
}
