import { Code, Database, Globe, Palette, FileSpreadsheet, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function CoursesSection() {
  const courses = [
    {
      icon: Code,
      title: 'Programming Fundamentals',
      description: 'Master the basics of programming with Python and JavaScript. Perfect for beginners.',
      duration: '12 weeks',
      level: 'Beginner',
      topics: ['Python Basics', 'JavaScript', 'Problem Solving', 'Algorithms']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Build modern, responsive websites using HTML, CSS, and JavaScript frameworks.',
      duration: '16 weeks',
      level: 'Intermediate',
      topics: ['HTML/CSS', 'React', 'Node.js', 'Responsive Design']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Learn SQL and database design principles for effective data management.',
      duration: '10 weeks',
      level: 'Intermediate',
      topics: ['SQL', 'Database Design', 'MySQL', 'Data Modeling']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Create stunning visuals with Adobe Creative Suite and design principles.',
      duration: '14 weeks',
      level: 'Beginner',
      topics: ['Photoshop', 'Illustrator', 'Design Theory', 'Branding']
    },
    {
      icon: FileSpreadsheet,
      title: 'Microsoft Office Suite',
      description: 'Master Word, Excel, PowerPoint, and Outlook for professional productivity.',
      duration: '8 weeks',
      level: 'Beginner',
      topics: ['Word', 'Excel', 'PowerPoint', 'Outlook']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Basics',
      description: 'Understand security fundamentals and protect digital assets effectively.',
      duration: '12 weeks',
      level: 'Intermediate',
      topics: ['Network Security', 'Encryption', 'Threat Analysis', 'Best Practices']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20';
      case 'Intermediate':
        return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 hover:bg-orange-500/20';
      case 'Advanced':
        return 'bg-red-500/10 text-red-700 dark:text-red-400 hover:bg-red-500/20';
      default:
        return '';
    }
  };

  return (
    <section id="courses" className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive training programs designed to build real-world skills 
            and advance your career in technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                  </div>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge variant="outline">
                      {course.duration}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, topicIndex) => (
                        <span 
                          key={topicIndex}
                          className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
