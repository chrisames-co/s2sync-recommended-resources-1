"use client"

import {
  Book,
  MoreHorizontal,
  ChevronDown,
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
  ArrowLeft,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function BooksPage() {
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

  // Book cards with unique icons and colors
  const books = [
    {
      name: "Renegades",
      author: "Benj Miller and McKenzie Decker",
      description: "What if feeling out of place in business means you're meant to build something entirely new?",
      icon: Flag,
      gradient: getGradientPair(6),
      resourceType: "Book",
      url: "https://www.amazon.com/Renegades-Benj-Miller/dp/1732011003",
    },
    {
      name: "Clarity Field Guide",
      author: "Benj Miller and Chris White",
      description: "This workbook helps you cut through the noise and refocus on what really matters.",
      icon: Compass,
      gradient: getGradientPair(7),
      resourceType: "Guide",
      url: "", // No URL provided
    },
    {
      name: "The Only Leaders Worth Following",
      author: "Tim Spiker",
      description: "Learn why the most impactful leaders focus on inward growth.",
      icon: Crown,
      gradient: getGradientPair(0),
      resourceType: "Book",
      url: "https://www.amazon.com/Only-Leaders-Worth-Following-Transformational/dp/0996403604",
    },
    {
      name: "Zag",
      author: "Marty Neumeier",
      description: "When everyone zigs, the key to success is learning how—and when—to zag.",
      icon: ZigZag,
      gradient: getGradientPair(1),
      resourceType: "Book",
      url: "https://www.amazon.com/Zag-Strategy-High-Performance-Brands/dp/0321426770",
    },
    {
      name: "Good to Great",
      author: "Jim Collins",
      description: "Some companies make the leap from good to great. This reveals how they do it.",
      icon: Award,
      gradient: getGradientPair(2),
      resourceType: "Book",
      url: "https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996",
    },
    {
      name: "Culture Code",
      author: "Daniel Coyle",
      description: "Behind every great team is a set of unwritten rules. This book helps you find them.",
      icon: Users,
      gradient: getGradientPair(3),
      resourceType: "Book",
      url: "https://www.amazon.com/Culture-Code-Secrets-Highly-Successful/dp/0804176981",
    },
    {
      name: "Leadership and Self Deception",
      author: "The Arbinger Institute",
      description: "Sometimes the biggest leadership problem is hiding in the mirror.",
      icon: Eye,
      gradient: getGradientPair(4),
      resourceType: "Book",
      url: "https://www.amazon.com/Leadership-Self-Deception-Getting-Out-Box/dp/1576759776",
    },
    {
      name: "Start with Why",
      author: "Simon Sinek",
      description: "When you lead with purpose, people don't just follow—they believe.",
      icon: Target,
      gradient: getGradientPair(5),
      resourceType: "Book",
      url: "https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447",
    },
    {
      name: "Positioning & Focus",
      author: "Al Ries",
      description: "The most successful brands win by owning one idea in the customer's mind.",
      icon: Crosshair,
      gradient: getGradientPair(6),
      resourceType: "Book",
      url: "https://www.amazon.com/Positioning-Battle-Your-Mind-Anniversary/dp/0071373586",
    },
    {
      name: "5 Dysfunctions of a team",
      author: "Patrick Lencioni",
      description: "Every team struggles in predictable ways. Here's how to build real trust and results.",
      icon: AlertTriangle,
      gradient: getGradientPair(7),
      resourceType: "Book",
      url: "https://www.amazon.com/Five-Dysfunctions-Team-Leadership-Fable/dp/0787960756",
    },
    {
      name: "The Advantage",
      author: "Patrick Lencioni",
      description: "Organizational health isn't optional—it's your biggest edge in business.",
      icon: Trophy,
      gradient: getGradientPair(0),
      resourceType: "Book",
      url: "https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529",
    },
    {
      name: "7 Habits of Highly Effective People",
      author: "Stephen Covey",
      description: "These timeless habits reshape how you live, work, and lead.",
      icon: CheckSquare,
      gradient: getGradientPair(1),
      resourceType: "Book",
      url: "https://www.amazon.com/Habits-Highly-Effective-People-Powerful/dp/0743269519",
    },
    {
      name: "Thinking in Bets",
      author: "Annie Duke",
      description: "To make better decisions, start thinking like a poker player, not a perfectionist.",
      icon: DiceIcon,
      gradient: getGradientPair(2),
      resourceType: "Book",
      url: "https://www.amazon.com/Thinking-Bets-Making-Smarter-Decisions/dp/0735216355",
    },
    {
      name: "Measure What Matters",
      author: "John Doerr",
      description: "OKRs help teams focus, align, and perform. This book shows how to use them well.",
      icon: Ruler,
      gradient: getGradientPair(3),
      resourceType: "Book",
      url: "https://www.amazon.com/Measure-What-Matters-Google-Foundation/dp/0525536221",
    },
    {
      name: "Rockefeller Habits",
      author: "Verne Harnish",
      description: "Fast-growing companies run on rhythms. These habits keep them scaling with clarity.",
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
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-2xl font-semibold mr-2">Recommended Books</h1>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              {books.length} Books
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
            {/* Book cards */}
            {books.map((book, index) => {
              const Icon = book.icon

              return (
                <Card
                  key={index}
                  className={`shadow-md group transition-all duration-300 ease-in-out rounded-[12px] relative overflow-hidden w-full h-[320px] ${
                    book.url
                      ? "cursor-pointer hover:shadow-xl hover:translate-y-[-4px] hover:ring-2 hover:ring-[#4D80F3]/40"
                      : ""
                  }`}
                  onClick={() => book.url && window.open(book.url, "_blank")}
                >
                  <CardContent className="p-0 flex flex-col h-full w-full">
                    <div
                      className="h-40 flex items-center justify-center rounded-t-[12px] relative w-full"
                      style={{
                        background: `linear-gradient(to right, ${book.gradient.color1}, ${book.gradient.color2})`,
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 flex items-center justify-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">BOOK</span>
                      </div>
                      <Icon
                        className={`h-[3.4rem] w-[3.4rem] text-white drop-shadow-lg mt-3 ${
                          book.url
                            ? "transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                            : ""
                        }`}
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className={`font-semibold text-lg mb-2 line-clamp-2 ${
                          book.url ? "group-hover:text-[#4D80F3] transition-colors duration-300" : ""
                        }`}
                      >
                        {book.name}
                      </h3>
                      <p className="text-sm text-gray-600 font-medium mb-1">{book.author}</p>
                      <p className="text-sm text-gray-500 line-clamp-3">{book.description}</p>
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
