"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  X,
  Search,
  Upload,
  FileText,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  ChevronRight,
  ChevronDown,
  Eye,
  Download,
} from "lucide-react";
import { toast } from "sonner";
import type { DamProject } from "@/lib/project-data";

// Real phases from the NWHSA document for Large Dam Projects
const largeDamPhases = [
  {
    id: 1,
    name: "Pre-Feasibility Study",
    duration: "2-3 months",
    budget: "$50,000",
    experts: ["Project Engineer", "Hydrologist", "Environmental Expert"],
    deliverables: [
      "Site Selection Report",
      "Desktop Review",
      "Preliminary Scoping Report",
    ],
    risks: ["Site access limitations", "Inadequate baseline data"],
    milestones: [
      {
        id: 1,
        name: "Site Selection Complete",
        date: "2024-02-15",
        status: "completed",
        description: "Potential dam sites identified and assessed",
      },
      {
        id: 2,
        name: "Desktop Review",
        date: "2024-02-28",
        status: "completed",
        description: "Existing data reviewed and compiled",
      },
    ],
    steps: [
      {
        id: 1,
        name: "Site Selection & Desktop Review",
        description:
          "Site selection based on water demand, topography and geology, and desktop review of existing hydrological, geological and environmental data. Stakeholders' consultations of the local communities and government agencies.",
        status: "completed" as const,
        progress: 100,
        duration: "3 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-01-15",
        endDate: "2024-02-05",
        deliverables: [
          "Site Selection Report",
          "Stakeholder Consultation Records",
        ],
      },
      {
        id: 2,
        name: "Reconnaissance & Preliminary Surveys",
        description:
          "Field site visit that identify potential dam sites, spillway location and material sources, assess access logistics and environmental sensitivities. Perform rough topographic mapping and visual geological assessment.",
        status: "completed" as const,
        progress: 100,
        duration: "2 weeks",
        assignedExpert: "Survey Expert",
        startDate: "2024-02-06",
        endDate: "2024-02-19",
        deliverables: ["Field Survey Report", "Topographic Maps"],
      },
      {
        id: 3,
        name: "Engineering & Cost Estimation",
        description:
          "Conduct risk assessment alternative sites/configurations and rank options based on cost, risk and benefit. Prepare Pre-Feasibility Report for review and decision making.",
        status: "completed" as const,
        progress: 100,
        duration: "2 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-02-20",
        endDate: "2024-03-05",
        deliverables: ["Pre-Feasibility Report", "Cost Estimates"],
      },
    ],
    startDate: "2024-01-15",
    endDate: "2024-03-05",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 2,
    name: "Feasibility Study",
    duration: "4-6 months",
    budget: "$200,000",
    experts: [
      "Project Engineer",
      "Hydrologist",
      "Geotechnical Engineer",
      "Environmental Expert",
    ],
    deliverables: [
      "Feasibility Report",
      "ESIA Report",
      "Engineering Drawings",
      "3D Models",
    ],
    risks: ["Environmental compliance delays", "Geotechnical challenges"],
    milestones: [
      {
        id: 3,
        name: "Inception Report Approved",
        date: "2024-03-20",
        status: "completed",
        description: "Project approach and methodology finalized",
      },
      {
        id: 4,
        name: "Technical Assessment Complete",
        date: "2024-05-15",
        status: "completed",
        description: "Comprehensive assessments completed",
      },
    ],
    steps: [
      {
        id: 4,
        name: "Inception Report",
        description:
          "Prepare inception report outlining the approach, methodology, work plan, and expected outputs of the study. Document outlines team composition, data requirements, risk assessment and stakeholder engagement plan.",
        status: "completed" as const,
        progress: 100,
        duration: "2 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-03-06",
        endDate: "2024-03-19",
        deliverables: ["Inception Report", "Work Plan"],
      },
      {
        id: 5,
        name: "Detailed Technical Assessment",
        description:
          "Comprehensive technical, economic, environmental, and social assessments. Includes Environmental & Social Impact Assessment (ESIA) Report, Geotechnical & Hydrological Report, Engineering Drawings and 3D Models.",
        status: "completed" as const,
        progress: 100,
        duration: "8 weeks",
        assignedExpert: "Multi-disciplinary Team",
        startDate: "2024-03-20",
        endDate: "2024-05-14",
        deliverables: [
          "ESIA Report",
          "Geotechnical Report",
          "Engineering Drawings",
        ],
      },
      {
        id: 6,
        name: "Feasibility Report & Review",
        description:
          "Final Feasibility Study Report submitted to GMTPD for review. Document used for decision making to proceed to Preliminary Design Stage if project is deemed viable.",
        status: "completed" as const,
        progress: 100,
        duration: "3 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-05-15",
        endDate: "2024-06-05",
        deliverables: ["Final Feasibility Report", "Review Comments"],
      },
    ],
    startDate: "2024-03-06",
    endDate: "2024-06-05",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 3,
    name: "Preliminary Design",
    duration: "3-4 months",
    budget: "$150,000",
    experts: [
      "Project Engineer",
      "Structural Engineer",
      "Geotechnical Engineer",
    ],
    deliverables: [
      "Preliminary Design Report",
      "Engineering Drawings",
      "BOQ",
      "Updated ESIA",
    ],
    risks: ["Foundation design challenges", "Regulatory approval delays"],
    milestones: [
      {
        id: 5,
        name: "Engineering Concepts Finalized",
        date: "2024-07-15",
        status: "completed",
        description: "Initial engineering concepts and layouts completed",
      },
      {
        id: 6,
        name: "Geotechnical Investigation",
        date: "2024-08-30",
        status: "current",
        description: "Detailed foundation investigation ongoing",
      },
    ],
    steps: [
      {
        id: 7,
        name: "Initial Engineering Concepts",
        description:
          "Developing initial engineering concepts, layouts, and technical specifications to refine the dam's configuration. Ensure selected dam type, dimensions, and materials align with site conditions.",
        status: "completed" as const,
        progress: 100,
        duration: "4 weeks",
        assignedExpert: "Structural Engineer",
        startDate: "2024-06-06",
        endDate: "2024-07-03",
        deliverables: ["Engineering Concepts", "Technical Specifications"],
      },
      {
        id: 8,
        name: "Geotechnical Investigation",
        description:
          "Detailed geotechnical investigation and foundation design. Site selection report and structural analysis reports. Updated ESIA & RAP Reports and regulatory approvals.",
        status: "current" as const,
        progress: 75,
        duration: "6 weeks",
        assignedExpert: "Geotechnical Engineer",
        startDate: "2024-07-04",
        endDate: "2024-08-14",
        deliverables: [
          "Geotechnical Report",
          "Foundation Design",
          "Structural Analysis",
        ],
      },
      {
        id: 9,
        name: "Preliminary Design Report",
        description:
          "Preliminary Design Report with engineering drawings, BOQ and cost estimates. Spillway design report and hydrological study report. Submissions to regulatory authorities for approvals.",
        status: "pending" as const,
        progress: 0,
        duration: "4 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-08-15",
        endDate: "2024-09-11",
        deliverables: [
          "Preliminary Design Report",
          "BOQ",
          "Regulatory Submissions",
        ],
      },
    ],
    startDate: "2024-06-06",
    endDate: "2024-09-11",
    status: "current" as const,
    progress: 65,
  },
  {
    id: 4,
    name: "Final Detailed Design",
    duration: "4-6 months",
    budget: "$300,000",
    experts: [
      "Project Engineer",
      "Structural Engineer",
      "M&E Engineer",
      "Environmental Expert",
    ],
    deliverables: [
      "Final Design Report",
      "Construction Drawings",
      "Tender Documents",
      "Contract Documents",
    ],
    risks: ["Design complexity", "Contractor availability"],
    milestones: [
      {
        id: 7,
        name: "Detailed Engineering Complete",
        date: "2024-11-15",
        status: "pending",
        description: "Final engineering design completed",
      },
      {
        id: 8,
        name: "Tender Documents Ready",
        date: "2024-12-30",
        status: "pending",
        description: "All tender documentation prepared",
      },
    ],
    steps: [
      {
        id: 10,
        name: "Detailed Engineering Design",
        description:
          "Finalizing dimensions, materials, and construction methods. Preparing construction drawings, specifications, and bills of quantities (BOQ). Ensuring compliance with regulatory, environmental, and safety standards.",
        status: "pending" as const,
        progress: 0,
        duration: "8 weeks",
        assignedExpert: "Structural Engineer",
        startDate: "2024-09-12",
        endDate: "2024-11-06",
        deliverables: [
          "Construction Drawings",
          "Technical Specifications",
          "BOQ",
        ],
      },
      {
        id: 11,
        name: "Construction Documentation",
        description:
          "Final engineering design documents, construction drawings and specifications, hydraulic and hydrological design documents, geotechnical & geological data, environmental & social compliance documents.",
        status: "pending" as const,
        progress: 0,
        duration: "4 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-11-07",
        endDate: "2024-12-04",
        deliverables: [
          "Construction Documents",
          "Compliance Documents",
          "As-Built Drawings",
        ],
      },
      {
        id: 12,
        name: "Tender Documentation",
        description:
          "Contractual & tender documents including bid documents with technical specifications for contractors and construction contract complying with FIDIC or other standard clauses.",
        status: "pending" as const,
        progress: 0,
        duration: "3 weeks",
        assignedExpert: "Legal & Procurement Team",
        startDate: "2024-12-05",
        endDate: "2024-12-25",
        deliverables: [
          "Tender Documents",
          "Contract Documents",
          "Bid Specifications",
        ],
      },
    ],
    startDate: "2024-09-12",
    endDate: "2024-12-25",
    status: "pending" as const,
    progress: 0,
  },
];

// Real phases from the NWHSA document for Small Dam Projects
const smallDamPhases = [
  {
    id: 1,
    name: "Feasibility Study",
    duration: "2-3 months",
    budget: "$30,000",
    experts: ["Project Engineer", "Surveyor", "Environmental Expert"],
    deliverables: ["Feasibility Report", "ESIA Report", "Site Survey"],
    risks: ["Land ownership issues", "Environmental constraints"],
    milestones: [
      {
        id: 1,
        name: "Site Assessment Complete",
        date: "2024-02-15",
        status: "completed",
        description: "Site identification and assessment completed",
      },
      {
        id: 2,
        name: "Technical Feasibility",
        date: "2024-03-15",
        status: "completed",
        description: "Technical feasibility assessment completed",
      },
    ],
    steps: [
      {
        id: 1,
        name: "Site Identification & Assessment",
        description:
          "Site identification and selection of potential dam sites based on water needs, topography, and hydrological data. Gathering primary data including existing maps, rainfall, river flow data.",
        status: "completed" as const,
        progress: 100,
        duration: "3 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-01-15",
        endDate: "2024-02-05",
        deliverables: ["Site Assessment Report", "Hydrological Data"],
      },
      {
        id: 2,
        name: "Technical Feasibility",
        description:
          "Topographic & Hydrological Surveys, Geotechnical Investigations including soil and rock sampling to assess foundation stability. Dam design options and storage capacity estimation.",
        status: "completed" as const,
        progress: 100,
        duration: "4 weeks",
        assignedExpert: "Survey Expert",
        startDate: "2024-02-06",
        endDate: "2024-03-05",
        deliverables: [
          "Topographic Survey",
          "Geotechnical Report",
          "Design Options",
        ],
      },
      {
        id: 3,
        name: "ESIA & Economic Analysis",
        description:
          "Environmental & Social Impact Assessment including biodiversity study and downstream effects evaluation. Economic & Financial Analysis with cost estimation and benefit analysis.",
        status: "completed" as const,
        progress: 100,
        duration: "3 weeks",
        assignedExpert: "Environmental Expert",
        startDate: "2024-03-06",
        endDate: "2024-03-26",
        deliverables: [
          "ESIA Report",
          "Economic Analysis",
          "Cost-Benefit Analysis",
        ],
      },
    ],
    startDate: "2024-01-15",
    endDate: "2024-03-26",
    status: "completed" as const,
    progress: 100,
  },
  {
    id: 2,
    name: "Final Design",
    duration: "2-3 months",
    budget: "$80,000",
    experts: [
      "Project Engineer",
      "Structural Engineer",
      "Environmental Expert",
    ],
    deliverables: [
      "Final Design Report",
      "Construction Drawings",
      "Tender Documents",
    ],
    risks: ["Design complexity", "Material availability"],
    milestones: [
      {
        id: 3,
        name: "Engineering Analysis Complete",
        date: "2024-05-15",
        status: "current",
        description: "Detailed engineering analysis completed",
      },
      {
        id: 4,
        name: "Construction Documents Ready",
        date: "2024-06-30",
        status: "pending",
        description: "All construction documentation prepared",
      },
    ],
    steps: [
      {
        id: 4,
        name: "Detailed Engineering Analysis",
        description:
          "Detailed engineering analysis refining all structural calculations and hydraulic modeling. Geotechnical investigations finalizing foundation requirements and material specifications.",
        status: "current" as const,
        progress: 60,
        duration: "4 weeks",
        assignedExpert: "Structural Engineer",
        startDate: "2024-03-27",
        endDate: "2024-04-23",
        deliverables: [
          "Structural Calculations",
          "Hydraulic Models",
          "Material Specifications",
        ],
      },
      {
        id: 5,
        name: "Construction Documentation",
        description:
          "Final Design Report with executive summary, design basis and criteria, hydrological and hydraulic analyses. Construction drawings and specifications with complete set of technical drawings.",
        status: "pending" as const,
        progress: 0,
        duration: "3 weeks",
        assignedExpert: "Project Engineer",
        startDate: "2024-04-24",
        endDate: "2024-05-14",
        deliverables: [
          "Final Design Report",
          "Construction Drawings",
          "Technical Specifications",
        ],
      },
      {
        id: 6,
        name: "Tender & Contract Documents",
        description:
          "Tender and Contract Documents including Bill of Quantities (BOQ), Cost Estimate Report, Bid Documents for contractor selection and draft contract preparation.",
        status: "pending" as const,
        progress: 0,
        duration: "2 weeks",
        assignedExpert: "Procurement Team",
        startDate: "2024-05-15",
        endDate: "2024-05-28",
        deliverables: ["Tender Documents", "BOQ", "Contract Documents"],
      },
    ],
    startDate: "2024-03-27",
    endDate: "2024-05-28",
    status: "current" as const,
    progress: 35,
  },
];

interface ProjectPhasesModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: DamProject;
  mode: "view" | "edit";
}

export function ProjectPhasesModal({
  isOpen,
  onClose,
  project,
  mode,
}: ProjectPhasesModalProps) {
  // Determine if this is a large or small dam project based on project data
  const isLargeDam = project.technicalSpecs?.height
    ? Number.parseInt(project.technicalSpecs.height) >= 15
    : true;
  const phases = isLargeDam ? largeDamPhases : smallDamPhases;

  const [selectedPhase, setSelectedPhase] = useState(phases[0]);
  const [selectedStep, setSelectedStep] = useState(phases[0].steps[0]);
  const [expandedSteps, setExpandedSteps] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "DESIGN REPORT",
      date: "12-05-2023",
      type: "PDF",
      size: "2.4 MB",
      status: "approved",
    },
    {
      id: 2,
      name: "FEASIBILITY STUDY",
      date: "15-03-2023",
      type: "PDF",
      size: "5.1 MB",
      status: "approved",
    },
    {
      id: 3,
      name: "ESIA REPORT",
      date: "20-04-2023",
      type: "PDF",
      size: "3.8 MB",
      status: "under_review",
    },
    {
      id: 4,
      name: "GEOTECHNICAL REPORT",
      date: "10-04-2023",
      type: "PDF",
      size: "4.2 MB",
      status: "approved",
    },
    {
      id: 5,
      name: "HYDROLOGICAL STUDY",
      date: "25-03-2023",
      type: "PDF",
      size: "3.1 MB",
      status: "approved",
    },
  ]);

  const toggleStepExpansion = (stepId: number) => {
    setExpandedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId],
    );
  };

  const handlePhaseSelect = (phase: any) => {
    setSelectedPhase(phase);
    setSelectedStep(phase.steps[0]);
  };

  const handleStepSelect = (step: any) => {
    setSelectedStep(step);
    const stepPhase = phases.find((phase) =>
      phase.steps.some((s) => s.id === step.id),
    );
    if (stepPhase && stepPhase.id !== selectedPhase.id) {
      setSelectedPhase(stepPhase);
    }
  };

  const handleUploadDocument = () => {
    toast.success("Document uploaded successfully");
    setDocuments([
      ...documents,
      {
        id: documents.length + 1,
        name: "NEW DOCUMENT",
        date: new Date().toLocaleDateString(),
        type: "PDF",
        size: "1.2 MB",
        status: "pending",
      },
    ]);
  };

  const getCurrentStepNumber = () => {
    const allSteps = phases.flatMap((phase) => phase.steps);
    return allSteps.findIndex((step) => step.id === selectedStep.id) + 1;
  };

  const getTotalSteps = () => {
    return phases.flatMap((phase) => phase.steps).length;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "current":
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <AlertCircle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getDocumentStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge variant="default" className="bg-green-100 text-green-800">
            Approved
          </Badge>
        );
      case "under_review":
        return (
          <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
            Under Review
          </Badge>
        );
      case "pending":
        return (
          <Badge variant="outline" className="bg-gray-100 text-gray-800">
            Pending
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header - Enhanced from all designs */}
      <div className="h-16 bg-blue-600 flex items-center justify-between px-6 text-white border-b">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold">N</span>
          </div>
          <div>
            <h1 className="font-semibold">
              National Water Harvesting & Storage Authority
            </h1>
            <p className="text-xs text-blue-100">
              Project Management System -{" "}
              {isLargeDam ? "Large Dam" : "Small Dam"} Project
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <div className="text-sm font-medium">Admin Boss</div>
            <div className="text-xs text-blue-100">Administrator</div>
          </div>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">AB</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-blue-700 h-8 px-2 ml-4"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left Sidebar - Enhanced with project info and navigation */}
        <div className="w-80 border-r bg-gray-50 flex-shrink-0 overflow-y-auto">
          <div className="p-6">
            {/* Project Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {project.name}
              </h2>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <MapPin className="h-4 w-4 mr-2" />
                {project.location}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                Started: March 2023
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <DollarSign className="h-4 w-4 mr-2" />
                Budget: {project.totalBudget}
              </div>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-blue-600">
                  {project.overallProgress}%
                </div>
                <div className="text-sm text-gray-600">Overall Progress</div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-green-600">
                  {phases.length}
                </div>
                <div className="text-sm text-gray-600">Total Phases</div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-orange-600">
                  {getTotalSteps()}
                </div>
                <div className="text-sm text-gray-600">Total Steps</div>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="text-2xl font-bold text-purple-600">
                  {documents.length}
                </div>
                <div className="text-sm text-gray-600">Documents</div>
              </div>
            </div>

            {/* Phase Navigation */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                Project Phases
              </h3>
              <div className="space-y-2">
                {phases.map((phase) => (
                  <div
                    key={phase.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedPhase.id === phase.id
                        ? "bg-blue-100 border-blue-300 border-2"
                        : "bg-white border hover:bg-gray-50"
                    }`}
                    onClick={() => handlePhaseSelect(phase)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            selectedPhase.id === phase.id
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {phase.id}
                        </div>
                        <div>
                          <div className="font-medium text-sm">
                            {phase.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {phase.steps.length} steps • {phase.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">
                          {phase.progress}%
                        </div>
                        <div className="w-12 bg-gray-200 rounded-full h-1 mt-1">
                          <div
                            className="bg-blue-600 h-1 rounded-full"
                            style={{ width: `${phase.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps for Selected Phase */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Phase Steps</h3>
              <div className="space-y-2">
                {selectedPhase.steps.map((step) => (
                  <div
                    key={step.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedStep.id === step.id
                        ? "bg-blue-50 border-blue-200 border-2"
                        : "bg-white border hover:bg-gray-50"
                    }`}
                    onClick={() => handleStepSelect(step)}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          step.status === "completed"
                            ? "bg-green-500 text-white"
                            : step.status === "current"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {step.status === "completed" ? "✓" : step.id}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{step.name}</div>
                        <div className="flex items-center justify-between">
                          <div
                            className={`text-xs capitalize ${
                              step.status === "completed"
                                ? "text-green-600"
                                : step.status === "current"
                                  ? "text-blue-600"
                                  : "text-gray-500"
                            }`}
                          >
                            {step.status}
                          </div>
                          <div className="text-xs text-gray-500">
                            {step.progress}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area - Enhanced with tabs and comprehensive information */}
        <div className="flex-1 bg-white overflow-hidden">
          <div className="h-full flex flex-col">
            {/* Phase Header */}
            <div className="px-8 py-6 border-b bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {selectedPhase.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Phase {selectedPhase.id} of {phases.length} •{" "}
                    {selectedPhase.duration} • Budget: {selectedPhase.budget}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={
                      selectedPhase.status === "completed"
                        ? "default"
                        : selectedPhase.status === "current"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-sm px-4 py-2"
                  >
                    {selectedPhase.status === "completed"
                      ? "Completed"
                      : selectedPhase.status === "current"
                        ? "In Progress"
                        : "Pending"}
                  </Badge>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Phase Progress</span>
                  <span>{selectedPhase.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${selectedPhase.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Content Area with Tabs */}
            <div className="flex-1 overflow-y-auto">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full h-full"
              >
                <div className="px-8 py-4 border-b">
                  <TabsList className="grid w-full max-w-lg grid-cols-4">
                    <TabsTrigger value="overview" className="text-sm">
                      Overview
                    </TabsTrigger>
                    <TabsTrigger value="steps" className="text-sm">
                      Steps & Process
                    </TabsTrigger>
                    <TabsTrigger value="documents" className="text-sm">
                      Documents
                    </TabsTrigger>
                    <TabsTrigger value="milestones" className="text-sm">
                      Milestones
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="p-8">
                  <TabsContent value="overview" className="mt-0 space-y-8">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <Calendar className="h-8 w-8 mx-auto mb-3 text-blue-600" />
                        <p className="text-sm text-gray-600 mb-1">Duration</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedPhase.duration}
                        </p>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-xl border border-green-100">
                        <DollarSign className="h-8 w-8 mx-auto mb-3 text-green-600" />
                        <p className="text-sm text-gray-600 mb-1">Budget</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedPhase.budget}
                        </p>
                      </div>
                      <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-100">
                        <Users className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                        <p className="text-sm text-gray-600 mb-1">Experts</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedPhase.experts.length}
                        </p>
                      </div>
                      <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-100">
                        <FileText className="h-8 w-8 mx-auto mb-3 text-orange-600" />
                        <p className="text-sm text-gray-600 mb-1">
                          Deliverables
                        </p>
                        <p className="text-lg font-semibold text-gray-900">
                          {selectedPhase.deliverables.length}
                        </p>
                      </div>
                    </div>

                    {/* Progress and Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Timeline
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Start Date:</span>
                              <span className="font-medium">
                                {new Date(
                                  selectedPhase.startDate,
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">End Date:</span>
                              <span className="font-medium">
                                {new Date(
                                  selectedPhase.endDate,
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-gray-600">Status:</span>
                              <Badge
                                variant={
                                  selectedPhase.status === "completed"
                                    ? "default"
                                    : selectedPhase.status === "current"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {selectedPhase.status}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Assigned Experts
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedPhase.experts.map((expert, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="text-sm px-3 py-1"
                              >
                                {expert}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Deliverables and Risks */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Key Deliverables
                          </h3>
                          <div className="space-y-2">
                            {selectedPhase.deliverables.map(
                              (deliverable, index) => (
                                <div
                                  key={index}
                                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                                >
                                  <FileText className="h-5 w-5 text-gray-500" />
                                  <span className="text-gray-700">
                                    {deliverable}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900">
                            Key Risks
                          </h3>
                          <div className="space-y-3">
                            {selectedPhase.risks.map((risk, index) => (
                              <div
                                key={index}
                                className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg border border-red-100"
                              >
                                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-red-700">{risk}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="steps" className="mt-0 space-y-6">
                    <div className="space-y-6">
                      {selectedPhase.steps.map((step) => (
                        <Card
                          key={step.id}
                          className="border-l-4 border-l-blue-500"
                        >
                          <CardContent className="p-6">
                            <div
                              className="flex items-center justify-between cursor-pointer"
                              onClick={() => toggleStepExpansion(step.id)}
                            >
                              <div className="flex items-center space-x-4">
                                {getStatusIcon(step.status)}
                                <div>
                                  <h4 className="text-lg font-semibold text-gray-900">
                                    {step.name}
                                  </h4>
                                  <p className="text-gray-600">
                                    {step.duration} • {step.assignedExpert}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="text-right">
                                  <Badge
                                    variant={
                                      step.status === "completed"
                                        ? "default"
                                        : step.status === "current"
                                          ? "secondary"
                                          : "outline"
                                    }
                                    className="mb-2"
                                  >
                                    {step.status}
                                  </Badge>
                                  <div className="text-lg font-medium text-gray-900">
                                    {step.progress}%
                                  </div>
                                </div>
                                {expandedSteps.includes(step.id) ? (
                                  <ChevronDown className="h-6 w-6 text-gray-400" />
                                ) : (
                                  <ChevronRight className="h-6 w-6 text-gray-400" />
                                )}
                              </div>
                            </div>

                            {expandedSteps.includes(step.id) && (
                              <div className="mt-6 pt-6 border-t space-y-6">
                                <p className="text-gray-700">
                                  {step.description}
                                </p>

                                <div>
                                  <h5 className="font-medium mb-3 text-gray-900">
                                    Progress
                                  </h5>
                                  <div className="flex items-center space-x-4">
                                    <Progress
                                      value={step.progress}
                                      className="flex-1 h-3"
                                    />
                                    <span className="font-medium text-gray-900">
                                      {step.progress}%
                                    </span>
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                  <div>
                                    <h5 className="font-medium mb-2 text-gray-900">
                                      Timeline
                                    </h5>
                                    <p className="text-gray-600">
                                      {new Date(
                                        step.startDate,
                                      ).toLocaleDateString()}{" "}
                                      -{" "}
                                      {new Date(
                                        step.endDate,
                                      ).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div>
                                    <h5 className="font-medium mb-2 text-gray-900">
                                      Assigned Expert
                                    </h5>
                                    <p className="text-gray-600">
                                      {step.assignedExpert}
                                    </p>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="font-medium mb-3 text-gray-900">
                                    Deliverables
                                  </h5>
                                  <div className="space-y-2">
                                    {step.deliverables.map(
                                      (deliverable, index) => (
                                        <div
                                          key={index}
                                          className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                                        >
                                          <FileText className="h-5 w-5 text-gray-500" />
                                          <span className="text-gray-700">
                                            {deliverable}
                                          </span>
                                        </div>
                                      ),
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="mt-0">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          Documents & Deliverables
                        </h3>
                        <Button
                          onClick={handleUploadDocument}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Upload Document
                        </Button>
                      </div>

                      <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="px-4 py-3 bg-gray-50 border-b">
                          <div className="relative">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <Input
                              placeholder="Search documents..."
                              className="pl-10"
                            />
                          </div>
                        </div>

                        <div className="divide-y">
                          {documents.map((doc) => (
                            <div
                              key={doc.id}
                              className="p-4 hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                    <FileText className="h-5 w-5 text-red-600" />
                                  </div>
                                  <div>
                                    <div className="font-medium text-gray-900">
                                      {doc.name}
                                    </div>
                                    <div className="text-sm text-gray-500">
                                      {doc.type} • {doc.size} • {doc.date}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                  {getDocumentStatusBadge(doc.status)}
                                  <div className="flex items-center space-x-2">
                                    <Button variant="outline" size="sm">
                                      <Eye className="h-4 w-4 mr-1" />
                                      View
                                    </Button>
                                    <Button variant="outline" size="sm">
                                      <Download className="h-4 w-4 mr-1" />
                                      Download
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="milestones" className="mt-0">
                    <Card>
                      <CardContent className="p-8">
                        <h3 className="text-lg font-semibold mb-6 text-gray-900">
                          Phase Milestones
                        </h3>
                        <div className="space-y-6">
                          {selectedPhase.milestones.map((milestone) => (
                            <div
                              key={milestone.id}
                              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg border"
                            >
                              <div className="flex-shrink-0 mt-1">
                                {milestone.status === "completed" ? (
                                  <CheckCircle className="h-6 w-6 text-green-600" />
                                ) : milestone.status === "overdue" ? (
                                  <AlertCircle className="h-6 w-6 text-red-600" />
                                ) : (
                                  <Clock className="h-6 w-6 text-blue-600" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-gray-900">
                                    {milestone.name}
                                  </h4>
                                  <Badge
                                    variant={
                                      milestone.status === "completed"
                                        ? "default"
                                        : milestone.status === "overdue"
                                          ? "destructive"
                                          : "secondary"
                                    }
                                  >
                                    {milestone.status}
                                  </Badge>
                                </div>
                                <p className="text-gray-700 mb-2">
                                  {milestone.description}
                                </p>
                                <p className="text-sm text-gray-500">
                                  Due:{" "}
                                  {new Date(
                                    milestone.date,
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </div>

            {/* Action Buttons */}
            <div className="px-8 py-4 border-t bg-gray-50">
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  disabled={getCurrentStepNumber() === 1}
                  onClick={() => {
                    const allSteps = phases.flatMap((phase) => phase.steps);
                    const currentIndex = allSteps.findIndex(
                      (step) => step.id === selectedStep.id,
                    );
                    if (currentIndex > 0) {
                      handleStepSelect(allSteps[currentIndex - 1]);
                    }
                  }}
                >
                  Previous Step
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline">Save Progress</Button>
                  <Button variant="outline">Export Report</Button>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={getCurrentStepNumber() === getTotalSteps()}
                    onClick={() => {
                      const allSteps = phases.flatMap((phase) => phase.steps);
                      const currentIndex = allSteps.findIndex(
                        (step) => step.id === selectedStep.id,
                      );
                      if (currentIndex < allSteps.length - 1) {
                        handleStepSelect(allSteps[currentIndex + 1]);
                      }
                    }}
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
