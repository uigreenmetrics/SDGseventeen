export interface Initiative {
  id: string;
  title: string;
  body: string;
}

export interface Subcategory {
  name: string;
  initiatives: Initiative[];
}

export interface InitiativeGroup {
  name: string;
  subcategories: Subcategory[];
}

export const initiativeGroups: InitiativeGroup[] = [
  {
    name: "17.2 Relationship to Support the Goals",
    subcategories: [
      {
        name: "17.2.1 Relationships with Regional NGOs and Government for SDG Policy",
        initiatives: [
          {
            id: "17.2.1",
            title: "A Network of 192 Active Partnerships",
            body: "ESSU solidifies its role in regional development and public policy by maintaining an extensive network of 192 active institutional partnerships across its multi-campus system for Calendar Year 2025. Geographically distributed across local (156), regional (20), national (14), and international (2) tiers, these alliances connect the Main Campus (111 partners) and satellite campuses in Salcedo (26), Can-avid (22), Maydolong (13), Guiuan (10), and Arteche (10) with local government units, national line agencies, and private sectors. Key policy and governance alignments include establishing an SSS social protection safety net for Contract of Service and Job Order workers under Republic Act 11199; aligning human resource operations with DBM-COA Joint Circular No. 2 (s. 2024); contributing to tertiary education legislative reforms with the Congressional Committee on Higher and Technical Education; and auditing DOST-funded smart technology platforms like Borongan City's Libre Sakay and Healthsync system. ESSU further executes national public safety mandates through the National Simultaneous Earthquake Drill, implements CHED Tertiary Education Subsidy (TES) directives linked to DSWD Listahanan, operationalizes the New Government Procurement Act (RA 12009) with DBM Region VIII, recalibrates its five-year strategic roadmap around CHED policy agendas, collaborates with the Commission on Human Rights to establish a regional Center for Human Rights Education, honors faculty alongside provincial leaders on World Teachers' Day, trains record handlers with the National Archives of the Philippines, renews its anti-poverty 4Ps extension framework with DSWD Field Office VIII, and advances the establishment of the ESSU-DILG Governance Centre to build local leadership capacity.",
          },
        ],
      },
      {
        name: "17.2.2 Cross-Sectoral Dialogue about SDGs",
        initiatives: [
          {
            id: "17.2.2",
            title: "Cross-Sectoral Dialogue Through TESO",
            body: "ESSU promotes inclusive, cross-sectoral dialogue on sustainable development by regularly convening partner communities, local stakeholders, and government agencies to align regional development goals. Through its Training and Extension Services Office (TESO), the University conducted a comprehensive Stakeholders' Meeting and official launch of new extension programs supported by the Department of Science and Technology (DOST). This consultative engagement brought together local leaders, community organization members, and academic heads to identify priority development concerns, facilitate knowledge transfer, and implement science- and technology-based interventions tailored to community needs. By prioritizing participatory planning and shared ownership, ESSU ensures that its extension initiatives remain community-driven and directly supportive of SDG 17 objectives.",
          },
        ],
      },
      {
        name: "17.2.3 International Collaboration Data Gathering for SDGs",
        initiatives: [
          {
            id: "17.2.3",
            title: "International Disaster Risk Research Collaboration",
            body: "ESSU engages in international and regional data-gathering collaborations to strengthen empirical research on disaster risk management and community monitoring. During the 12th International Conference on Integrative Disaster Risk Reduction Management (ICIDRRM), ESSU joined academic institutions from across Luzon, Visayas, and Mindanao to exchange data on climate resilience, socio-ecological landscape preparedness, and disaster risk education, featuring insights from science diplomat Glenn S. Banaguas and regional civil defense officials. Additionally, ESSU student-researchers demonstrated high-level data handling and analysis at the 2025 Regional Community-Based Monitoring System (CBMS) Convention and Data Festival in Tacloban City, securing top institutional awards in data reporting, visualization, and demographic tracking to support evidence-based public planning.",
          },
        ],
      },
      {
        name: "17.2.4 Collaboration for SDG Best Practice",
        initiatives: [
          {
            id: "17.2.4",
            title: "International Industry Mobility with SIAP & OBEI",
            body: "ESSU collaborates with international industry partners and global educational bodies to benchmark best practices and enhance experiential learning. Under the Student Internship Abroad Program (SIAP) and in partnership with Outbound Education & Internships Inc. (OBEI), ESSU facilitated a six-month international training placement for hospitality student-interns from the Guiuan and Borongan campuses at The Peninsula Bangkok in Thailand. Comprehensive post-travel debriefings and qualitative data collection provided the University with critical global performance standards, enabling administrators to align local technical curricula with international industry requirements and expand cross-border academic mobility.",
          },
        ],
      },
      {
        name: "17.2.5 Collaboration with NGOs for SDGs",
        initiatives: [
          {
            id: "17.2.5",
            title: "NGO & Agency Partnerships for Socio-Economic Impact",
            body: "ESSU actively collaborates with non-governmental organizations, national agencies, and secondary schools to deliver integrated socio-economic support and environmental stewardship. Partnering with the Department of Social Welfare and Development (DSWD) Field Office VIII under the KALAHI-CIDSS Cash-for-Work Program, ESSU hosted an employment matching forum and payout assembly that engaged the Civil Service Commission, SSS, PhilHealth, and DOLE to transition graduate beneficiaries into the workforce. On environmental governance, ESSU partnered with Bolusao National High School, Samar State University, and the University of the Philippines under Project SAMWAKAN to deliver specialized conservation education on Samar Island's forest over limestone ecosystems, empowering youth with scientific literacy for local ecological protection.",
          },
        ],
      },
    ],
  },
  {
    name: "17.3 Publication of SDG Reports: SDG 1 to 17",
    subcategories: [
      {
        name: "Comprehensive SDG Reporting",
        initiatives: [
          {
            id: "17.3.1",
            title: "Institutional SDG Reporting Across All 17 Goals",
            body: "Eastern Samar State University (ESSU) demonstrates its commitment to transparency and public accountability by publishing comprehensive reports mapping its institutional activities, policies, and partnerships against all 17 Sustainable Development Goals. These reports document the University's contributions to poverty alleviation, food security, health and well-being, quality education, gender equality, clean water, affordable energy, decent work, infrastructure, reduced inequalities, sustainable communities, responsible consumption, climate action, life below water, life on land, peace and justice, and partnerships. Through annual sustainability disclosures and publicly accessible digital repositories, ESSU ensures that stakeholders, partner agencies, and the wider community can track progress, benchmark performance, and identify areas for collaborative improvement toward the 2030 Agenda.",
          },
        ],
      },
    ],
  },
  {
    name: "17.4 Education for the SDGs",
    subcategories: [
      {
        name: "17.4.1 Education for SDGs: Commitment to Meaningful Education",
        initiatives: [
          {
            id: "17.4.1",
            title: "Sustainability Embedded in Institutional Operations",
            body: "ESSU embeds meaningful sustainability into its core institutional operations through strategic policy alignment, digital infrastructure, student mental health initiatives, and campus-wide environmental stewardship. Under Board of Regents (BOR) Resolution No. 207, series of 2025, the University ratified its 2025-2030 Development Plan, embedding a 7-point agenda focused on green architecture, workforce upskilling, research innovation, and transparent governance. Academic continuity and equitable learning access are supported by the ESSU Main Library's expansion of virtual services and digital repositories (including Gale Research Complete and Philippine E-Journals). To support institutional mental health under RA 9258 and the Data Privacy Act, the Guidance and Counselling Services Center deployed remote Psychological First Aid and stress debriefing frameworks. Additionally, ESSU integrated environmental action into campus life through a Charter Week tree-planting drive and systematic waste management mobilization across designated grounds.",
          },
        ],
      },
      {
        name: "17.4.2 Education for SDGs: Specific Courses on Sustainability",
        initiatives: [
          {
            id: "17.4.2",
            title: "Inter-Agency Tree Growing & Worker Welfare",
            body: "ESSU integrates practical sustainability concepts and worker welfare into institutional activities and inter-agency environmental programs. In alignment with the 125th Philippine Civil Service Anniversary, ESSU joined the Civil Service Commission (CSC) and the Borongan City Environment and Natural Resources Office (CENRO) in an Inter-Agency Tree Growing Engagement in Barangay Hebacong, planting 500 indigenous seedlings (Kulipapa, Bagonito, and Patsaragon) to strengthen regional forest cover and climate adaptation. Furthermore, ESSU operationalized DBM Circular No. 2024-6 through a multi-campus democratic voting process, allowing civilian personnel to select Kaiser International Healthgroup, Inc. to maximize their annual state health allowance.",
          },
        ],
      },
      {
        name: "17.4.3 Education for SDGs in the Wider Community",
        initiatives: [
          {
            id: "17.4.3",
            title: "Education Expertise Shared with the Community",
            body: "ESSU extends educational expertise to the wider community through professional development initiatives and free test preparation programs. In partnership with the Department of Education (DepEd) Eastern Samar Division, the ESSU Main Campus Graduate School launched Project TUL-ID, a three-day intensive seminar-workshop that trained basic education research coordinators and master teachers in action research methodology, publishable writing, and evidence-based classroom interventions. Additionally, ESSU established a Free Online National Medical Admission Test (NMAT) Review Program for qualified students and alumni, eliminating financial barriers to advanced medical training and strengthening the regional healthcare pipeline.",
          },
          {
            id: "17.4.4 Sustainable Literacy",
            title: "Grassroots Literacy & Regional Policy Dialogue",
            body: 'ESSU advances sustainable literacy and evidence-based regional planning through grassroots extension projects and high-level policy dialogue. Through the "BEED LINE" extension project, faculty and pre-service teacher volunteers from the ESSU Guiuan Campus conducted primary reading and writing literacy workshops for elementary pupils in the St. Genevieve Covered Court and Barangay Sapao. At the regional planning level, ESSU executive leadership convened with Department of Economy, Planning, and Development (DEPDev) Region VIII Director Meylene C. Rosales to align provincial extension policies, ensuring university research directly informs localized livelihood interventions and economic vulnerability reduction programs across Eastern Samar.',
          },
        ],
      },
    ],
  },
];

export const stats = [
  { value: "192", label: "Active Partnerships", sublabel: "Calendar Year 2025" },
  { value: "156", label: "Local Partners", sublabel: "Across Eastern Samar" },
  { value: "6", label: "Campuses Connected", sublabel: "Multi-campus system" },
  { value: "2", label: "International Linkages", sublabel: "Cross-border mobility" },
];

export const partnerTiers = [
  { tier: "Local", count: 156, color: "from-amber-300 to-amber-500" },
  { tier: "Regional", count: 20, color: "from-amber-400 to-amber-600" },
  { tier: "National", count: 14, color: "from-emerald-400 to-emerald-600" },
  { tier: "International", count: 2, color: "from-emerald-500 to-emerald-700" },
];

export const campusBreakdown = [
  { campus: "Main Campus", partners: 111 },
  { campus: "Salcedo", partners: 26 },
  { campus: "Can-avid", partners: 22 },
  { campus: "Maydolong", partners: 13 },
  { campus: "Guiuan", partners: 10 },
  { campus: "Arteche", partners: 10 },
];

export const groupAccent: Record<number, { ring: string; badge: string; bar: string; dot: string }> = {
  0: { ring: "ring-emerald-200", badge: "bg-emerald-100 text-emerald-700", bar: "from-emerald-400 to-emerald-600", dot: "bg-emerald-500" },
  1: { ring: "ring-amber-200", badge: "bg-amber-100 text-amber-700", bar: "from-amber-400 to-amber-600", dot: "bg-amber-500" },
  2: { ring: "ring-sky-200", badge: "bg-sky-100 text-sky-700", bar: "from-sky-400 to-sky-600", dot: "bg-sky-500" },
};
