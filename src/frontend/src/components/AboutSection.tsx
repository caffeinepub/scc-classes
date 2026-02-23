import { Award, Users, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience'
    },
    {
      icon: Users,
      title: 'Small Class Sizes',
      description: 'Personalized attention with hands-on guidance for every student'
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Real-world projects and skills that employers are looking for'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Build the skills needed to advance your professional journey'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            About SCC Classes
          </h2>
          <p className="text-lg text-muted-foreground">
            For over a decade, SCC Classes has been empowering individuals with 
            essential computer skills. Our mission is to make technology education 
            accessible, practical, and transformative for everyone.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6">
                  <div className="rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Our Teaching Approach</h3>
              <p className="text-muted-foreground mb-4">
                At SCC Classes, we believe in learning by doing. Our curriculum combines 
                theoretical knowledge with extensive hands-on practice, ensuring students 
                gain confidence and competence in every skill they learn.
              </p>
              <p className="text-muted-foreground">
                Whether you're starting your tech journey or advancing your existing skills, 
                our supportive instructors and modern facilities provide the perfect 
                environment for growth and success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
