"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MousePointer, ArrowRight, Play, Square, RotateCcw } from "lucide-react"

const prototypeScreens = [
  {
    id: 1,
    name: "Dashboard",
    description: "Main project overview dashboard",
    interactions: [
      { target: 2, action: "Click Project Card", hotspot: { x: 30, y: 40, w: 40, h: 25 } },
      { target: 3, action: "Click Workflow Tab", hotspot: { x: 20, y: 80, w: 15, h: 8 } },
    ],
  },
  {
    id: 2,
    name: "Project Details",
    description: "Detailed view of selected project",
    interactions: [
      { target: 3, action: "Click Workflow", hotspot: { x: 25, y: 80, w: 15, h: 8 } },
      { target: 4, action: "Click Documents", hotspot: { x: 40, y: 80, w: 15, h: 8 } },
      { target: 1, action: "Back to Dashboard", hotspot: { x: 5, y: 10, w: 10, h: 8 } },
    ],
  },
  {
    id: 3,
    name: "Workflow View",
    description: "Project workflow and phase management",
    interactions: [
      { target: 5, action: "Click Phase", hotspot: { x: 20, y: 30, w: 60, h: 15 } },
      { target: 2, action: "Back to Overview", hotspot: { x: 10, y: 80, w: 15, h: 8 } },
    ],
  },
  {
    id: 4,
    name: "Documents",
    description: "Document management interface",
    interactions: [
      { target: 6, action: "Open Document", hotspot: { x: 25, y: 35, w: 20, h: 20 } },
      { target: 2, action: "Back to Project", hotspot: { x: 10, y: 80, w: 15, h: 8 } },
    ],
  },
  {
    id: 5,
    name: "Phase Details",
    description: "Detailed phase information and actions",
    interactions: [
      { target: 7, action: "Assign Expert", hotspot: { x: 70, y: 60, w: 25, h: 10 } },
      { target: 3, action: "Back to Workflow", hotspot: { x: 5, y: 10, w: 10, h: 8 } },
    ],
  },
  {
    id: 6,
    name: "Document Viewer",
    description: "Document preview and editing",
    interactions: [{ target: 4, action: "Close Document", hotspot: { x: 85, y: 10, w: 10, h: 8 } }],
  },
  {
    id: 7,
    name: "Expert Assignment",
    description: "Form to assign experts to project phases",
    interactions: [
      { target: 5, action: "Save & Close", hotspot: { x: 70, y: 85, w: 25, h: 10 } },
      { target: 5, action: "Cancel", hotspot: { x: 40, y: 85, w: 25, h: 10 } },
    ],
  },
]

export default function PrototypeFlow() {
  const [currentScreen, setCurrentScreen] = useState(1)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showHotspots, setShowHotspots] = useState(true)

  const currentScreenData = prototypeScreens.find((screen) => screen.id === currentScreen)

  const handleInteraction = (targetScreen: number) => {
    setCurrentScreen(targetScreen)
  }

  const resetPrototype = () => {
    setCurrentScreen(1)
    setIsPlaying(false)
  }

  const togglePlayMode = () => {
    setIsPlaying(!isPlaying)
    setShowHotspots(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Figma Prototype Flow</h1>
          <p className="text-gray-600">Interactive prototype demonstration for Large Dam Project Management System</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Prototype Controls */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prototype Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex space-x-2">
                  <Button onClick={togglePlayMode} variant={isPlaying ? "default" : "outline"} className="flex-1">
                    {isPlaying ? <Square className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                    {isPlaying ? "Stop" : "Play"}
                  </Button>
                  <Button onClick={resetPrototype} variant="outline">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="hotspots"
                    checked={showHotspots}
                    onChange={(e) => setShowHotspots(e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="hotspots" className="text-sm">
                    Show Hotspots
                  </label>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Current Screen:</p>
                  <Badge variant="default">{currentScreenData?.name}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Screen Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Screens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {prototypeScreens.map((screen) => (
                    <button
                      key={screen.id}
                      onClick={() => setCurrentScreen(screen.id)}
                      className={`w-full text-left p-2 rounded text-sm transition-colors ${
                        currentScreen === screen.id
                          ? "bg-blue-100 text-blue-700 border border-blue-300"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="font-medium">{screen.name}</div>
                      <div className="text-xs text-gray-600">{screen.description}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Interactions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Available Interactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {currentScreenData?.interactions.map((interaction, index) => (
                    <button
                      key={index}
                      onClick={() => handleInteraction(interaction.target)}
                      className="w-full text-left p-2 rounded text-sm hover:bg-gray-100 border border-gray-200"
                    >
                      <div className="flex items-center justify-between">
                        <span>{interaction.action}</span>
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                      </div>
                      <div className="text-xs text-gray-600">
                        → {prototypeScreens.find((s) => s.id === interaction.target)?.name}
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Prototype Screen */}
          <div className="lg:col-span-3">
            <Card className="h-[800px]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{currentScreenData?.name}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <MousePointer className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Click hotspots to navigate</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{currentScreenData?.description}</p>
              </CardHeader>
              <CardContent className="h-full p-0">
                <div className="relative w-full h-full bg-white border rounded-lg overflow-hidden">
                  {/* Mock Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100">
                    {/* Header */}
                    <div className="h-16 bg-blue-600 flex items-center px-6">
                      <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
                      <div className="text-white">
                        <div className="font-semibold">NWHSA Project Management</div>
                        <div className="text-xs text-blue-100">Large Dam Projects</div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 space-y-4">
                      {currentScreen === 1 && (
                        <>
                          <div className="text-xl font-bold mb-4">Project Dashboard</div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="h-32 bg-white rounded-lg shadow-sm border p-4">
                              <div className="text-sm text-gray-600">Thwake Dam</div>
                              <div className="text-lg font-semibold">75% Complete</div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                              </div>
                            </div>
                            <div className="h-32 bg-white rounded-lg shadow-sm border p-4">
                              <div className="text-sm text-gray-600">High Grand Falls</div>
                              <div className="text-lg font-semibold">45% Complete</div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-4 mt-6">
                            <div className="px-4 py-2 bg-white rounded border text-sm">Overview</div>
                            <div className="px-4 py-2 bg-gray-100 rounded border text-sm">Workflow</div>
                            <div className="px-4 py-2 bg-gray-100 rounded border text-sm">Documents</div>
                          </div>
                        </>
                      )}

                      {currentScreen === 2 && (
                        <>
                          <div className="text-xl font-bold mb-4">Thwake Multipurpose Dam</div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4 border">
                              <div className="text-sm text-gray-600">Location</div>
                              <div className="font-semibold">Makueni County</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border">
                              <div className="text-sm text-gray-600">Budget</div>
                              <div className="font-semibold">KES 63.5B</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border">
                              <div className="text-sm text-gray-600">Progress</div>
                              <div className="font-semibold">75%</div>
                            </div>
                          </div>
                          <div className="flex space-x-4 mt-6">
                            <div className="px-4 py-2 bg-white rounded border text-sm">Overview</div>
                            <div className="px-4 py-2 bg-gray-100 rounded border text-sm">Workflow</div>
                            <div className="px-4 py-2 bg-gray-100 rounded border text-sm">Documents</div>
                            <div className="px-4 py-2 bg-gray-100 rounded border text-sm">Experts</div>
                          </div>
                        </>
                      )}

                      {currentScreen === 3 && (
                        <>
                          <div className="text-xl font-bold mb-4">Project Workflow</div>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 p-3 bg-white rounded border">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                                ✓
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">Pre-Feasibility Study</div>
                                <div className="text-sm text-gray-600">Completed</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-white rounded border">
                              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                                ✓
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">Feasibility Study</div>
                                <div className="text-sm text-gray-600">Completed</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded border border-blue-200">
                              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                                ⏱
                              </div>
                              <div className="flex-1">
                                <div className="font-medium">Final Design</div>
                                <div className="text-sm text-gray-600">In Progress - 75%</div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {currentScreen === 4 && (
                        <>
                          <div className="text-xl font-bold mb-4">Project Documents</div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4 border hover:shadow-md cursor-pointer">
                              <div className="text-blue-500 mb-2">📄</div>
                              <div className="font-medium text-sm">Feasibility Report</div>
                              <div className="text-xs text-gray-600">PDF • 2023-06-20</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border hover:shadow-md cursor-pointer">
                              <div className="text-blue-500 mb-2">📄</div>
                              <div className="font-medium text-sm">ESIA Report</div>
                              <div className="text-xs text-gray-600">PDF • 2023-08-10</div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border hover:shadow-md cursor-pointer">
                              <div className="text-blue-500 mb-2">📐</div>
                              <div className="font-medium text-sm">Design Drawings</div>
                              <div className="text-xs text-gray-600">DWG • 2024-01-20</div>
                            </div>
                          </div>
                        </>
                      )}

                      {currentScreen === 5 && (
                        <>
                          <div className="text-xl font-bold mb-4">Final Design Phase</div>
                          <div className="bg-white rounded-lg p-4 border">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <div className="font-semibold">Final Design</div>
                                <div className="text-sm text-gray-600">
                                  Detailed engineering design and construction documents
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-blue-600">75%</div>
                                <div className="text-sm text-gray-600">Complete</div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <div className="text-sm font-medium mb-1">Key Deliverables</div>
                                <div className="text-sm text-gray-600">
                                  • Final Design Report • Construction Drawings • Technical Specifications
                                </div>
                              </div>
                              <div>
                                <div className="text-sm font-medium mb-1">Assigned Experts</div>
                                <div className="flex space-x-2">
                                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                    Project Engineer
                                  </span>
                                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                                    Structural Engineer
                                  </span>
                                </div>
                              </div>
                              <div className="flex space-x-2 mt-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
                                  Continue Phase
                                </button>
                                <button className="px-4 py-2 bg-gray-100 rounded text-sm">Assign Expert</button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {currentScreen === 6 && (
                        <>
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-xl font-bold">Document Viewer</div>
                            <button className="text-gray-500 hover:text-gray-700">✕</button>
                          </div>
                          <div className="bg-white rounded-lg border h-96 flex items-center justify-center">
                            <div className="text-center text-gray-500">
                              <div className="text-4xl mb-2">📄</div>
                              <div>Feasibility Study Report</div>
                              <div className="text-sm">PDF Document Preview</div>
                            </div>
                          </div>
                        </>
                      )}

                      {currentScreen === 7 && (
                        <>
                          <div className="text-xl font-bold mb-4">Assign Expert</div>
                          <div className="bg-white rounded-lg p-6 border">
                            <div className="space-y-4">
                              <div>
                                <label className="block text-sm font-medium mb-1">Expert Type</label>
                                <select className="w-full p-2 border rounded">
                                  <option>Structural Engineer</option>
                                  <option>Hydrologist</option>
                                  <option>Environmental Expert</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Expert Name</label>
                                <select className="w-full p-2 border rounded">
                                  <option>Dr. James Mwangi</option>
                                  <option>Eng. Sarah Kimani</option>
                                  <option>Prof. Peter Ochieng</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-sm font-medium mb-1">Assignment Date</label>
                                <input type="date" className="w-full p-2 border rounded" />
                              </div>
                              <div className="flex space-x-2 pt-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded">Save Assignment</button>
                                <button className="px-4 py-2 bg-gray-100 rounded">Cancel</button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Interactive Hotspots */}
                  {showHotspots &&
                    currentScreenData?.interactions.map((interaction, index) => (
                      <button
                        key={index}
                        onClick={() => handleInteraction(interaction.target)}
                        className="absolute bg-blue-500 bg-opacity-20 border-2 border-blue-500 hover:bg-opacity-30 transition-all"
                        style={{
                          left: `${interaction.hotspot.x}%`,
                          top: `${interaction.hotspot.y}%`,
                          width: `${interaction.hotspot.w}%`,
                          height: `${interaction.hotspot.h}%`,
                        }}
                        title={interaction.action}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <MousePointer className="h-4 w-4 text-blue-600" />
                        </div>
                      </button>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
