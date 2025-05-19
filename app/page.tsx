"use client"

import {
  Book,
  BarChart3,
  Calendar,
  LineChart,
  Zap,
  ClipboardList,
  Sparkles,
  Activity,
  MoreHorizontal,
  ChevronDown,
  MessageCircle,
  HeartPulse,
  Hash,
  Layers,
  TrendingUp,
  Stethoscope,
  BookOpen,
  FileText,
  Globe,
  Library,
  ArrowRight,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Dashboard() {
  // Define brand colors
  const brandColors = {
    primary: ["#4D80F3", "#3C4258", "#EB078B"],
    accent: ["#542E7B", "#E8DF76", "#4A8762", "#E4B859", "#3FB4E4"],
  }

  // Function to generate gradient pairs from brand colors
  const getGradientPair = (index) => {
    const allColors = [...brandColors.primary, ...brandColors.accent]
    const color1 = allColors[index % allColors.length]
    const color2 = allColors[(index + 2) % allColors.length]
    return { color1, color2 }
  }

  // Replace the tools array with the data from the CSV file
  // Update the tools array with the data from the CSV file
  const tools = [
    {
      name: "Check-in Questions",
      description: "Questions to facilitate team check-ins and create meaningful conversations in your meetings.",
      icon: MessageCircle,
      gradient: getGradientPair(0),
      resourceType: "Guide",
      url: "https://systemandsoul.com/check-ins",
      helpsWith: ["Team Building", "Communication", "Meeting Effectiveness"],
    },
    {
      name: "Leader Pulse",
      description: "Monitor leadership effectiveness and get real-time feedback on your leadership performance.",
      icon: HeartPulse,
      gradient: getGradientPair(1),
      resourceType: "Platform",
      url: "https://www.systemandsoul.com/leadershippulse",
      helpsWith: ["Leadership Development", "Team Feedback", "Performance Improvement"],
    },
    {
      name: "261",
      description: "Strategic planning framework to align your team around what matters most.",
      icon: Hash,
      gradient: getGradientPair(2),
      resourceType: "Guide",
      url: "https://www.systemandsoul.com/261",
      helpsWith: ["Strategic Planning", "Team Alignment", "Goal Setting"],
    },
    {
      name: "6 Dimensions of Compensation",
      description: "Comprehensive compensation strategy to attract and retain top talent.",
      icon: Layers,
      gradient: getGradientPair(3),
      resourceType: "Guide",
      url: "https://www.systemandsoul.com/6doc",
      helpsWith: ["Compensation Planning", "Talent Management", "Employee Retention"],
    },
    {
      name: "Leverage",
      description:
        "Maximize team productivity and impact by identifying and focusing on your highest-leverage activities.",
      icon: TrendingUp,
      gradient: getGradientPair(4),
      resourceType: "Platform",
      url: "https://s2leverage.com",
      helpsWith: ["Productivity", "Time Management", "Team Effectiveness"],
    },
    {
      name: "Diagnostic",
      description: "Identify organizational challenges and get a clear picture of your company's health.",
      icon: Stethoscope,
      gradient: getGradientPair(5),
      resourceType: "Platform",
      url: "https://s2diagnostic.com",
      helpsWith: ["Organizational Health", "Problem Identification", "Business Assessment"],
    },
  ]

  // Book count for the Books card
  const bookCount = 14 // Number of books in the books page

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div className="relative flex flex-col w-64 bg-[#2d3748] text-white">
        {/* Header */}
        <div className="p-4 border-b border-[#3d4a5f]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold">System & Soul</h1>
              <p className="text-sm text-gray-400">Technology</p>
            </div>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-2">
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <Book className="w-5 h-5 mr-3" />
                <span>S2 Road Map</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <BarChart3 className="w-5 h-5 mr-3" />
                <span>Org Chart</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <Calendar className="w-5 h-5 mr-3" />
                <span>Meetings</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <LineChart className="w-5 h-5 mr-3" />
                <span>Scoreboard</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <Zap className="w-5 h-5 mr-3" />
                <span>Objectives</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <ClipboardList className="w-5 h-5 mr-3" />
                <span>Actions</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <Sparkles className="w-5 h-5 mr-3" />
                <span>Opportunities</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-[#252e3d] hover:text-white">
                <Activity className="w-5 h-5 mr-3" />
                <span>Healthy F.I.T.</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-3 bg-[#252e3d] text-white">
                <Book className="w-5 h-5 mr-3" />
                <span>Resources</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {Array.from({ length: 10 }).map((_, i) => (
              <circle key={i} cx={Math.random() * 100 + "%"} cy={Math.random() * 100 + "%"} r="2" fill="white" />
            ))}
            {Array.from({ length: 15 }).map((_, i) => (
              <line
                key={i}
                x1={Math.random() * 100 + "%"}
                y1={Math.random() * 100 + "%"}
                x2={Math.random() * 100 + "%"}
                y2={Math.random() * 100 + "%"}
                stroke="white"
                strokeWidth="0.5"
              />
            ))}
          </svg>
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-[#3d4a5f]">
          <div className="p-4">
            <div className="flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-bold uppercase">System & Soul</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border-t border-[#3d4a5f]">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>CA</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Chris Ames</p>
                <p className="text-xs text-gray-400">yo@chrisam.es</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="4" r="1" fill="currentColor" />
                <circle cx="8" cy="8" r="1" fill="currentColor" />
                <circle cx="8" cy="12" r="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold mr-2">Recommended Resources</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Export</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Introduction */}
        <div className="px-6 pt-6 pb-2">
          <p className="text-gray-600 max-w-4xl mb-3">
            Curated tools, guides, and platforms to help leaders build healthier teams, make smarter decisions, and
            drive meaningful progress.
          </p>
          <p className="text-gray-600 max-w-4xl">
            Whether you're aligning your vision, leveling up your leadership, or tackling tough organizational
            challenges, these resources are designed to give you clarity and momentum where it matters most.
          </p>
        </div>

        {/* Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
            {/* Tool cards */}
            {tools.map((tool, index) => {
              const Icon = tool.icon

              // Function to get the appropriate icon for the resource type
              const getResourceTypeIcon = (type) => {
                switch (type) {
                  case "Guide":
                    return FileText
                  case "Platform":
                    return Globe
                  default:
                    return FileText
                }
              }

              const ResourceTypeIcon = getResourceTypeIcon(tool.resourceType)

              return (
                <Card
                  key={index}
                  className={`shadow-md group transition-all duration-300 ease-in-out rounded-[12px] relative overflow-hidden w-full ${
                    tool.url
                      ? "cursor-pointer hover:shadow-xl hover:translate-y-[-4px] hover:ring-2 hover:ring-[#4D80F3]/40"
                      : ""
                  }`}
                  onClick={() => tool.url && window.open(tool.url, "_blank")}
                >
                  <CardContent className="p-0 flex flex-col h-full w-full">
                    <div
                      className="h-40 flex items-center justify-center rounded-t-[12px] relative w-full"
                      style={{
                        background: `linear-gradient(to right, ${tool.gradient.color1}, ${tool.gradient.color2})`,
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                        <ResourceTypeIcon className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">{tool.resourceType.toUpperCase()}</span>
                      </div>
                      <Icon
                        className={`h-[3.4rem] w-[3.4rem] text-white drop-shadow-lg mt-3 ${
                          tool.url
                            ? "transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            : ""
                        }`}
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col min-h-[200px]">
                      <h3
                        className={`font-semibold text-lg mb-2 line-clamp-2 ${
                          tool.url ? "group-hover:text-[#4D80F3] transition-colors duration-300" : ""
                        }`}
                      >
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-3 mb-4">{tool.description}</p>

                      {/* Add the "Helps with" section here */}
                      {tool.helpsWith && tool.helpsWith.length > 0 && (
                        <div className="mt-auto">
                          <p className="text-xs font-bold text-black mb-1">HELPS WITH</p>
                          <div className="flex flex-wrap gap-1">
                            {tool.helpsWith.map((tag, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full whitespace-nowrap"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}

            {/* Books Card */}
            <Card
              className="shadow-md group transition-all duration-300 ease-in-out rounded-[12px] relative overflow-hidden w-full cursor-pointer hover:shadow-xl hover:translate-y-[-4px] hover:ring-2 hover:ring-[#4D80F3]/40"
              onClick={() => {}}
            >
              <Link href="/books" className="h-full w-full block">
                <CardContent className="p-0 flex flex-col h-full w-full">
                  <div
                    className="h-40 flex items-center justify-center rounded-t-[12px] relative w-full"
                    style={{
                      background: `linear-gradient(to right, ${brandColors.primary[0]}, ${brandColors.accent[0]})`,
                    }}
                  >
                    <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      <span className="text-xs font-medium">COLLECTION</span>
                    </div>
                    <Library
                      className="h-[3.4rem] w-[3.4rem] text-white drop-shadow-lg mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col min-h-[200px]">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-[#4D80F3] transition-colors duration-300">
                        Books
                      </h3>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#4D80F3] transition-colors duration-300" />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-3">
                      Our recommended books for business leaders and teams.
                    </p>
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
