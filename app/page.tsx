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
  Flag,
  Compass,
  Crown,
  HexagonIcon as ZigZag,
  Award,
  Users,
  Eye,
  Target,
  Crosshair,
  AlertTriangle,
  Trophy,
  CheckSquare,
  Dice1Icon as DiceIcon,
  Ruler,
  Building,
  BookOpen,
  FileText,
  Globe,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"

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
    return `from-[${color1}] to-[${color2}]`
  }

  // Tool cards with unique icons and colors
  const tools = [
    {
      name: "Check-in Questions",
      description: "Questions to facilitate team check-ins",
      icon: MessageCircle,
      gradient: getGradientPair(0),
      resourceType: "Guide",
      url: "https://systemandsoul.com/check-ins",
    },
    {
      name: "Leader Pulse",
      description: "Monitor leadership effectiveness",
      icon: HeartPulse,
      gradient: getGradientPair(1),
      resourceType: "Platform",
      url: "https://www.systemandsoul.com/leadershippulse",
    },
    {
      name: "261",
      description: "Strategic planning framework",
      icon: Hash,
      gradient: getGradientPair(2),
      resourceType: "Guide",
      url: "https://www.systemandsoul.com/261",
    },
    {
      name: "6 Dimensions of Compensation",
      description: "Comprehensive compensation strategy",
      icon: Layers,
      gradient: getGradientPair(3),
      resourceType: "Guide",
      url: "https://www.systemandsoul.com/6doc",
    },
    {
      name: "Leverage",
      description: "Maximize team productivity and impact",
      icon: TrendingUp,
      gradient: getGradientPair(4),
      resourceType: "Platform",
      url: "https://s2leverage.com",
    },
    {
      name: "Diagnostic",
      description: "Identify organizational challenges",
      icon: Stethoscope,
      gradient: getGradientPair(5),
      resourceType: "Platform",
      url: "https://s2diagnostic.com",
    },
  ]

  // Book cards with unique icons and colors
  const books = [
    {
      name: "Renegades",
      author: "Benj Miller and McKenzie Decker",
      icon: Flag,
      gradient: getGradientPair(6),
      resourceType: "Book",
      url: "https://www.amazon.com/Renegades-Benj-Miller/dp/1732011003",
    },
    {
      name: "Clarity Field Guide",
      author: "Benj Miller and Chris White",
      icon: Compass,
      gradient: getGradientPair(7),
      resourceType: "Guide",
      url: "", // No URL provided
    },
    {
      name: "The Only Leaders Worth Following",
      author: "Tim Spiker",
      icon: Crown,
      gradient: getGradientPair(0),
      resourceType: "Book",
      url: "https://www.amazon.com/Only-Leaders-Worth-Following-Transformational/dp/0996403604",
    },
    {
      name: "Zag",
      author: "Marty Neumeier",
      icon: ZigZag,
      gradient: getGradientPair(1),
      resourceType: "Book",
      url: "https://www.amazon.com/Zag-Strategy-High-Performance-Brands/dp/0321426770",
    },
    {
      name: "Good to Great",
      author: "Jim Collins",
      icon: Award,
      gradient: getGradientPair(2),
      resourceType: "Book",
      url: "https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996",
    },
    {
      name: "Culture Code",
      author: "Daniel Coyle",
      icon: Users,
      gradient: getGradientPair(3),
      resourceType: "Book",
      url: "https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981",
    },
    {
      name: "Leadership and Self Deception",
      author: "The Arbinger Institute",
      icon: Eye,
      gradient: getGradientPair(4),
      resourceType: "Book",
      url: "https://www.amazon.com/Leadership-Self-Deception-Getting-Out-Box/dp/1576759776",
    },
    {
      name: "Start with Why",
      author: "Simon Sinek",
      icon: Target,
      gradient: getGradientPair(5),
      resourceType: "Book",
      url: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
    },
    {
      name: "Positioning & Focus",
      author: "Al Ries",
      icon: Crosshair,
      gradient: getGradientPair(6),
      resourceType: "Book",
      url: "https://www.amazon.com/Positioning-Battle-Your-Mind-Anniversary/dp/0071373586",
    },
    {
      name: "5 Dysfunctions of a team",
      author: "Patrick Lencioni",
      icon: AlertTriangle,
      gradient: getGradientPair(7),
      resourceType: "Book",
      url: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756",
    },
    {
      name: "The Advantage",
      author: "Patrick Lencioni",
      icon: Trophy,
      gradient: getGradientPair(0),
      resourceType: "Book",
      url: "https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529",
    },
    {
      name: "7 Habits of Highly Effective People",
      author: "Stephen Covey",
      icon: CheckSquare,
      gradient: getGradientPair(1),
      resourceType: "Book",
      url: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
    },
    {
      name: "Thinking in Bets",
      author: "Annie Duke",
      icon: DiceIcon,
      gradient: getGradientPair(2),
      resourceType: "Book",
      url: "https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355",
    },
    {
      name: "Measure What Matters",
      author: "John Doerr",
      icon: Ruler,
      gradient: getGradientPair(3),
      resourceType: "Book",
      url: "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221",
    },
    {
      name: "Rockefeller Habits",
      author: "Verne Harnish",
      icon: Building,
      gradient: getGradientPair(4),
      resourceType: "Book",
      url: "https://www.amazon.com/Scaling-Up-Mastering-Rockefeller-Habits/dp/0986019526",
    },
  ]

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
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              Active
            </Badge>
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

        {/* Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto">
            {/* Combined resources */}
            {[...tools, ...books].map((resource, index) => {
              const Icon = resource.icon
              const isBook = "author" in resource

              // Function to get the appropriate icon for the resource type
              const getResourceTypeIcon = (type) => {
                switch (type) {
                  case "Book":
                    return BookOpen
                  case "Guide":
                    return FileText
                  case "Platform":
                    return Globe
                  default:
                    return BookOpen
                }
              }

              const ResourceTypeIcon = getResourceTypeIcon(resource.resourceType)

              // Extract gradient colors from the string
              const gradientClass = resource.gradient

              return (
                <Card
                  key={index}
                  className={`shadow-md group transition-all duration-300 ease-in-out rounded-[12px] relative overflow-hidden w-full h-[320px] ${
                    resource.url
                      ? "cursor-pointer hover:shadow-xl hover:translate-y-[-4px] hover:ring-2 hover:ring-[#4D80F3]/40"
                      : ""
                  }`}
                  onClick={() => resource.url && window.open(resource.url, "_blank")}
                >
                  <CardContent className="p-0 flex flex-col h-full w-full">
                    <div
                      className={`h-40 bg-gradient-to-r ${gradientClass} flex items-center justify-center rounded-t-[12px] relative w-full`}
                    >
                      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                        <ResourceTypeIcon className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">{resource.resourceType.toUpperCase()}</span>
                      </div>
                      <Icon
                        className={`h-[3.4rem] w-[3.4rem] text-white drop-shadow-lg mt-3 ${
                          resource.url
                            ? "transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            : ""
                        }`}
                        strokeWidth={1.8} // Reduced by 10% from default 2.0
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className={`font-semibold text-lg mb-2 line-clamp-2 ${
                          resource.url ? "group-hover:text-[#4D80F3] transition-colors duration-300" : ""
                        }`}
                      >
                        {resource.name}
                      </h3>
                      {isBook ? (
                        <p className="text-sm text-gray-500 line-clamp-3">{resource.author}</p>
                      ) : (
                        <p className="text-sm text-gray-500 line-clamp-3">{resource.description}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
