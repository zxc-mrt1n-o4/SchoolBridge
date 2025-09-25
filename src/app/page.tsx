import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button" 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Info, Shield, Users, BookOpen } from "lucide-react"
import Hero from "@/components/hero/hero";

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      <main className="container mx-auto px-6 pt-8 pb-16">
        {/* Development Alert */}
        <Alert className="mb-8 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <Info className="h-4 w-4" />
          <AlertTitle>Platform Development</AlertTitle>
          <AlertDescription>
            SchoolBridge is currently in active development. We&apos;re building amazing features to connect students and educators. Report any issues to help us improve!
          </AlertDescription>
        </Alert>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Why Choose SchoolBridge?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the tools and features that make learning collaborative, engaging, and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-200 dark:hover:border-blue-800">
              <CardHeader className="pb-4">
                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <Users className="size-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Study Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join or create study groups with students who share your academic interests. Collaborate on projects and learn together.
                </CardDescription>
                <Button className="w-full rounded-full" asChild>
                  <a href="/study-groups">Explore Groups</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-green-200 dark:hover:border-green-800">
              <CardHeader className="pb-4">
                <div className="size-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <BookOpen className="size-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Learning Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Access thousands of study materials, notes, videos, and textbooks shared by students and educators worldwide.
                </CardDescription>
                <Button className="w-full rounded-full" asChild>
                  <a href="/resources">Browse Resources</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800">
              <CardHeader className="pb-4">
                <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Shield className="size-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Safe Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Connect in a secure, moderated environment designed specifically for educational collaboration and growth.
                </CardDescription>
                <Button className="w-full rounded-full" asChild>
                  <a href="/about">Learn More</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16 py-16 px-8 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thousands of students and educators are already using SchoolBridge to enhance their learning experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-muted-foreground">Study Groups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-muted-foreground">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">2.8K+</div>
              <div className="text-muted-foreground">Resources Shared</div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about SchoolBridge and how it works.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I join a study group?
                </AccordionTrigger>
                <AccordionContent>
                  Simply browse our study groups page, find a group that matches your interests or subject area, and click &quot;Join Group&quot;. You can also create your own study group if you don&apos;t find what you&apos;re looking for.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is SchoolBridge free to use?
                </AccordionTrigger>
                <AccordionContent>
                  Yes! SchoolBridge is completely free for students and educators. We believe in making quality education accessible to everyone.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I share my study materials?
                </AccordionTrigger>
                <AccordionContent>
                  Visit our Resources page and click &quot;Upload Resource&quot;. You can share notes, videos, textbooks, and other educational materials with the community. All uploads are reviewed to ensure quality and appropriateness.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can teachers and educators use SchoolBridge?
                </AccordionTrigger>
                <AccordionContent>
                  Absolutely! SchoolBridge is designed for both students and educators. Teachers can create study groups for their classes, share resources, and connect with other educators in their field.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How is my privacy protected?
                </AccordionTrigger>
                <AccordionContent>
                  We take privacy seriously. All interactions are moderated, personal information is protected, and we follow strict guidelines to ensure a safe learning environment for all users.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16 px-8 rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning Together?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students and educators who are already using SchoolBridge to enhance their educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="rounded-full px-8 py-6 bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="/study-groups">
                Join Study Groups
                <Users className="ml-2 size-5" />
              </a>
            </Button>
            <Button size="lg" className="rounded-full px-8 py-6 bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="/resources">
                Explore Resources
                <BookOpen className="ml-2 size-5" />
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}