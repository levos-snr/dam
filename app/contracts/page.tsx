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
  Plus,
  Eye,
  Edit,
  Calendar,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const contracts = [
  {
    id: "CNT001",
    title: "Thwake Dam Construction Contract",
    contractor: "China Gezhouba Group",
    project: "Thwake Multipurpose Dam",
    value: "KES 63.5B",
    status: "Active",
    startDate: "2019-03-15",
    endDate: "2025-12-31",
    progress: 75,
    type: "Construction",
  },
  {
    id: "CNT002",
    title: "High Grand Falls Feasibility Study",
    contractor: "Nippon Koei Co. Ltd",
    project: "High Grand Falls Dam",
    value: "KES 2.5B",
    status: "Active",
    startDate: "2024-01-10",
    endDate: "2025-06-30",
    progress: 45,
    type: "Consultancy",
  },
  {
    id: "CNT003",
    title: "Karimenu II Equipment Supply",
    contractor: "Caterpillar Inc.",
    project: "Karimenu II Dam",
    value: "KES 500M",
    status: "Completed",
    startDate: "2020-06-01",
    endDate: "2021-12-31",
    progress: 100,
    type: "Supply",
  },
];

export default function ContractsPage() {
  const [contractList, setContractList] = useState(contracts);
  const [searchTerm, setSearchTerm] = useState("");
  // const { toast } = useToast()

  const handleContractAction = (action: string, contract: any) => {
    // toast({
    //   title: `${action} Contract`,
    //   description: `${action} action for ${contract.title}`,
    // })
  };

  const filteredContracts = contractList.filter(
    (contract) =>
      contract.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contract.contractor.toLowerCase().includes(searchTerm.toLowerCase()),
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
                  className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600"
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
              Contract Management
            </h1>
            <p className="text-gray-600">
              Manage project contracts and agreements
            </p>
          </div>

          {/* Search and Actions */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search contracts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Contract
            </Button>
          </div>

          {/* Contracts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredContracts.map((contract) => (
              <Card
                key={contract.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {contract.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {contract.contractor}
                      </p>
                    </div>
                    <Badge
                      variant={
                        contract.status === "Active"
                          ? "default"
                          : contract.status === "Completed"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {contract.status}
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Contract Value</p>
                        <p className="font-medium flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {contract.value}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Type</p>
                        <p className="font-medium">{contract.type}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Start Date</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(contract.startDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">End Date</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(contract.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">
                          {contract.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${contract.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <p className="text-xs text-gray-600 mb-1">
                        Related Project
                      </p>
                      <p className="text-sm font-medium">{contract.project}</p>
                    </div>

                    <div className="flex space-x-2 pt-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleContractAction("View", contract)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => handleContractAction("Edit", contract)}
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
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
