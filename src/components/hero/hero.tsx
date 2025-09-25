import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Users, BookOpen, GraduationCap } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 px-6 min-h-screen flex items-center">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <Badge
          variant="secondary"
          className="rounded-full py-2 px-4 border-border mb-8"
          asChild
        >
          <Link href="/about" className="inline-flex items-center gap-2">
            <GraduationCap className="size-4" />
            Connecting Students & Schools
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            School
          </span>
          <span className="text-foreground">Bridge</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          The ultimate platform connecting students, educators, and institutions. 
          Share knowledge, collaborate on projects, and build your academic future together.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-blue-500" />
            <span>10,000+ Active Students</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="size-4 text-green-500" />
            <span>500+ Study Groups</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-4 text-purple-500" />
            <span>100+ Partner Schools</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/study-groups">
              Join SchoolBridge
              <ArrowUpRight className="ml-2 size-5" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full text-lg px-8 py-6 border-2 hover:bg-muted/50 transition-all duration-200"
            asChild
          >
            <Link href="/resources">
              Explore Features
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/50">
            <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
              <Users className="size-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Connect & Collaborate</h3>
            <p className="text-muted-foreground text-sm">
              Join study groups, find study partners, and collaborate on academic projects
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/50">
            <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="size-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Share Knowledge</h3>
            <p className="text-muted-foreground text-sm">
              Access shared resources, notes, and educational content from peers
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur border border-border/50">
            <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="size-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Academic Growth</h3>
            <p className="text-muted-foreground text-sm">
              Track progress, get mentorship, and achieve your educational goals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
