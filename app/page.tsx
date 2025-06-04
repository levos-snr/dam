"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Users, Settings, Home, FolderOpen, BarChart3, TrendingUp, MapPin, Activity } from "lucide-react"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

// Mock data for charts
const monthlyData = [
  { month: "Jan", completed: 45, ongoing: 23 },
  { month: "Feb", completed: 52, ongoing: 28 },
  { month: "Mar", completed: 48, ongoing: 31 },
  { month: "Apr", completed: 61, ongoing: 35 },
  { month: "May", completed: 55, ongoing: 29 },
  { month: "Jun", completed: 67, ongoing: 42 },
  { month: "Jul", completed: 71, ongoing: 38 },
  { month: "Aug", completed: 58, ongoing: 33 },
  { month: "Sep", completed: 63, ongoing: 41 },
  { month: "Oct", completed: 69, ongoing: 37 },
  { month: "Nov", completed: 74, ongoing: 44 },
  { month: "Dec", completed: 78, ongoing: 39 },
]

const countyData = [
  { county: "Kiambu", projects: 7 },
  { county: "Bungoma", projects: 5 },
  { county: "Busia", projects: 11 },
  { county: "Machakos", projects: 25 },
  { county: "Garissa", projects: 100 },
  { county: "Mombasa", projects: 12 },
]

const pieData = [
  { name: "Large Dams", value: 35, color: "#3B82F6" },
  { name: "Medium Dams", value: 25, color: "#10B981" },
  { name: "Small Dams", value: 40, color: "#F59E0B" },
]

const constructionStages = [
  { stage: "Survey", percentage: "5%", projects: "30 Projects" },
  { stage: "Hydrology", percentage: "10%", projects: "50 Projects" },
  { stage: "Hydrogeology", percentage: "15%", projects: "17 Projects" },
  { stage: "Environment", percentage: "20%", projects: "63 Projects" },
  { stage: "Design", percentage: "25%", projects: "200 Projects" },
  { stage: "Construction", percentage: "25%", projects: "350 Projects" },
]

export default function Dashboard() {
  const [selectedCounty, setSelectedCounty] = useState("all")
  const [selectedSubCounty, setSelectedSubCounty] = useState("all")
  const [selectedWard, setSelectedWard] = useState("all")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white h-16 flex items-center px-6 shadow-sm">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">N</span>
          </div>
          <div>
            <h1 className="font-semibold">National Dashboard</h1>
            <p className="text-xs text-blue-100">Water Harvesting & Storage Authority</p>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-sm">National Dashboard</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <span className="text-sm">Administrator</span>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Fixed Sidebar */}
        <aside className="w-64 bg-white shadow-sm flex-shrink-0 overflow-hidden">
          <nav className="p-4 h-full overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <Link href="/" className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600">
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/survey" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Survey Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/public" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Activity className="h-4 w-4" />
                  <span className="text-sm">Public Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Project Management</span>
                </Link>
              </li>
              <li>
                <Link href="/gis" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">GIS Management</span>
                </Link>
              </li>
              <li>
                <Link href="/site-management" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Site Management</span>
                </Link>
              </li>
              <li>
                <Link href="/reports" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Reports</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Filters Section */}
            <div className="mb-6">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
                  <Select value={selectedCounty} onValueChange={setSelectedCounty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Counties</SelectItem>
                      <SelectItem value="kiambu">Kiambu</SelectItem>
                      <SelectItem value="makueni">Makueni</SelectItem>
                      <SelectItem value="tana-river">Tana River</SelectItem>
                      <SelectItem value="kisumu">Kisumu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sub-County</label>
                  <Select value={selectedSubCounty} onValueChange={setSelectedSubCounty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sub-Counties</SelectItem>
                      <SelectItem value="gatundu">Gatundu North</SelectItem>
                      <SelectItem value="kibwezi">Kibwezi East</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ward</label>
                  <Select value={selectedWard} onValueChange={setSelectedWard}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Wards</SelectItem>
                      <SelectItem value="ward1">Ward 1</SelectItem>
                      <SelectItem value="ward2">Ward 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dam Site</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sites</SelectItem>
                      <SelectItem value="thwake">Thwake</SelectItem>
                      <SelectItem value="karimenu">Karimenu II</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dam Status</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Construction Stage</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Stages</SelectItem>
                      <SelectItem value="survey">Survey</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">All Projects</p>
                      <p className="text-3xl font-bold text-gray-900">4000</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FolderOpen className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ongoing Projects</p>
                      <p className="text-3xl font-bold text-gray-900">800</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Activity className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Completed Projects</p>
                      <p className="text-3xl font-bold text-gray-900">3200</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Number of completed projects per month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Bar dataKey="completed" fill="#06B6D4" />
                        <Bar dataKey="ongoing" fill="#3B82F6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mt-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-500 rounded"></div>
                      <span className="text-sm">Completed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span className="text-sm">Ongoing</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Construction Stage Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Construction stage Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {constructionStages.map((stage, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{stage.stage}</span>
                            <span className="text-sm text-gray-600">{stage.percentage}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{ width: stage.percentage }}></div>
                          </div>
                        </div>
                        <div className="ml-4 text-right">
                          <span className="text-sm text-gray-600">{stage.projects}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* County Distribution Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Projects distribution per county</CardTitle>
                    <Select defaultValue="all">
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="top10">Top 10</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 border-b pb-2">
                      <span>COUNTY</span>
                      <span>NUMBER OF PROJECTS</span>
                    </div>
                    {countyData.map((item, index) => (
                      <div key={index} className="grid grid-cols-2 gap-4 text-sm py-2 border-b border-gray-100">
                        <span className="font-medium">{item.county}</span>
                        <span className="text-gray-600">{item.projects}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project size Distribution Per County</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center space-x-6 mt-4">
                    {pieData.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
