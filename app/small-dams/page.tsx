"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast"
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
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ProjectPhasesModal } from "@/components/project-phases-modal";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  hasChildren?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const SidebarItem = ({
  icon,
  label,
  href,
  active,
  hasChildren,
  expanded,
  onClick,
  children,
}: SidebarItemProps) => {
  const content = (
    <div
      className={`flex items-center space-x-3 p-2 rounded ${
        active ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
      } ${hasChildren ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      <span className="text-sm flex-1">{label}</span>
      {hasChildren &&
        (expanded ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        ))}
    </div>
  );

  if (href && !hasChildren) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return (
    <div>
      {content}
      {hasChildren && expanded && (
        <div className="pl-4 mt-1 border-l ml-3 space-y-1">{children}</div>
      )}
    </div>
  );
};

const smallDamProjects = [
  {
    id: "SDP001",
    name: "Kiambere Small Dam",
    location: "Embu County",
    status: "Completed",
    progress: 100,
    capacity: "50,000 m³",
    beneficiaries: "500 households",
    cost: "KES 15M",
    type: "Earth Dam",
    technicalSpecs: { height: "12 meters" },
  },
  {
    id: "SDP002",
    name: "Mwala Community Dam",
    location: "Machakos County",
    status: "Construction",
    progress: 70,
    capacity: "75,000 m³",
    beneficiaries: "800 households",
    cost: "KES 22M",
    type: "Rock Fill Dam",
    technicalSpecs: { height: "10 meters" },
  },
  {
    id: "SDP003",
    name: "Kitui Rural Dam",
    location: "Kitui County",
    status: "Planning",
    progress: 20,
    capacity: "30,000 m³",
    beneficiaries: "300 households",
    cost: "KES 12M",
    type: "Earth Dam",
    technicalSpecs: { height: "8 meters" },
  },
];

export default function SmallDamsPage() {
  const pathname = usePathname();
  const [projects, setProjects] = useState(smallDamProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "project-management",
  ]);
  const [phasesModalOpen, setPhasesModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  // const { toast } = useToast()

  const toggleExpand = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const isActive = (path: string) => pathname === path;

  const handleProjectAction = (action: string, project: any) => {
    if (action === "View") {
      setSelectedProject(project);
      setPhasesModalOpen(true);
      // toast({
      //   title: `${action} Action`,
      //   description: `${action} initiated for ${project.name}`,
      // })
    } else {
      // toast({
      //   title: `${action} Action`,
      //   description: `${action} initiated for ${project.name}`,
      // })
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white h-16 flex items-center px-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">N</span>
          </div>
          <div>
            <h1 className="font-semibold">
              National Water Harvesting & Storage Authority
            </h1>
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

      <div className="flex">
        {/* Unified Sidebar with Dropdowns */}
        <aside className="w-64 bg-white shadow-sm h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <SidebarItem
                  icon={<Home className="h-4 w-4" />}
                  label="Dashboard"
                  href="/"
                  active={isActive("/")}
                />
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
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Small Dam Projects
            </h1>
            <p className="text-gray-600">
              Manage community-based small dam projects
            </p>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search small dam projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Small Dam
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {project.location}
                      </p>
                    </div>
                    <Badge
                      variant={
                        project.status === "Completed"
                          ? "default"
                          : project.status === "Construction"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Capacity</p>
                        <p className="font-medium">{project.capacity}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Cost</p>
                        <p className="font-medium">{project.cost}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-medium">{project.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Beneficiaries</p>
                        <p className="font-medium">{project.beneficiaries}</p>
                      </div>
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
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleProjectAction("Download", project)}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>

      {/* Project Phases Modal */}
      {selectedProject && (
        <ProjectPhasesModal
          project={selectedProject}
          isOpen={phasesModalOpen}
          onClose={() => setPhasesModalOpen(false)}
          mode="view"
        />
      )}
    </div>
  );
}
