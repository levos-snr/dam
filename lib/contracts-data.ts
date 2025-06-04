export interface ProjectContract {
  id: string
  title: string
  contractor: string
  project: string
  projectId: string
  value: string
  currency: string
  status: "Active" | "Completed" | "Suspended" | "Terminated" | "Under Negotiation"
  type: "Construction" | "Consultancy" | "Supply" | "Maintenance" | "Design-Build"
  startDate: string
  endDate: string
  actualStartDate?: string
  actualEndDate?: string
  progress: number
  paymentTerms: string
  retentionPercentage: number
  performanceBond: string
  advancePayment: string
  variations: ContractVariation[]
  milestones: ContractMilestone[]
  keyPersonnel: string[]
  scope: string
  deliverables: string[]
  penalties: string
  bonuses: string
  riskAllocation: string
  disputeResolution: string
  governingLaw: string
  contractManager: string
  technicalManager: string
  financialSummary: {
    originalValue: string
    currentValue: string
    paidToDate: string
    pendingPayments: string
    retentionHeld: string
    variationsValue: string
  }
}

export interface ContractVariation {
  id: string
  description: string
  value: string
  status: "Proposed" | "Approved" | "Rejected" | "Under Review"
  date: string
  reason: string
  impact: string
}

export interface ContractMilestone {
  id: string
  name: string
  description: string
  plannedDate: string
  actualDate?: string
  status: "Pending" | "Achieved" | "Delayed" | "At Risk"
  paymentPercentage: number
  dependencies: string[]
}

export const enhancedContracts: ProjectContract[] = [
  {
    id: "CNT001",
    title: "Thwake Multipurpose Dam - Main Construction Contract",
    contractor: "China Gezhouba Group Company Limited (CGGC)",
    project: "Thwake Multipurpose Dam",
    projectId: "LDP001",
    value: "KES 58.5B",
    currency: "KES",
    status: "Active",
    type: "Construction",
    startDate: "2022-04-01",
    endDate: "2030-09-30",
    actualStartDate: "2022-04-15",
    progress: 75,
    paymentTerms: "Monthly progress payments based on certified work done",
    retentionPercentage: 10,
    performanceBond: "KES 5.85B (10% of contract value)",
    advancePayment: "KES 8.78B (15% of contract value)",
    scope:
      "Design, supply, construction and commissioning of Thwake Multipurpose Dam including all civil, mechanical, electrical and instrumentation works",
    deliverables: [
      "Completed Dam Structure (80m high CFRD)",
      "Spillway and Outlet Works",
      "Access Roads and Infrastructure",
      "Instrumentation and Monitoring Systems",
      "Operation and Maintenance Manuals",
      "Training of Operations Staff",
    ],
    penalties: "0.1% of contract value per day for delays beyond agreed extension",
    bonuses: "Early completion bonus: 0.05% per day up to maximum 2% of contract value",
    riskAllocation: "Contractor bears construction risks, Employer bears design changes and force majeure",
    disputeResolution: "Arbitration under UNCITRAL rules in Nairobi, Kenya",
    governingLaw: "Laws of Kenya",
    contractManager: "Eng. Grace Akinyi",
    technicalManager: "Dr. James Mwangi",
    keyPersonnel: [
      "Project Manager - Zhang Wei (CGGC)",
      "Construction Manager - Liu Ming (CGGC)",
      "Quality Manager - Wang Lei (CGGC)",
      "Safety Manager - Chen Yu (CGGC)",
    ],
    financialSummary: {
      originalValue: "KES 58.5B",
      currentValue: "KES 61.2B",
      paidToDate: "KES 45.9B",
      pendingPayments: "KES 3.2B",
      retentionHeld: "KES 4.59B",
      variationsValue: "KES 2.7B",
    },
    variations: [
      {
        id: "VAR001",
        description: "Additional rock excavation due to geological conditions",
        value: "KES 1.2B",
        status: "Approved",
        date: "2023-06-15",
        reason: "Unforeseen geological conditions requiring additional excavation",
        impact: "3 months extension, additional costs for specialized equipment",
      },
      {
        id: "VAR002",
        description: "Enhanced instrumentation and monitoring systems",
        value: "KES 800M",
        status: "Approved",
        date: "2023-09-20",
        reason: "Client requirement for advanced monitoring capabilities",
        impact: "Improved dam safety monitoring, 1 month extension",
      },
      {
        id: "VAR003",
        description: "Additional environmental mitigation measures",
        value: "KES 700M",
        status: "Approved",
        date: "2024-01-10",
        reason: "Enhanced environmental protection requirements",
        impact: "Better environmental compliance, 2 weeks extension",
      },
    ],
    milestones: [
      {
        id: "MS001",
        name: "Site Mobilization",
        description: "Contractor mobilization and site establishment",
        plannedDate: "2022-06-30",
        actualDate: "2022-07-15",
        status: "Achieved",
        paymentPercentage: 5,
        dependencies: [],
      },
      {
        id: "MS002",
        name: "Foundation Excavation Complete",
        description: "Completion of dam foundation excavation",
        plannedDate: "2024-12-31",
        actualDate: "2025-01-20",
        status: "Achieved",
        paymentPercentage: 25,
        dependencies: ["MS001"],
      },
      {
        id: "MS003",
        name: "50% Dam Construction",
        description: "50% completion of dam embankment",
        plannedDate: "2027-06-30",
        status: "Pending",
        paymentPercentage: 50,
        dependencies: ["MS002"],
      },
      {
        id: "MS004",
        name: "Mechanical Works Complete",
        description: "Installation of all mechanical equipment",
        plannedDate: "2029-12-31",
        status: "Pending",
        paymentPercentage: 80,
        dependencies: ["MS003"],
      },
      {
        id: "MS005",
        name: "Project Completion",
        description: "Final completion and commissioning",
        plannedDate: "2030-09-30",
        status: "Pending",
        paymentPercentage: 100,
        dependencies: ["MS004"],
      },
    ],
  },
  {
    id: "CNT002",
    title: "High Grand Falls Dam - Feasibility Study and Design",
    contractor: "Lahmeyer International GmbH & Associates",
    project: "High Grand Falls Dam",
    projectId: "LDP002",
    value: "KES 2.5B",
    currency: "KES",
    status: "Active",
    type: "Consultancy",
    startDate: "2024-01-10",
    endDate: "2025-12-31",
    actualStartDate: "2024-01-15",
    progress: 45,
    paymentTerms: "Monthly payments based on approved deliverables and time sheets",
    retentionPercentage: 5,
    performanceBond: "KES 250M (10% of contract value)",
    advancePayment: "KES 375M (15% of contract value)",
    scope:
      "Comprehensive feasibility study, environmental impact assessment, preliminary and detailed design for High Grand Falls Dam",
    deliverables: [
      "Feasibility Study Report",
      "Environmental Impact Assessment",
      "Preliminary Design Report",
      "Detailed Design Drawings",
      "Technical Specifications",
      "Tender Documents",
    ],
    penalties: "0.05% of contract value per week for delays",
    bonuses: "Quality bonus up to 5% for exceptional deliverables",
    riskAllocation: "Consultant bears professional liability, Client bears site access and approval risks",
    disputeResolution: "Mediation followed by arbitration under ICC rules",
    governingLaw: "Laws of Kenya",
    contractManager: "Dr. Mary Wanjiku",
    technicalManager: "Prof. Sarah Kimani",
    keyPersonnel: [
      "Project Director - Dr. Klaus Mueller (Lahmeyer)",
      "Dam Engineer - Eng. Hans Weber (Lahmeyer)",
      "Environmental Specialist - Dr. Sarah Ochieng (Local Partner)",
      "Hydrologist - Dr. Michael Schneider (Lahmeyer)",
    ],
    financialSummary: {
      originalValue: "KES 2.5B",
      currentValue: "KES 2.5B",
      paidToDate: "KES 1.125B",
      pendingPayments: "KES 200M",
      retentionHeld: "KES 56.25M",
      variationsValue: "KES 0",
    },
    variations: [],
    milestones: [
      {
        id: "MS006",
        name: "Inception Report",
        description: "Project inception and methodology report",
        plannedDate: "2024-02-29",
        actualDate: "2024-03-05",
        status: "Achieved",
        paymentPercentage: 10,
        dependencies: [],
      },
      {
        id: "MS007",
        name: "Site Investigations Complete",
        description: "Completion of all field investigations",
        plannedDate: "2024-08-31",
        actualDate: "2024-09-15",
        status: "Achieved",
        paymentPercentage: 35,
        dependencies: ["MS006"],
      },
      {
        id: "MS008",
        name: "Draft Feasibility Report",
        description: "Submission of draft feasibility study",
        plannedDate: "2024-12-31",
        status: "At Risk",
        paymentPercentage: 60,
        dependencies: ["MS007"],
      },
      {
        id: "MS009",
        name: "Final Design Complete",
        description: "Completion of detailed design",
        plannedDate: "2025-09-30",
        status: "Pending",
        paymentPercentage: 90,
        dependencies: ["MS008"],
      },
      {
        id: "MS010",
        name: "Project Completion",
        description: "Final deliverables and project closure",
        plannedDate: "2025-12-31",
        status: "Pending",
        paymentPercentage: 100,
        dependencies: ["MS009"],
      },
    ],
  },
  {
    id: "CNT003",
    title: "Karimenu II Dam - Equipment Supply Contract",
    contractor: "Caterpillar Inc. & Local Partners",
    project: "Karimenu II Dam",
    projectId: "LDP003",
    value: "KES 500M",
    currency: "KES",
    status: "Completed",
    type: "Supply",
    startDate: "2020-06-01",
    endDate: "2021-12-31",
    actualStartDate: "2020-06-15",
    actualEndDate: "2022-01-15",
    progress: 100,
    paymentTerms: "30% advance, 60% on delivery, 10% after commissioning",
    retentionPercentage: 5,
    performanceBond: "KES 50M (10% of contract value)",
    advancePayment: "KES 150M (30% of contract value)",
    scope: "Supply of construction equipment, spare parts and maintenance services for Karimenu II Dam construction",
    deliverables: [
      "Excavators and Bulldozers",
      "Concrete Mixing Equipment",
      "Compaction Equipment",
      "Spare Parts Package",
      "Maintenance Training",
      "2-Year Warranty Service",
    ],
    penalties: "1% of equipment value per month for delivery delays",
    bonuses: "Early delivery bonus: 0.5% per month up to 2%",
    riskAllocation: "Supplier bears equipment performance risk, Buyer bears site conditions",
    disputeResolution: "Arbitration under LCIA rules in London",
    governingLaw: "English Law",
    contractManager: "Eng. Grace Akinyi",
    technicalManager: "Eng. Peter Ochieng",
    keyPersonnel: [
      "Supply Manager - John Smith (Caterpillar)",
      "Technical Support - Mary Johnson (Caterpillar)",
      "Local Representative - Eng. Paul Mwangi",
    ],
    financialSummary: {
      originalValue: "KES 500M",
      currentValue: "KES 500M",
      paidToDate: "KES 500M",
      pendingPayments: "KES 0",
      retentionHeld: "KES 0",
      variationsValue: "KES 0",
    },
    variations: [],
    milestones: [
      {
        id: "MS011",
        name: "Equipment Delivery",
        description: "Delivery of all construction equipment",
        plannedDate: "2021-03-31",
        actualDate: "2021-04-15",
        status: "Achieved",
        paymentPercentage: 90,
        dependencies: [],
      },
      {
        id: "MS012",
        name: "Commissioning Complete",
        description: "Equipment commissioning and training",
        plannedDate: "2021-06-30",
        actualDate: "2021-07-10",
        status: "Achieved",
        paymentPercentage: 100,
        dependencies: ["MS011"],
      },
    ],
  },
]
