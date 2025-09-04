import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Message sent successfully!',
        description: 'Thank you for your message. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    },
    onError: (error: any) => {
      toast({
        title: 'Error sending message',
        description: error.message || 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Please fill in all fields',
        description: 'All fields are required to send your message.',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.email.includes('@')) {
      toast({
        title: 'Invalid email address',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get in touch to discuss commissions, exhibitions, or collaborations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-vertical"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-black text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 rounded-none"
                >
                  {contactMutation.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Studio Address
                    </h3>
                    <p className="text-gray-600">
                      123 Artist Lane<br />
                      Creative District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-gray-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Email</h3>
                        <p className="text-gray-600">elizabeth@thatchers-art.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-gray-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Phone</h3>
                        <p className="text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Studio Hours
                    </h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Follow My Work
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>@elizabeththatchers</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      <Facebook className="w-6 h-6" />
                      <span>Elizabeth Thatchers Art</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}