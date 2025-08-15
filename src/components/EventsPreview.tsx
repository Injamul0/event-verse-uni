import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const EventsPreview = () => {
  const events = [
    {
      id: 1,
      title: "Tech Innovation Summit 2024",
      description: "Join industry leaders and innovators for a day of cutting-edge technology discussions and networking.",
      date: "March 15, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Engineering Auditorium",
      attendees: 150,
      maxAttendees: 200,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Cultural Night Celebration",
      description: "Experience diverse cultures through music, dance, and traditional cuisine from around the world.",
      date: "March 22, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Student Center Hall",
      attendees: 89,
      maxAttendees: 300,
      category: "Cultural",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Career Fair 2024",
      description: "Meet top employers and explore internship and job opportunities across various industries.",
      date: "March 28, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Sports Complex",
      attendees: 245,
      maxAttendees: 500,
      category: "Career",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-accent text-accent-foreground";
      case "Cultural":
        return "bg-accent-warm text-accent-foreground";
      case "Career":
        return "bg-primary-glow text-primary";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upcoming <span className="bg-gradient-accent bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exciting events happening on campus. From academic conferences to cultural celebrations,
            there's something for everyone.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <Card key={event.id} className="event-card border-0 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(event.category)}>
                    {event.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-smooth">
                  {event.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {event.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar size={16} className="mr-2 text-accent" />
                  {event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock size={16} className="mr-2 text-accent" />
                  {event.time}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin size={16} className="mr-2 text-accent" />
                  {event.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users size={16} className="mr-2 text-accent" />
                  {event.attendees}/{event.maxAttendees} registered
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-accent h-2 rounded-full transition-smooth"
                    style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full bg-gradient-accent text-accent-foreground glow-hover">
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="text-foreground border-border hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;