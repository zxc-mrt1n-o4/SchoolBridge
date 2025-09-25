import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download, 
  Eye, 
  Heart, 
  Search, 
  Filter,
  Star,
  Clock,
  User
} from "lucide-react";

export default function ResourcesPage() {
  const resources = {
    notes: [
      {
        id: 1,
        title: "Advanced Calculus Complete Notes",
        subject: "Mathematics",
        author: "Sarah Johnson",
        downloads: 1245,
        rating: 4.8,
        size: "2.4 MB",
        type: "PDF",
        description: "Comprehensive notes covering limits, derivatives, integrals, and series.",
        tags: ["Calculus", "Derivatives", "Integrals"]
      },
      {
        id: 2,
        title: "Organic Chemistry Reactions Guide",
        subject: "Chemistry",
        author: "Michael Chen",
        downloads: 892,
        rating: 4.6,
        size: "1.8 MB",
        type: "PDF",
        description: "Essential organic chemistry reactions with mechanisms and examples.",
        tags: ["Organic Chemistry", "Reactions", "Mechanisms"]
      },
      {
        id: 3,
        title: "Data Structures & Algorithms",
        subject: "Computer Science",
        author: "Alex Rodriguez",
        downloads: 2156,
        rating: 4.9,
        size: "3.2 MB",
        type: "PDF",
        description: "Complete guide to fundamental data structures and algorithms.",
        tags: ["Programming", "Algorithms", "Data Structures"]
      }
    ],
    videos: [
      {
        id: 1,
        title: "Linear Algebra Fundamentals",
        subject: "Mathematics",
        author: "Dr. Emma Wilson",
        views: 15420,
        rating: 4.7,
        duration: "45:23",
        description: "Understanding vectors, matrices, and linear transformations.",
        tags: ["Linear Algebra", "Matrices", "Vectors"]
      },
      {
        id: 2,
        title: "Cell Biology Laboratory Techniques",
        subject: "Biology",
        author: "Prof. David Kim",
        views: 8934,
        rating: 4.5,
        duration: "32:15",
        description: "Essential laboratory techniques for cell biology research.",
        tags: ["Cell Biology", "Lab Techniques", "Research"]
      },
      {
        id: 3,
        title: "World War II Historical Analysis",
        subject: "History",
        author: "Dr. Lisa Thompson",
        views: 12567,
        rating: 4.8,
        duration: "58:41",
        description: "In-depth analysis of WWII causes, events, and consequences.",
        tags: ["World War II", "History", "Analysis"]
      }
    ],
    textbooks: [
      {
        id: 1,
        title: "Introduction to Psychology",
        author: "Dr. Robert Hayes",
        subject: "Psychology",
        edition: "7th Edition",
        pages: 624,
        rating: 4.4,
        description: "Comprehensive introduction to psychological principles and research.",
        tags: ["Psychology", "Textbook", "Research Methods"]
      },
      {
        id: 2,
        title: "Principles of Economics",
        author: "Prof. Jennifer Martinez",
        subject: "Economics",
        edition: "5th Edition",
        pages: 892,
        rating: 4.6,
        description: "Fundamental economic principles with real-world applications.",
        tags: ["Economics", "Microeconomics", "Macroeconomics"]
      },
      {
        id: 3,
        title: "Modern Physics Concepts",
        author: "Dr. Thomas Anderson",
        subject: "Physics",
        edition: "3rd Edition",
        pages: 756,
        rating: 4.7,
        description: "Contemporary physics concepts including quantum mechanics.",
        tags: ["Modern Physics", "Quantum Mechanics", "Relativity"]
      }
    ]
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Learning Resources
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access a vast collection of study materials, lecture notes, video tutorials, and textbooks 
            shared by students and educators from around the world.
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
              <Input 
                placeholder="Search resources by title, subject, or keyword..." 
                className="pl-10 py-3 rounded-full border-2 focus:border-green-500"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">
                <Filter className="size-4 mr-2" />
                Filter
              </Button>
              <Button className="rounded-full px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                Upload Resource
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border">
            <h3 className="text-2xl font-bold text-green-600">2,847</h3>
            <p className="text-sm text-muted-foreground">Study Notes</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border">
            <h3 className="text-2xl font-bold text-blue-600">1,293</h3>
            <p className="text-sm text-muted-foreground">Video Lectures</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border">
            <h3 className="text-2xl font-bold text-purple-600">456</h3>
            <p className="text-sm text-muted-foreground">Textbooks</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur border">
            <h3 className="text-2xl font-bold text-orange-600">89K</h3>
            <p className="text-sm text-muted-foreground">Downloads</p>
          </div>
        </div>

        {/* Resource Tabs */}
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur">
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="size-4" />
              Study Notes
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="size-4" />
              Video Lectures
            </TabsTrigger>
            <TabsTrigger value="textbooks" className="flex items-center gap-2">
              <BookOpen className="size-4" />
              Textbooks
            </TabsTrigger>
          </TabsList>

          {/* Study Notes */}
          <TabsContent value="notes">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.notes.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-1">{note.title}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{note.subject}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star className="size-4 fill-current" />
                        <span>{note.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {note.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Author and Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="size-4" />
                          <span>{note.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Download className="size-4" />
                            <span>{note.downloads}</span>
                          </div>
                          <span>{note.size}</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {note.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                          <Download className="size-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Eye className="size-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Heart className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Video Lectures */}
          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.videos.map((video) => (
                <Card key={video.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-1">{video.title}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{video.subject}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star className="size-4 fill-current" />
                        <span>{video.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Author and Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="size-4" />
                          <span>{video.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="size-4" />
                            <span>{video.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="size-4" />
                            <span>{video.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {video.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          <Video className="size-4 mr-2" />
                          Watch
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Heart className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Textbooks */}
          <TabsContent value="textbooks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.textbooks.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-1">{book.title}</CardTitle>
                        <Badge variant="secondary" className="mb-2">{book.subject}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-yellow-600">
                        <Star className="size-4 fill-current" />
                        <span>{book.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-sm line-clamp-2">
                      {book.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {/* Author and Stats */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="size-4" />
                          <span>{book.author}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{book.edition}</span>
                          <span>{book.pages} pages</span>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {book.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                          <BookOpen className="size-4 mr-2" />
                          Access
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                          <Heart className="size-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border">
          <h2 className="text-3xl font-bold mb-4">Share Your Knowledge</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Help fellow students by sharing your notes, creating video tutorials, or recommending textbooks. 
            Build a stronger learning community together.
          </p>
          <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <FileText className="size-5 mr-2" />
            Upload Resource
          </Button>
        </div>
      </div>
    </div>
  );
}
