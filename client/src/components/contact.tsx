import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Instagram, Facebook } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-16">
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Send a Message
            </h3>
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
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-vertical"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-black text-white px-8 py-3 text-lg font-medium hover:bg-gray-800 transition-colors duration-300 rounded-none"
              >
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Studio Address
                </h4>
                <p className="text-gray-600">
                  123 Artist Lane
                  <br />
                  Creative District
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Contact Details
                </h4>
                <p className="text-gray-600">
                  Email: elizabeth@thatchers-art.com
                  <br />
                  Phone: (555) 123-4567
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Studio Hours
                </h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: By appointment only
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Follow My Work
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <span className="sr-only">Instagram</span>
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <span className="sr-only">Facebook</span>
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
