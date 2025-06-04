export interface Expert {
  id: string
  name: string
  title: string
  department: string
  specialization: string[]
  experience: string
  email: string
  phone: string
  status: "Active" | "Available" | "On Leave" | "Assigned"
  currentProjects: string[]
  completedProjects: string[]
  certifications: string[]
  education: string
  languages: string[]
  expertise: {
    damTypes: string[]
    projectPhases: string[]
    software: string[]
  }
  performance: {
    projectsCompleted: number
    onTimeDelivery: number
    qualityRating: number
    safetyRecord: string
  }
  availability: {
    currentCapacity: number
    nextAvailable: string
    preferredAssignments: string[]
  }
}

export const enhancedExperts: Expert[] = [
  {
    id: "EXP001",
    name: "Dr. James Mwangi",
    title: "Senior Project Engineer & Team Leader",
    department: "Technical Planning & Design",
    specialization: ["Dam Engineering", "Project Management", "Structural Design", "Risk Assessment"],
    experience: "15 years",
    email: "j.mwangi@nwhsa.go.ke",
    phone: "+254 712 345 678",
    status: "Active",
    currentProjects: ["LDP001", "LDP004"],
    completedProjects: ["LDP003", "SDP001", "SDP005", "SDP008"],
    certifications: [
      "Professional Engineer (PE) - Kenya",
      "Project Management Professional (PMP)",
      "Dam Safety Inspector",
      "FIDIC Contract Management",
    ],
    education: "PhD Civil Engineering (Structural) - University of Nairobi, MSc Water Resources - IHE Delft",
    languages: ["English", "Swahili", "Kikuyu"],
    expertise: {
      damTypes: ["Concrete Gravity", "CFRD", "Earth Fill", "Arch Dams"],
      projectPhases: ["All Phases", "Design Leadership", "Construction Supervision"],
      software: ["AutoCAD", "SAP2000", "PLAXIS", "HEC-RAS", "MS Project"],
    },
    performance: {
      projectsCompleted: 12,
      onTimeDelivery: 95,
      qualityRating: 4.8,
      safetyRecord: "Zero incidents in 15 years",
    },
    availability: {
      currentCapacity: 85,
      nextAvailable: "2024-09-15",
      preferredAssignments: ["Large Dams", "Complex Projects", "Team Leadership"],
    },
  },
  {
    id: "EXP002",
    name: "Prof. Sarah Kimani",
    title: "Principal Hydrologist & Water Resources Specialist",
    department: "Hydrology Section",
    specialization: ["Hydrology", "Water Resources", "Climate Change", "Flood Analysis"],
    experience: "20 years",
    email: "s.kimani@nwhsa.go.ke",
    phone: "+254 722 456 789",
    status: "Active",
    currentProjects: ["LDP002", "LDP005"],
    completedProjects: ["LDP001", "LDP003", "SDP002", "SDP006", "SDP009"],
    certifications: [
      "Certified Professional Hydrologist (CPH)",
      "Water Resources Management Certificate",
      "Climate Change Adaptation Specialist",
      "UNESCO-IHE Certificate in Flood Management",
    ],
    education: "PhD Hydrology - Colorado State University, MSc Water Resources - University of Nairobi",
    languages: ["English", "Swahili", "French"],
    expertise: {
      damTypes: ["All Types", "Spillway Design", "Reservoir Operations"],
      projectPhases: ["Feasibility", "Design", "Operations Planning"],
      software: ["HEC-HMS", "HEC-RAS", "MIKE", "ArcGIS", "R Statistical"],
    },
    performance: {
      projectsCompleted: 18,
      onTimeDelivery: 92,
      qualityRating: 4.9,
      safetyRecord: "Excellent safety record",
    },
    availability: {
      currentCapacity: 75,
      nextAvailable: "2024-11-01",
      preferredAssignments: ["Hydrological Studies", "Large Catchments", "Research Projects"],
    },
  },
  {
    id: "EXP003",
    name: "Eng. Peter Ochieng",
    title: "Senior Geotechnical Engineer",
    department: "Hydrogeology Section",
    specialization: ["Geotechnical Engineering", "Foundation Design", "Rock Mechanics", "Slope Stability"],
    experience: "12 years",
    email: "p.ochieng@nwhsa.go.ke",
    phone: "+254 733 567 890",
    status: "Active",
    currentProjects: ["LDP001", "LDP003"],
    completedProjects: ["LDP005", "SDP003", "SDP007"],
    certifications: [
      "Professional Engineer - Geotechnical",
      "Certified Geotechnical Engineer (CGE)",
      "Rock Mechanics Specialist",
      "Dam Foundation Expert",
    ],
    education:
      "MSc Geotechnical Engineering - University of Witwatersrand, BSc Civil Engineering - University of Nairobi",
    languages: ["English", "Swahili", "Luo"],
    expertise: {
      damTypes: ["Rock Fill", "Concrete Dams", "Earth Dams"],
      projectPhases: ["Site Investigation", "Foundation Design", "Construction Support"],
      software: ["PLAXIS", "SLOPE/W", "ROCSCIENCE", "AutoCAD", "GeoStudio"],
    },
    performance: {
      projectsCompleted: 9,
      onTimeDelivery: 88,
      qualityRating: 4.7,
      safetyRecord: "1 minor incident - excellent overall",
    },
    availability: {
      currentCapacity: 90,
      nextAvailable: "2024-12-15",
      preferredAssignments: ["Foundation Studies", "Rock Engineering", "Technical Reviews"],
    },
  },
  {
    id: "EXP004",
    name: "Dr. Mary Wanjiku",
    title: "Principal Environmental Specialist",
    department: "Environmental Section",
    specialization: ["Environmental Impact Assessment", "Biodiversity", "Social Impact", "Sustainability"],
    experience: "18 years",
    email: "m.wanjiku@nwhsa.go.ke",
    phone: "+254 744 678 901",
    status: "Active",
    currentProjects: ["LDP004"],
    completedProjects: ["LDP001", "LDP002", "SDP004", "SDP010"],
    certifications: [
      "NEMA Licensed EIA Expert",
      "International Association for Impact Assessment (IAIA)",
      "Biodiversity Assessment Specialist",
      "Social Impact Assessment Professional",
    ],
    education:
      "PhD Environmental Science - University of Cape Town, MSc Environmental Management - Kenyatta University",
    languages: ["English", "Swahili", "Kikuyu", "French"],
    expertise: {
      damTypes: ["All Types", "Environmental Compliance", "Mitigation Design"],
      projectPhases: ["Environmental Studies", "Compliance Monitoring", "Stakeholder Engagement"],
      software: ["ArcGIS", "QGIS", "R", "SPSS", "Environmental Modeling Tools"],
    },
    performance: {
      projectsCompleted: 15,
      onTimeDelivery: 94,
      qualityRating: 4.9,
      safetyRecord: "Perfect environmental compliance record",
    },
    availability: {
      currentCapacity: 60,
      nextAvailable: "2024-08-30",
      preferredAssignments: ["Large Projects", "Complex Environmental Issues", "International Projects"],
    },
  },
  {
    id: "EXP005",
    name: "Eng. David Mutua",
    title: "Senior Survey Engineer & GIS Specialist",
    department: "Survey Division",
    specialization: ["Engineering Surveying", "GIS", "Remote Sensing", "Photogrammetry"],
    experience: "10 years",
    email: "d.mutua@nwhsa.go.ke",
    phone: "+254 755 789 012",
    status: "Active",
    currentProjects: ["LDP005", "SDP011"],
    completedProjects: ["LDP001", "LDP004", "SDP012", "SDP013"],
    certifications: [
      "Licensed Land Surveyor - Kenya",
      "GIS Professional (GISP)",
      "Remote Sensing Specialist",
      "UAV/Drone Pilot License",
    ],
    education: "BSc Surveying & Geomatics - University of Nairobi, Diploma in GIS - RCMRD",
    languages: ["English", "Swahili", "Kamba"],
    expertise: {
      damTypes: ["All Types", "Topographical Mapping", "Volume Calculations"],
      projectPhases: ["Site Investigation", "Design Support", "Construction Surveys"],
      software: ["ArcGIS", "AutoCAD Civil 3D", "Trimble Business Center", "Pix4D", "Global Mapper"],
    },
    performance: {
      projectsCompleted: 14,
      onTimeDelivery: 96,
      qualityRating: 4.8,
      safetyRecord: "Excellent field safety record",
    },
    availability: {
      currentCapacity: 70,
      nextAvailable: "2024-10-01",
      preferredAssignments: ["Topographical Surveys", "GIS Projects", "UAV Mapping"],
    },
  },
  {
    id: "EXP006",
    name: "Eng. Grace Akinyi",
    title: "Construction Manager & M&E Specialist",
    department: "Construction Management",
    specialization: ["Construction Management", "Mechanical Engineering", "Quality Control", "Contract Administration"],
    experience: "14 years",
    email: "g.akinyi@nwhsa.go.ke",
    phone: "+254 766 890 123",
    status: "Available",
    currentProjects: [],
    completedProjects: ["LDP003", "SDP014", "SDP015", "SDP016"],
    certifications: [
      "Project Management Professional (PMP)",
      "Construction Management Certificate",
      "Quality Management ISO 9001",
      "FIDIC Contract Management",
    ],
    education: "MSc Construction Management - University of Nairobi, BSc Mechanical Engineering - JKUAT",
    languages: ["English", "Swahili", "Luo"],
    expertise: {
      damTypes: ["Concrete Dams", "Mechanical Systems", "Quality Systems"],
      projectPhases: ["Construction", "Commissioning", "Quality Assurance"],
      software: ["MS Project", "Primavera P6", "AutoCAD", "SAP", "Quality Management Systems"],
    },
    performance: {
      projectsCompleted: 8,
      onTimeDelivery: 91,
      qualityRating: 4.6,
      safetyRecord: "Strong safety leadership record",
    },
    availability: {
      currentCapacity: 0,
      nextAvailable: "2024-07-01",
      preferredAssignments: ["Construction Projects", "Mechanical Works", "Quality Management"],
    },
  },
  {
    id: "EXP007",
    name: "Dr. Robert Kiprotich",
    title: "Dam Safety & Risk Assessment Specialist",
    department: "Dam Safety Unit",
    specialization: ["Dam Safety", "Risk Assessment", "Structural Health Monitoring", "Emergency Planning"],
    experience: "16 years",
    email: "r.kiprotich@nwhsa.go.ke",
    phone: "+254 777 123 456",
    status: "Active",
    currentProjects: ["LDP001", "LDP002", "LDP003"],
    completedProjects: ["Multiple Safety Assessments"],
    certifications: [
      "Certified Dam Safety Engineer",
      "Risk Assessment Professional",
      "Structural Health Monitoring Specialist",
      "Emergency Management Certificate",
    ],
    education:
      "PhD Structural Engineering - University of California Berkeley, MSc Civil Engineering - University of Nairobi",
    languages: ["English", "Swahili", "Kalenjin"],
    expertise: {
      damTypes: ["All Types", "Safety Assessment", "Risk Analysis"],
      projectPhases: ["Safety Reviews", "Monitoring Systems", "Emergency Planning"],
      software: ["ANSYS", "SAP2000", "Risk Analysis Software", "Monitoring Systems"],
    },
    performance: {
      projectsCompleted: 25,
      onTimeDelivery: 98,
      qualityRating: 4.9,
      safetyRecord: "Leading safety expert - zero incidents",
    },
    availability: {
      currentCapacity: 80,
      nextAvailable: "2024-08-15",
      preferredAssignments: ["Safety Assessments", "Risk Studies", "Monitoring Systems"],
    },
  },
  {
    id: "EXP008",
    name: "Eng. Alice Nyong'o",
    title: "Hydraulic Engineer & Spillway Specialist",
    department: "Hydraulic Engineering",
    specialization: ["Hydraulic Engineering", "Spillway Design", "Energy Dissipation", "Computational Fluid Dynamics"],
    experience: "11 years",
    email: "a.nyongo@nwhsa.go.ke",
    phone: "+254 788 234 567",
    status: "Active",
    currentProjects: ["LDP002"],
    completedProjects: ["LDP001", "LDP005", "SDP017"],
    certifications: [
      "Professional Hydraulic Engineer",
      "CFD Modeling Specialist",
      "Spillway Design Expert",
      "Physical Modeling Certificate",
    ],
    education: "MSc Hydraulic Engineering - TU Delft, BSc Civil Engineering - University of Nairobi",
    languages: ["English", "Swahili", "Luo", "Dutch"],
    expertise: {
      damTypes: ["All Types", "Spillway Systems", "Energy Dissipators"],
      projectPhases: ["Hydraulic Design", "Model Testing", "Construction Support"],
      software: ["FLOW-3D", "HEC-RAS", "MIKE", "AutoCAD", "ANSYS Fluent"],
    },
    performance: {
      projectsCompleted: 7,
      onTimeDelivery: 93,
      qualityRating: 4.8,
      safetyRecord: "Excellent hydraulic safety record",
    },
    availability: {
      currentCapacity: 65,
      nextAvailable: "2024-09-30",
      preferredAssignments: ["Hydraulic Design", "Spillway Projects", "Model Studies"],
    },
  },
]
