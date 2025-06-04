"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  TrendingUp,
  Calendar,
  Download,
  PieChart,
} from "lucide-react";
import Link from "next/link";

const reportTypes = [
  {
    id: "RPT001",
    name: "Project Progress Report",
    description: "Monthly progress summary for all projects",
    icon: TrendingUp,
    lastGenerated: "2024-05-30",
    frequency: "Monthly",
  },
  {
    id: "RPT002",
    name: "Financial Summary",
    description: "Budget utilization and financial status",
    icon: PieChart,
    lastGenerated: "2024-05-25",
    frequency: "Quarterly",
  },
  {
    id: "RPT003",
    name: "Expert Utilization Report",
    description: "Expert assignments and availability",
    icon: Users,
    lastGenerated: "2024-05-28",
    frequency: "Monthly",
  },
  {
    id: "RPT004",
    name: "Contract Status Report",
    description: "Active contracts and payment status",
    icon: ClipboardList,
    lastGenerated: "2024-05-29",
    frequency: "Monthly",
  },
];

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  // const { toast } = useToast()

  const handleGenerateReport = (report: any) => {
    // toast({
    //   title: "Generating Report",
    //   description: `${report.name} is being generated...`,
    // })

    setTimeout(() => {
      // toast({
      //   title: "Report Ready",
      //   description: `${report.name} has been generated successfully.`,
      // })
    }, 2000);
  };

  const filteredReports = reportTypes.filter((report) =>
    report.name.toLowerCase().includes(searchTerm.toLowerCase()),
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
                  className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50"
                >
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Documents</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600"
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
              Reports Dashboard
            </h1>
            <p className="text-gray-600">Generate and manage project reports</p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <Input
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          {/* Reports Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredReports.map((report) => {
              const IconComponent = report.icon;
              return (
                <Card
                  key={report.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">
                          {report.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {report.description}
                        </p>

                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Last:{" "}
                            {new Date(
                              report.lastGenerated,
                            ).toLocaleDateString()}
                          </div>
                          <div>Frequency: {report.frequency}</div>
                        </div>

                        <div className="flex space-x-2">
                          <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => handleGenerateReport(report)}
                          >
                            Generate Report
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => handleGenerateReport(report)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Last
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Quick Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Active Projects</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">3</div>
                  <div className="text-sm text-gray-600">
                    Completed Projects
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-gray-600">Active Contracts</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600">8</div>
                  <div className="text-sm text-gray-600">Available Experts</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
