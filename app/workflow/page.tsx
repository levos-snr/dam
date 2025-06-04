"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
// import { useToast } from "@/hooks/use-toast"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Users,
  Settings,
  Play,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const workflowSteps = [
  {
    id: 1,
    name: "Pre-Feasibility Study",
    description: "Initial assessment and site selection",
    duration: "3-6 months",
    deliverables: [
      "Site Visit Report",
      "Preliminary Assessment",
      "Stakeholder Consultation",
    ],
    experts: ["Project Engineer", "Surveyor", "Environmental Expert"],
    status: "completed",
    progress: 100,
  },
  {
    id: 2,
    name: "Feasibility Study",
    description: "Comprehensive technical and economic analysis",
    duration: "6-12 months",
    deliverables: ["Feasibility Report", "ESIA Report", "Economic Analysis"],
    experts: [
      "Project Engineer",
      "Hydrologist",
      "Geotechnical Engineer",
      "Environmental Expert",
    ],
    status: "completed",
    progress: 100,
  },
  {
    id: 3,
    name: "Preliminary Design",
    description: "Initial engineering design and specifications",
    duration: "4-8 months",
    deliverables: ["Preliminary Design Report", "BOQ", "Cost Estimates"],
    experts: ["Project Engineer", "Structural Engineer", "Hydrologist"],
    status: "completed",
    progress: 100,
  },
  {
    id: 4,
    name: "Final Design",
    description: "Detailed engineering design and construction documents",
    duration: "6-12 months",
    deliverables: [
      "Final Design Report",
      "Construction Drawings",
      "Technical Specifications",
    ],
    experts: ["Project Engineer", "All Technical Experts"],
    status: "current",
    progress: 75,
  },
  {
    id: 5,
    name: "Construction",
    description: "Physical construction of the dam",
    duration: "36-60 months",
    deliverables: [
      "Progress Reports",
      "Quality Reports",
      "Completion Certificates",
    ],
    experts: ["Construction Manager", "Site Engineer", "Quality Controller"],
    status: "pending",
    progress: 0,
  },
  {
    id: 6,
    name: "Commissioning",
    description: "Testing and handover of completed dam",
    duration: "6-12 months",
    deliverables: [
      "Commissioning Report",
      "O&M Manual",
      "Handover Certificate",
    ],
    experts: ["Project Engineer", "Operations Team"],
    status: "pending",
    progress: 0,
  },
];

export default function WorkflowDesigner() {
  const [selectedStep, setSelectedStep] = useState(workflowSteps[3]); // Current step
  const [steps, setSteps] = useState(workflowSteps);
  // const { toast } = useToast()

  const handleStepAction = (action: string, step: any) => {
    if (action === "continue" && step.status === "current") {
      // Advance current step
      const updatedSteps = steps.map((s) =>
        s.id === step.id
          ? { ...s, progress: Math.min(s.progress + 10, 100) }
          : s,
      );
      setSteps(updatedSteps);
      setSelectedStep((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 10, 100),
      }));

      // toast({
      //   title: "Step Advanced",
      //   description: `${step.name} progress updated to ${Math.min(step.progress + 10, 100)}%`,
      // })

      // If step is completed, move to next
      if (step.progress + 10 >= 100) {
        setTimeout(() => {
          const nextStepUpdates = steps.map((s) =>
            s.id === step.id
              ? { ...s, status: "completed", progress: 100 }
              : s.id === step.id + 1
                ? { ...s, status: "current", progress: 10 }
                : s,
          );
          setSteps(nextStepUpdates);

          if (step.id < steps.length) {
            setSelectedStep(steps.find((s) => s.id === step.id + 1) || step);
            toast({
              title: "Phase Completed!",
              description: `${step.name} completed. Moving to next phase.`,
            });
          }
        }, 1500);
      }
    } else if (action === "start" && step.status === "pending") {
      const updatedSteps = steps.map((s) =>
        s.id === step.id ? { ...s, status: "current", progress: 10 } : s,
      );
      setSteps(updatedSteps);
      setSelectedStep({ ...step, status: "current", progress: 10 });

      toast({
        title: "Phase Started",
        description: `${step.name} has been initiated.`,
      });
    }
  };

  const handleDocumentAction = (action: string) => {
    toast({
      title: `${action} Action`,
      description: `${action} for ${selectedStep.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Large Dam Project Workflow Designer
            </h1>
            <p className="text-gray-600">
              Design and manage the complete workflow for large dam projects
            </p>
          </div>
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workflow Steps */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Project Workflow
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div
                        className={`flex items-center space-x-4 p-4 rounded-lg border cursor-pointer transition-all ${
                          selectedStep.id === step.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setSelectedStep(step)}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                            step.status === "completed"
                              ? "bg-green-500 text-white"
                              : step.status === "current"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {step.status === "completed" ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : step.status === "current" ? (
                            <Clock className="h-5 w-5" />
                          ) : (
                            <AlertCircle className="h-5 w-5" />
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium">{step.name}</h3>
                            <Badge
                              variant={
                                step.status === "completed"
                                  ? "default"
                                  : step.status === "current"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {step.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {step.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">
                              Duration: {step.duration}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Progress
                                value={step.progress}
                                className="w-20 h-2"
                              />
                              <span className="text-xs">{step.progress}%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {index < steps.length - 1 && (
                        <div className="flex justify-center my-2">
                          <ArrowRight className="h-5 w-5 text-gray-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  {selectedStep.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="text-sm text-gray-600">
                    {selectedStep.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Duration</h4>
                  <p className="text-sm text-gray-600">
                    {selectedStep.duration}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Progress</h4>
                  <div className="flex items-center space-x-2">
                    <Progress
                      value={selectedStep.progress}
                      className="flex-1"
                    />
                    <span className="text-sm font-medium">
                      {selectedStep.progress}%
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Deliverables</h4>
                  <ul className="space-y-1">
                    {selectedStep.deliverables.map((deliverable, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Required Experts</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedStep.experts.map((expert, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {expert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button
                    className="w-full"
                    disabled={selectedStep.status === "completed"}
                    onClick={() =>
                      handleStepAction(
                        selectedStep.status === "completed"
                          ? "completed"
                          : selectedStep.status === "current"
                            ? "continue"
                            : "start",
                        selectedStep,
                      )
                    }
                  >
                    <Play className="h-4 w-4 mr-2" />
                    {selectedStep.status === "completed"
                      ? "Completed"
                      : selectedStep.status === "current"
                        ? "Continue"
                        : "Start Phase"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleDocumentAction("View Documents")}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Documents
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => handleDocumentAction("Assign Experts")}
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Assign Experts
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDocumentAction("Generate Report")}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDocumentAction("Schedule Meeting")}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleDocumentAction("Create Alert")}
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Create Alert
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
