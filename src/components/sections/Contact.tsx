import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen w-full py-section px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-light tracking-wide mb-6">
            Contact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I welcome inquiries about commissions, exhibitions, and collaborations. 
            Please don't hesitate to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-heading text-2xl font-light">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border focus:ring-foreground"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-border focus:ring-foreground resize-none"
                    placeholder="Please share details about your inquiry, including any specific commission requirements or exhibition opportunities."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-foreground text-background hover:bg-gallery-gray"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Studio Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-light">
                  Studio Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contact@elizabeththatchers.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Studio Location</p>
                    <p className="text-muted-foreground">
                      Brooklyn, New York<br />
                      By appointment only
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Instagram className="h-5 w-5 mt-1 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Follow My Work</p>
                    <p className="text-muted-foreground">@elizabeth.thatchers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Commission Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-light">
                  Commission Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I accept a limited number of portrait commissions each year. 
                  Commission pieces typically require 6-8 weeks for completion, 
                  with pricing varying based on size and complexity.
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Commission Types:</h4>
                  <ul className="text-muted-foreground space-y-1 ml-4">
                    <li>• Individual Portraits</li>
                    <li>• Family Portraits</li>
                    <li>• Corporate Commissions</li>
                    <li>• Memorial Portraits</li>
                  </ul>
                </div>
                
                <p className="text-sm text-muted-foreground pt-4 border-t border-border">
                  Please include reference materials and your vision for the piece 
                  when inquiring about commission work.
                </p>
              </CardContent>
            </Card>

            {/* Exhibition Inquiries */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-light">
                  Exhibition Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  I am always interested in exhibition opportunities, both solo and group shows. 
                  Gallery directors and curators are welcome to reach out to discuss potential 
                  collaborations. A portfolio and artist statement are available upon request.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;