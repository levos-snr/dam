"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Search, Upload } from "lucide-react"
import { toast } from "sonner"
import type { DamProject } from "@/lib/project-data"

// Real phases from the document for Large Dam Projects
const largeDamPhases = [
  {
    id: 1,
    name: "Pre-Feasibility Study",
    steps: [
      {
        id: 1,
        name: "Site Selection & Desktop Review",
        description:
          "Site selection based on water demand, topography and geology, and desktop review of existing hydrological, geological and environmental data. Stakeholders' consultations of the local communities and government agencies.",
        status: "completed" as const,
      },
      {
        id: 2,
        name: "Reconnaissance & Preliminary Surveys",
        description:
          "Field site visit that identify potential dam sites, spillway location and material sources, assess access logistics and environmental sensitivities. Perform rough topographic mapping and visual geological assessment.",
        status: "completed" as const,
      },
      {
        id: 3,
        name: "Engineering & Cost Estimation",
        description:
          "Conduct risk assessment alternative sites/configurations and rank options based on cost, risk and benefit. Prepare Pre-Feasibility Report for review and decision making.",
        status: "completed" as const,
      },
    ],
  },
  {
    id: 2,
    name: "Feasibility Study",
    steps: [
      {
        id: 4,
        name: "Inception Report",
        description:
          "Prepare inception report outlining the approach, methodology, work plan, and expected outputs of the study. Document outlines team composition, data requirements, risk assessment and stakeholder engagement plan.",
        status: "completed" as const,
      },
      {
        id: 5,
        name: "Detailed Technical Assessment",
        description:
          "Comprehensive technical, economic, environmental, and social assessments. Includes Environmental & Social Impact Assessment (ESIA) Report, Geotechnical & Hydrological Report, Engineering Drawings and 3D Models.",
        status: "completed" as const,
      },
      {
        id: 6,
        name: "Feasibility Report & Review",
        description:
          "Final Feasibility Study Report submitted to GMTPD for review. Document used for decision making to proceed to Preliminary Design Stage if project is deemed viable.",
        status: "completed" as const,
      },
    ],
  },
  {
    id: 3,
    name: "Preliminary Design",
    steps: [
      {
        id: 7,
        name: "Initial Engineering Concepts",
        description:
          "Developing initial engineering concepts, layouts, and technical specifications to refine the dam's configuration. Ensure selected dam type, dimensions, and materials align with site conditions.",
        status: "completed" as const,
      },
      {
        id: 8,
        name: "Geotechnical Investigation",
        description:
          "Detailed geotechnical investigation and foundation design. Site selection report and structural analysis reports. Updated ESIA & RAP Reports and regulatory approvals.",
        status: "current" as const,
      },
      {
        id: 9,
        name: "Preliminary Design Report",
        description:
          "Preliminary Design Report with engineering drawings, BOQ and cost estimates. Spillway design report and hydrological study report. Submissions to regulatory authorities for approvals.",
        status: "pending" as const,
      },
    ],
  },
  {
    id: 4,
    name: "Final Detailed Design",
    steps: [
      {
        id: 10,
        name: "Detailed Engineering Design",
        description:
          "Finalizing dimensions, materials, and construction methods. Preparing construction drawings, specifications, and bills of quantities (BOQ). Ensuring compliance with regulatory, environmental, and safety standards.",
        status: "pending" as const,
      },
      {
        id: 11,
        name: "Construction Documentation",
        description:
          "Final engineering design documents, construction drawings and specifications, hydraulic and hydrological design documents, geotechnical & geological data, environmental & social compliance documents.",
        status: "pending" as const,
      },
      {
        id: 12,
        name: "Tender Documentation",
        description:
          "Contractual & tender documents including bid documents with technical specifications for contractors and construction contract complying with FIDIC or other standard clauses.",
        status: "pending" as const,
      },
    ],
  },
]

// Real phases from the document for Small Dam Projects
const smallDamPhases = [
  {
    id: 1,
    name: "Feasibility Study",
    steps: [
      {
        id: 1,
        name: "Site Identification & Assessment",
        description:
          "Site identification and selection of potential dam sites based on water needs, topography, and hydrological data. Gathering primary data including existing maps, rainfall, river flow data.",
        status: "completed" as const,
      },
      {
        id: 2,
        name: "Technical Feasibility",
        description:
          "Topographic & Hydrological Surveys, Geotechnical Investigations including soil and rock sampling to assess foundation stability. Dam design options and storage capacity estimation.",
        status: "completed" as const,
      },
      {
        id: 3,
        name: "ESIA & Economic Analysis",
        description:
          "Environmental & Social Impact Assessment including biodiversity study and downstream effects evaluation. Economic & Financial Analysis with cost estimation and benefit analysis.",
        status: "completed" as const,
      },
    ],
  },
  {
    id: 2,
    name: "Final Design",
    steps: [
      {
        id: 4,
        name: "Detailed Engineering Analysis",
        description:
          "Detailed engineering analysis refining all structural calculations and hydraulic modeling. Geotechnical investigations finalizing foundation requirements and material specifications.",
        status: "current" as const,
      },
      {
        id: 5,
        name: "Construction Documentation",
        description:
          "Final Design Report with executive summary, design basis and criteria, hydrological and hydraulic analyses. Construction drawings and specifications with complete set of technical drawings.",
        status: "pending" as const,
      },
      {
        id: 6,
        name: "Tender & Contract Documents",
        description:
          "Tender and Contract Documents including Bill of Quantities (BOQ), Cost Estimate Report, Bid Documents for contractor selection and draft contract preparation.",
        status: "pending" as const,
      },
    ],
  },
]

interface ProjectPhasesModalProps {
  isOpen: boolean
  onClose: () => void
  project: DamProject
  mode: "view" | "edit"
}

export function ProjectPhasesModal({ isOpen, onClose, project, mode }: ProjectPhasesModalProps) {
  // Determine if this is a large or small dam project based on project data
  const isLargeDam = project.technicalSpecs?.height ? Number.parseInt(project.technicalSpecs.height) >= 15 : true
  const phases = isLargeDam ? largeDamPhases : smallDamPhases

  const [selectedPhase, setSelectedPhase] = useState(phases[0])
  const [selectedStep, setSelectedStep] = useState(phases[0].steps[0])
  const [documents, setDocuments] = useState([
    { id: 1, name: "DESIGN REPORT", date: "12-05-2023" },
    { id: 2, name: "FEASIBILITY STUDY", date: "15-03-2023" },
    { id: 3, name: "ESIA REPORT", date: "20-04-2023" },
  ])

  const handlePhaseSelect = (phase: any) => {
    setSelectedPhase(phase)
    setSelectedStep(phase.steps[0])
  }

  const handleStepChange = (direction: "next" | "previous") => {
    const allSteps = phases.flatMap((phase) => phase.steps)
    const currentStepIndex = allSteps.findIndex((step) => step.id === selectedStep.id)

    if (direction === "next" && currentStepIndex < allSteps.length - 1) {
      const nextStep = allSteps[currentStepIndex + 1]
      setSelectedStep(nextStep)
      // Update selected phase if needed
      const nextPhase = phases.find((phase) => phase.steps.some((step) => step.id === nextStep.id))
      if (nextPhase && nextPhase.id !== selectedPhase.id) {
        setSelectedPhase(nextPhase)
      }
    } else if (direction === "previous" && currentStepIndex > 0) {
      const prevStep = allSteps[currentStepIndex - 1]
      setSelectedStep(prevStep)
      // Update selected phase if needed
      const prevPhase = phases.find((phase) => phase.steps.some((step) => step.id === prevStep.id))
      if (prevPhase && prevPhase.id !== selectedPhase.id) {
        setSelectedPhase(prevPhase)
      }
    }
  }

  const handleUploadDocument = () => {
    toast.success("Document uploaded successfully")
    setDocuments([
      ...documents,
      { id: documents.length + 1, name: "NEW DOCUMENT", date: new Date().toLocaleDateString() },
    ])
  }

  const getCurrentStepNumber = () => {
    const allSteps = phases.flatMap((phase) => phase.steps)
    return allSteps.findIndex((step) => step.id === selectedStep.id) + 1
  }

  const getTotalSteps = () => {
    return phases.flatMap((phase) => phase.steps).length
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="h-12 bg-blue-600 flex items-center justify-between px-6 text-white">
        <div className="text-sm">
          {isLargeDam ? "Large Dam" : "Small Dam"} - Phase {selectedPhase.id} Step {getCurrentStepNumber()}
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm">AB</span>
          </div>
          <div className="text-sm">
            <div>Admin Boss</div>
            <div className="text-xs opacity-80">Administrator</div>
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-blue-700 h-8 px-2 ml-4" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-48px)]">
        {/* Sidebar */}
        <div className="w-64 border-r bg-white flex-shrink-0">
          <div className="p-4 border-b">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <h1 className="font-semibold text-sm">National Water Harvesting</h1>
                <p className="text-xs text-gray-600">& Storage Authority</p>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h2 className="font-semibold text-sm mb-3">Dashboard</h2>
            <div className="text-xs text-blue-600 mb-4">
              <span>Home</span> / <span>View Details</span>
            </div>

            <div className="border rounded-md overflow-hidden">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className={`border-b last:border-b-0 p-3 text-sm cursor-pointer ${
                    selectedPhase.id === phase.id ? "bg-blue-50 text-blue-600" : "hover:bg-gray-50"
                  }`}
                  onClick={() => handlePhaseSelect(phase)}
                >
                  {phase.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-50 overflow-y-auto">
          <div className="p-4">
            <div className="bg-white rounded-md shadow-sm p-6">
              {/* Step Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  {Array.from({ length: getTotalSteps() }, (_, i) => i + 1)
                    .slice(0, 5)
                    .map((step) => {
                      const currentStepNum = getCurrentStepNumber()
                      const isActive = currentStepNum === step
                      const isCompleted = currentStepNum > step

                      return (
                        <div key={step} className="flex items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              isActive
                                ? "bg-blue-600 text-white"
                                : isCompleted
                                  ? "bg-green-600 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {step}
                          </div>
                          {step < 5 && (
                            <div className={`h-1 w-24 ${isCompleted ? "bg-green-600" : "bg-gray-200"}`}></div>
                          )}
                        </div>
                      )
                    })}
                </div>
              </div>

              {/* Step Content */}
              <div>
                <h2 className="text-lg font-semibold mb-2">{selectedStep.name}</h2>
                <div className="bg-blue-50 border border-blue-100 rounded-md p-4 mb-6">
                  <h3 className="font-medium text-blue-800 mb-2">Details For This Stage</h3>
                  <p className="text-sm text-gray-700">{selectedStep.description}</p>
                </div>

                {/* Document Upload Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                      <Input placeholder="Search..." className="pl-10" />
                    </div>
                    <Button onClick={handleUploadDocument} className="bg-blue-600 hover:bg-blue-700">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Document
                    </Button>
                  </div>

                  {/* Documents Table */}
                  <div className="border rounded-md overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 text-left">
                        <tr>
                          <th className="px-4 py-3 text-sm font-medium text-gray-600">DOCUMENT</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-600">DATE</th>
                          <th className="px-4 py-3 text-sm font-medium text-gray-600">ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {documents.map((doc) => (
                          <tr key={doc.id} className="border-t">
                            <td className="px-4 py-3 text-sm">{doc.name}</td>
                            <td className="px-4 py-3 text-sm">{doc.date}</td>
                            <td className="px-4 py-3 text-sm">
                              <Button variant="link" size="sm" className="text-blue-600 p-0 h-auto">
                                VIEW
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => handleStepChange("previous")}
                    disabled={getCurrentStepNumber() === 1}
                  >
                    PREVIOUS
                  </Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => handleStepChange("next")}
                    disabled={getCurrentStepNumber() === getTotalSteps()}
                  >
                    NEXT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
