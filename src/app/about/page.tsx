import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  Heart, 
  Globe, 
  Award,
  Target,
  Lightbulb,
  Shield,
  Zap,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CEO",
      bio: "Former educator with 10+ years of experience in academic technology.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CTO",
      bio: "Full-stack developer passionate about educational technology solutions.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Dr. Emma Wilson",
      role: "Head of Education",
      bio: "PhD in Educational Psychology, specializing in collaborative learning.",
      image: "/api/placeholder/150/150"
    },
    {
      name: "Alex Rodriguez",
      role: "Community Manager",
      bio: "Dedicated to building strong connections within our student community.",
      image: "/api/placeholder/150/150"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description: "Every decision we make prioritizes student success and learning outcomes."
    },
    {
      icon: Globe,
      title: "Inclusive Community",
      description: "We welcome learners from all backgrounds, creating a diverse and supportive environment."
    },
    {
      icon: Shield,
      title: "Privacy & Safety",
      description: "Your data and privacy are protected with enterprise-grade security measures."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge educational technology."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we build and deliver."
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "We empower students to take control of their learning journey and achieve their goals."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Students", icon: Users },
    { number: "500+", label: "Study Groups", icon: BookOpen },
    { number: "100+", label: "Partner Schools", icon: GraduationCap },
    { number: "95%", label: "Success Rate", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 pt-32 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About SchoolBridge
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We&apos;re on a mission to revolutionize education by connecting students, educators, and institutions 
            in a collaborative learning ecosystem that empowers everyone to achieve their academic potential.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Target className="size-8 text-purple-600" />
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                SchoolBridge was founded with a simple yet powerful vision: to break down the barriers 
                that prevent students from accessing quality education and collaborative learning opportunities.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that when students can easily connect with peers, share knowledge, and access 
                educational resources, they not only perform better academically but also develop the 
                social and collaborative skills essential for success in the modern world.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform facilitates meaningful connections between learners, creating a supportive 
                community where knowledge flows freely and every student has the opportunity to both 
                teach and learn from others.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-colors">
                  <CardContent className="pt-6">
                    <stat.icon className="size-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the SchoolBridge experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="size-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="size-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re a passionate team of educators, developers, and community builders dedicated to transforming education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 border-2 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-4">
                  <div className="size-24 rounded-full bg-gradient-to-r from-purple-200 to-blue-200 dark:from-purple-800 dark:to-blue-800 mx-auto mb-4 flex items-center justify-center">
                    <Users className="size-12 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mx-auto">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {member.bio}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="p-8 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border-2">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SchoolBridge was born in 2023 when our founders, Sarah and Michael, recognized a critical gap 
                in how students connect and collaborate in their academic journeys. As former educators and 
                technology professionals, they witnessed firsthand how isolation and lack of peer support 
                hindered student success.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a simple idea to help students find study partners has evolved into a 
                comprehensive platform that serves thousands of students across hundreds of institutions. 
                We&apos;ve facilitated countless study groups, enabled resource sharing that has helped students 
                save money and time, and created a community where academic success is a shared goal.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, SchoolBridge continues to grow and evolve, always with our core mission in mind: 
                to make quality education accessible, collaborative, and empowering for every student.
              </p>
            </div>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Mail className="size-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">hello@schoolbridge.edu</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <MapPin className="size-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">123 Education Ave, Learning City, LC 12345</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="pt-6">
                <Phone className="size-8 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">+1 (555) 123-LEARN</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 border">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you&apos;re a student looking to connect with peers or an educator interested in our platform, 
              we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Join SchoolBridge
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-6">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
