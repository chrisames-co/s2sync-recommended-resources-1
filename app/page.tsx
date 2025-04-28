"use client"

import { useState } from "react"
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
  ChevronLeft,
  BookOpen,
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
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)

  // Tool cards with unique icons and colors
  const tools = [
    {
      name: "Check-in Questions",
      description: "Questions to facilitate team check-ins",
      icon: MessageCircle,
      gradient: "from-blue-500 to-indigo-600",
      trending: true,
    },
    {
      name: "Leader Pulse",
      description: "Monitor leadership effectiveness",
      icon: HeartPulse,
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "261",
      description: "Strategic planning framework",
      icon: Hash,
      gradient: "from-green-500 to-teal-600",
    },
    {
      name: "6 Dimensions of Compensation",
      description: "Comprehensive compensation strategy",
      icon: Layers,
      gradient: "from-orange-500 to-red-600",
    },
    {
      name: "Leverage",
      description: "Maximize team productivity and impact",
      icon: TrendingUp,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      name: "Diagnostic",
      description: "Identify organizational challenges",
      icon: Stethoscope,
      gradient: "from-amber-500 to-orange-600",
    },
  ]

  // Book cards with unique icons and colors
  const books = [
    {
      name: "Renegades",
      author: "Benj Miller and McKenzie Decker",
      icon: Flag,
      gradient: "from-red-500 to-pink-600",
      trending: true,
    },
    {
      name: "Clarity Field Guide",
      author: "Benj Miller and Chris White",
      icon: Compass,
      gradient: "from-blue-500 to-cyan-600",
      trending: true,
    },
    {
      name: "The Only Leaders Worth Following",
      author: "Tim Spiker",
      icon: Crown,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      name: "Zag",
      author: "Marty Neumeier",
      icon: ZigZag,
      gradient: "from-yellow-500 to-amber-600",
    },
    {
      name: "Good to Great",
      author: "Jim Collins",
      icon: Award,
      gradient: "from-emerald-500 to-green-600",
    },
    {
      name: "Culture Code",
      author: "Daniel Coyle",
      icon: Users,
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      name: "Leadership and Self Deception",
      author: "The Arbinger Institute",
      icon: Eye,
      gradient: "from-indigo-500 to-violet-600",
    },
    {
      name: "Start with Why",
      author: "Simon Sinek",
      icon: Target,
      gradient: "from-rose-500 to-red-600",
    },
    {
      name: "Positioning & Focus",
      author: "Al Ries",
      icon: Crosshair,
      gradient: "from-sky-500 to-blue-600",
    },
    {
      name: "5 Dysfunctions of a team",
      author: "Patrick Lencioni",
      icon: AlertTriangle,
      gradient: "from-orange-500 to-amber-600",
    },
    {
      name: "The Advantage",
      author: "Patrick Lencioni",
      icon: Trophy,
      gradient: "from-lime-500 to-green-600",
    },
    {
      name: "7 Habits of Highly Effective People",
      author: "Stephen Covey",
      icon: CheckSquare,
      gradient: "from-fuchsia-500 to-purple-600",
    },
    {
      name: "Thinking in Bets",
      author: "Annie Duke",
      icon: DiceIcon,
      gradient: "from-slate-500 to-gray-600",
    },
    {
      name: "Measure What Matters",
      author: "John Doerr",
      icon: Ruler,
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Rockefeller Habits",
      author: "Verne Harnish",
      icon: Building,
      gradient: "from-blue-500 to-indigo-600",
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

        {/* Collapse button */}
        <button
          className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-[#2d3748] text-white p-1 rounded-r"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
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
        <main className="p-6 space-y-12">
          {/* Tools Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Layers className="w-5 h-5 mr-2 text-gray-700" />
              <h2 className="text-xl font-semibold">Tools</h2>
            </div>
            <ScrollArea className="w-full pb-6">
              <div className="flex space-x-4 p-1">
                {tools.map((tool, index) => {
                  const Icon = tool.icon
                  return (
                    <Card
                      key={index}
                      className="w-[280px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow rounded-[12px] relative overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div
                          className={`h-32 bg-gradient-to-r ${tool.gradient} flex items-center justify-center rounded-t-[12px] relative`}
                        >
                          {tool.trending && (
                            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              <span className="text-xs font-medium">TRENDING</span>
                            </div>
                          )}
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-lg mb-2 break-words">{tool.name}</h3>
                          <p className="text-sm text-gray-500 break-words min-h-[40px]">{tool.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>

          {/* Books Section */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <BookOpen className="w-5 h-5 mr-2 text-gray-700" />
              <h2 className="text-xl font-semibold">Books</h2>
            </div>
            <ScrollArea className="w-full pb-6">
              <div className="flex space-x-4 p-1">
                {books.map((book, index) => {
                  const Icon = book.icon
                  return (
                    <Card
                      key={index}
                      className="w-[250px] flex-shrink-0 shadow-md hover:shadow-lg transition-shadow rounded-[12px] relative overflow-hidden"
                    >
                      <CardContent className="p-0">
                        <div
                          className={`h-48 bg-gradient-to-r ${book.gradient} flex items-center justify-center rounded-t-[12px] relative`}
                        >
                          {book.trending && (
                            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 mr-1" />
                              <span className="text-xs font-medium">TRENDING</span>
                            </div>
                          )}
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-lg mb-2 break-words">{book.name}</h3>
                          <p className="text-sm text-gray-500 break-words min-h-[20px]">{book.author}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </section>
        </main>
      </div>
    </div>
  )
}

