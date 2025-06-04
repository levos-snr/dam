"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/hooks/use-toast"
import {
  FileText,
  Users,
  Settings,
  Home,
  FolderOpen,
  UserCheck,
  ClipboardList,
  BarChart3,
  Eye,
  Download,
  Upload,
  Search,
  File,
} from "lucide-react";
import Link from "next/link";

const documents = [
  {
    id: "DOC001",
    name: "Thwake Dam Feasibility Study",
    type: "PDF",
    size: "15.2 MB",
    project: "Thwake Multipurpose Dam",
    uploadDate: "2023-01-15",
    status: "Approved",
    category: "Feasibility Studies",
  },
  {
    id: "DOC002",
    name: "Environmental Impact Assessment",
    type: "PDF",
    size: "8.7 MB",
    project: "High Grand Falls Dam",
    uploadDate: "2023-08-10",
    status: "Under Review",
    category: "Environmental",
  },
  {
    id: "DOC003",
    name: "Construction Drawings",
    type: "DWG",
    size: "45.3 MB",
    project: "Karimenu II Dam",
    uploadDate: "2024-01-20",
    status: "Approved",
    category: "Technical Drawings",
  },
  {
    id: "DOC004",
    name: "Geotechnical Investigation Report",
    type: "PDF",
    size: "12.1 MB",
    project: "Arror Dam",
    uploadDate: "2023-11-12",
    status: "Approved",
    category: "Geotechnical",
  },
];

export default function DocumentsPage() {
  const [documentList, setDocumentList] = useState(documents);
  const [searchTerm, setSearchTerm] = useState("");
  // const { toast } = useToast()

  const handleDocumentAction = (action: string, document: any) => {
    // toast({
    //   title: `${action} Document`,
    //   description: `${action} action for ${document.name}`,
    // })
  };

  const filteredDocuments = documentList.filter(
    (document) =>
      document.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      document.project.toLowerCase().includes(searchTerm.toLowerCase()),
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
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Large Dam Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/small-dams"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Small Dam Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <UserCheck className="h-4 w-4" />
                  <span className="text-sm">Expert Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contracts"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <ClipboardList className="h-4 w-4" />
                  <span className="text-sm">Contract Management</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/documents"
                  className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Reports</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/settings"
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Document Management
            </h1>
            <p className="text-gray-600">Manage project documents and files</p>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Upload className="h-4 w-4 mr-2" />
              Upload Document
            </Button>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredDocuments.map((document) => (
              <Card
                key={document.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <File className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">
                          {document.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {document.type} • {document.size}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant={
                        document.status === "Approved"
                          ? "default"
                          : document.status === "Under Review"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {document.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm">
                      <p className="text-gray-600">Project</p>
                      <p className="font-medium">{document.project}</p>
                    </div>

                    <div className="text-sm">
                      <p className="text-gray-600">Category</p>
                      <p className="font-medium">{document.category}</p>
                    </div>

                    <div className="text-sm">
                      <p className="text-gray-600">Upload Date</p>
                      <p className="font-medium">
                        {new Date(document.uploadDate).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex space-x-2 pt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleDocumentAction("View", document)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          handleDocumentAction("Download", document)
                        }
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
    </div>
  );
}
