"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  FileText,
  Users,
  Settings,
  Home,
  FolderOpen,
  UserCheck,
  ClipboardList,
  BarChart3,
  X,
  Plus,
  Eye,
  Edit,
  Phone,
  Mail,
  Award,
  Briefcase,
} from "lucide-react"

const experts = [
  {
    id: "EXP001",
    name: "Dr. James Mwangi",
    role: "Project Engineer",
    department: "Technical Planning & Design",
    specialization: "Dam Engineering",
    experience: "15 years",
    email: "j.mwangi@nwhsa.go.ke",
    phone: "+254 712 345 678",
    status: "Active",
    currentProjects: ["Thwake Dam", "Karimenu II"],
    certifications: ["Professional Engineer", "Project Management"],
    education: "PhD Civil Engineering",
  },
  {
    id: "EXP002",
    name: "Prof. Sarah Kimani",
    role: "Hydrologist",
    department: "Hydrology Section",
    specialization: "Water Resources",
    experience: "20 years",
    email: "s.kimani@nwhsa.go.ke",
    phone: "+254 722 456 789",
    status: "Active",
    currentProjects: ["High Grand Falls", "Arror Dam"],
    certifications: ["Certified Hydrologist", "Water Resources Management"],
    education: "PhD Hydrology",
  },
  {
    id: "EXP003",
    name: "Eng. Peter Ochieng",
    role: "Geotechnical Engineer",
    department: "Hydrogeology Section",
    specialization: "Foundation Engineering",
    experience: "12 years",
    email: "p.ochieng@nwhsa.go.ke",
    phone: "+254 733 567 890",
    status: "Active",
    currentProjects: ["Karimenu II"],
    certifications: ["Geotechnical Engineering", "Soil Mechanics"],
    education: "MSc Geotechnical Engineering",
  },
  {
    id: "EXP004",
    name: "Dr. Mary Wanjiku",
    role: "Environmental Expert",
    department: "Environmental Section",
    specialization: "Environmental Impact Assessment",
    experience: "18 years",
    email: "m.wanjiku@nwhsa.go.ke",
    phone: "+254 744 678 901",
    status: "Active",
    currentProjects: ["Koru-Soin Dam"],
    certifications: ["Environmental Impact Assessment", "NEMA Licensed"],
    education: "PhD Environmental Science",
  },
  {
    id: "EXP005",
    name: "Eng. David Mutua",
    role: "Surveyor",
    department: "Survey Division",
    specialization: "Engineering Surveying",
    experience: "10 years",
    email: "d.mutua@nwhsa.go.ke",
    phone: "+254 755 789 012",
    status: "Active",
    currentProjects: ["Arror Dam", "Koru-Soin Dam"],
    certifications: ["Licensed Surveyor", "GIS Specialist"],
    education: "BSc Surveying",
  },
  {
    id: "EXP006",
    name: "Eng. Grace Akinyi",
    role: "Construction Manager",
    department: "Construction",
    specialization: "Project Management",
    experience: "14 years",
    email: "g.akinyi@nwhsa.go.ke",
    phone: "+254 766 890 123",
    status: "Available",
    currentProjects: [],
    certifications: ["PMP", "Construction Management"],
    education: "MSc Construction Management",
  },
]

export default function ExpertsPage() {
  const [selectedExpert, setSelectedExpert] = useState(experts[0])
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")

  const openModal = (modalType: string) => {
    setActiveModal(modalType)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const filteredExperts = experts.filter((expert) => {
    const matchesSearch =
      expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expert.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || expert.department === departmentFilter
    return matchesSearch && matchesDepartment
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <a href="/" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Home className="h-4 w-4" />
                  <span className="text-sm">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/projects" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Large Dam Projects</span>
                </a>
              </li>
              <li>
                <a href="/small-dams" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Small Dam Projects</span>
                </a>
              </li>
              <li>
                <a href="/experts" className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600">
                  <UserCheck className="h-4 w-4" />
                  <span className="text-sm">Expert Management</span>
                </a>
              </li>
              <li>
                <a href="/contracts" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <ClipboardList className="h-4 w-4" />
                  <span className="text-sm">Contract Management</span>
                </a>
              </li>
              <li>
                <a href="/documents" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Documents</span>
                </a>
              </li>
              <li>
                <a href="/reports" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-sm">Reports</span>
                </a>
              </li>
              <li>
                <a href="/settings" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Settings className="h-4 w-4" />
                  <span className="text-sm">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Expert Management</h1>
            <p className="text-gray-600">Manage technical experts and their project assignments</p>
          </div>

          {/* Filters and Search */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search experts by name or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-60">
                  <SelectValue placeholder="Filter by department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Technical Planning & Design">Technical Planning & Design</SelectItem>
                  <SelectItem value="Hydrology Section">Hydrology Section</SelectItem>
                  <SelectItem value="Hydrogeology Section">Hydrogeology Section</SelectItem>
                  <SelectItem value="Environmental Section">Environmental Section</SelectItem>
                  <SelectItem value="Survey Division">Survey Division</SelectItem>
                  <SelectItem value="Construction">Construction</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={() => openModal("newExpert")} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Expert
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Experts List */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-0">
                  <div className="p-4 border-b bg-gray-50">
                    <h2 className="font-semibold text-lg">Technical Experts</h2>
                    <p className="text-sm text-gray-600">Manage expert profiles and assignments</p>
                  </div>

                  <div className="space-y-4 p-4">
                    {filteredExperts.map((expert) => (
                      <div
                        key={expert.id}
                        className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                          selectedExpert.id === expert.id ? "border-blue-500 bg-blue-50" : "border-gray-200"
                        }`}
                        onClick={() => setSelectedExpert(expert)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                              <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{expert.name}</h3>
                              <p className="text-sm text-gray-600">{expert.role}</p>
                              <p className="text-xs text-gray-500">{expert.department}</p>
                            </div>
                          </div>
                          <Badge variant={expert.status === "Active" ? "default" : "secondary"}>{expert.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Experience</p>
                            <p className="font-medium">{expert.experience}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Specialization</p>
                            <p className="font-medium">{expert.specialization}</p>
                          </div>
                        </div>

                        <div className="mt-3">
                          <p className="text-xs text-gray-600 mb-1">Current Projects</p>
                          <div className="flex flex-wrap gap-1">
                            {expert.currentProjects.length > 0 ? (
                              expert.currentProjects.map((project, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {project}
                                </Badge>
                              ))
                            ) : (
                              <span className="text-xs text-gray-500">No active projects</span>
                            )}
                          </div>
                        </div>

                        <div className="flex space-x-2 mt-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Mail className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Expert Details */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg">{selectedExpert.name}</h3>
                    <p className="text-gray-600">{selectedExpert.role}</p>
                    <Badge variant={selectedExpert.status === "Active" ? "default" : "secondary"} className="mt-2">
                      {selectedExpert.status}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Professional Details
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Department:</span>
                          <span>{selectedExpert.department}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Experience:</span>
                          <span>{selectedExpert.experience}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Specialization:</span>
                          <span>{selectedExpert.specialization}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Education & Certifications
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="text-gray-600">Education:</span>
                          <p>{selectedExpert.education}</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Certifications:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {selectedExpert.certifications.map((cert, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3 text-gray-400" />
                          <span>{selectedExpert.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3 text-gray-400" />
                          <span>{selectedExpert.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Current Projects</h4>
                      <div className="space-y-1">
                        {selectedExpert.currentProjects.length > 0 ? (
                          selectedExpert.currentProjects.map((project, index) => (
                            <div key={index} className="text-sm p-2 bg-gray-50 rounded">
                              {project}
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No active projects</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2 pt-4">
                      <Button
                        onClick={() => openModal("assignProject")}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Assign to Project
                      </Button>
                      <Button onClick={() => openModal("expertSchedule")} variant="outline" className="w-full">
                        View Schedule
                      </Button>
                      <Button onClick={() => openModal("expertReports")} variant="outline" className="w-full">
                        Generate Reports
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>

      {/* Add New Expert Modal */}
      <Dialog open={activeModal === "newExpert"} onOpenChange={closeModal}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Add New Expert</DialogTitle>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">Add a new technical expert to the system</p>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="expert-name">Full Name</Label>
                <Input id="expert-name" placeholder="Enter full name" />
              </div>

              <div>
                <Label htmlFor="expert-role">Role/Position</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="project-engineer">Project Engineer</SelectItem>
                    <SelectItem value="hydrologist">Hydrologist</SelectItem>
                    <SelectItem value="geotechnical">Geotechnical Engineer</SelectItem>
                    <SelectItem value="environmental">Environmental Expert</SelectItem>
                    <SelectItem value="surveyor">Surveyor</SelectItem>
                    <SelectItem value="construction-manager">Construction Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="expert-department">Department</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technical Planning & Design">Technical Planning & Design</SelectItem>
                    <SelectItem value="Hydrology Section">Hydrology Section</SelectItem>
                    <SelectItem value="Hydrogeology Section">Hydrogeology Section</SelectItem>
                    <SelectItem value="Environmental Section">Environmental Section</SelectItem>
                    <SelectItem value="Survey Division">Survey Division</SelectItem>
                    <SelectItem value="Construction">Construction</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="expert-specialization">Specialization</Label>
                <Input id="expert-specialization" placeholder="Area of specialization" />
              </div>

              <div>
                <Label htmlFor="expert-experience">Years of Experience</Label>
                <Input id="expert-experience" type="number" placeholder="Enter years" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="expert-email">Email Address</Label>
                <Input id="expert-email" type="email" placeholder="email@nwhsa.go.ke" />
              </div>

              <div>
                <Label htmlFor="expert-phone">Phone Number</Label>
                <Input id="expert-phone" placeholder="+254 xxx xxx xxx" />
              </div>

              <div>
                <Label htmlFor="expert-education">Education</Label>
                <Input id="expert-education" placeholder="Highest qualification" />
              </div>

              <div>
                <Label htmlFor="expert-certifications">Certifications</Label>
                <Textarea id="expert-certifications" placeholder="List professional certifications..." rows={3} />
              </div>

              <div>
                <Label htmlFor="expert-status">Status</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Available">Available</SelectItem>
                    <SelectItem value="On Leave">On Leave</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="col-span-2 flex space-x-2 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Add Expert</Button>
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Assign to Project Modal */}
      <Dialog open={activeModal === "assignProject"} onOpenChange={closeModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Assign Expert to Project</DialogTitle>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">Assign {selectedExpert.name} to a project</p>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="assign-project">Select Project</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="thwake">Thwake Multipurpose Dam</SelectItem>
                  <SelectItem value="high-grand">High Grand Falls Dam</SelectItem>
                  <SelectItem value="karimenu">Karimenu II Dam</SelectItem>
                  <SelectItem value="koru-soin">Koru-Soin Multipurpose Dam</SelectItem>
                  <SelectItem value="arror">Arror Dam</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="assign-phase">Project Phase</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select phase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reconnaissance">Phase 1 - Reconnaissance</SelectItem>
                  <SelectItem value="feasibility">Phase 2 - Feasibility</SelectItem>
                  <SelectItem value="preliminary">Phase 3 - Preliminary Design</SelectItem>
                  <SelectItem value="final">Phase 4 - Final Design</SelectItem>
                  <SelectItem value="construction">Phase 5 - Construction</SelectItem>
                  <SelectItem value="commissioning">Phase 6 - Commissioning</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="assign-start">Start Date</Label>
                <Input id="assign-start" type="date" />
              </div>
              <div>
                <Label htmlFor="assign-end">End Date</Label>
                <Input id="assign-end" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="assign-role">Role in Project</Label>
              <Input id="assign-role" placeholder="e.g., Lead Engineer, Consultant" />
            </div>

            <div>
              <Label htmlFor="assign-responsibilities">Key Responsibilities</Label>
              <Textarea id="assign-responsibilities" placeholder="Describe main responsibilities..." rows={3} />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Assign Expert</Button>
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Expert Schedule Modal */}
      <Dialog open={activeModal === "expertSchedule"} onOpenChange={closeModal}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Expert Schedule - {selectedExpert.name}</DialogTitle>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">View and manage expert's project schedule</p>
          </DialogHeader>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Current Assignments</h4>
              <div className="space-y-3">
                {selectedExpert.currentProjects.map((project, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <div>
                      <p className="font-medium text-sm">{project}</p>
                      <p className="text-xs text-gray-600">Phase 4 - Final Design</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                ))}
                {selectedExpert.currentProjects.length === 0 && (
                  <p className="text-sm text-gray-500">No current assignments</p>
                )}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Upcoming Schedule</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Site Visit - Thwake Dam</span>
                  <span className="text-gray-600">June 15, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Design Review Meeting</span>
                  <span className="text-gray-600">June 18, 2024</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Progress Report Submission</span>
                  <span className="text-gray-600">June 30, 2024</span>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-3">Availability</h4>
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="text-center font-medium">Mon</div>
                <div className="text-center font-medium">Tue</div>
                <div className="text-center font-medium">Wed</div>
                <div className="text-center font-medium">Thu</div>
                <div className="text-center font-medium">Fri</div>
                <div className="text-center font-medium">Sat</div>
                <div className="text-center font-medium">Sun</div>

                {Array.from({ length: 7 }, (_, i) => (
                  <div
                    key={i}
                    className={`h-8 rounded text-center leading-8 ${
                      i < 5 ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {i < 5 ? "Free" : "Off"}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Schedule Meeting</Button>
              <Button variant="outline" onClick={closeModal}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Expert Reports Modal */}
      <Dialog open={activeModal === "expertReports"} onOpenChange={closeModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Expert Reports</DialogTitle>
              <Button variant="ghost" size="sm" onClick={closeModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600">Generate reports for {selectedExpert.name}</p>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <Label htmlFor="report-type">Report Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="performance">Performance Report</SelectItem>
                  <SelectItem value="project-summary">Project Summary</SelectItem>
                  <SelectItem value="time-allocation">Time Allocation Report</SelectItem>
                  <SelectItem value="certification">Certification Status</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="report-from">From Date</Label>
                <Input id="report-from" type="date" />
              </div>
              <div>
                <Label htmlFor="report-to">To Date</Label>
                <Input id="report-to" type="date" />
              </div>
            </div>

            <div>
              <Label htmlFor="report-format">Report Format</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="word">Word Document</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="report-notes">Additional Notes</Label>
              <Textarea id="report-notes" placeholder="Any specific requirements for the report..." rows={3} />
            </div>

            <div className="flex space-x-2 pt-4">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Generate Report</Button>
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
