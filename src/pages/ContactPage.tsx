
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-muted-foreground mb-8">We'd love to hear from you. Please fill out the form below or reach out via other channels.</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="What is your message about?" required />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide as much detail as possible..." 
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full sm:w-auto">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="h-5 w-5 text-shop-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Chat with Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Our live chat support is available Monday-Friday, 9am-5pm.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-shop-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Call our customer service team at:
                      </p>
                      <p className="text-sm font-medium mt-1">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-shop-purple mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">
                        Send us an email directly at:
                      </p>
                      <p className="text-sm font-medium mt-1">support@shopdream.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">What are your shipping options?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer standard (3-5 business days), express (1-2 business days), and next-day delivery options.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">How can I return a product?</h3>
                  <p className="text-sm text-muted-foreground">
                    Log into your account, find your order, and follow the return instructions. We accept returns within 30 days of purchase.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">When will I receive my refund?</h3>
                  <p className="text-sm text-muted-foreground">
                    Refunds typically process within 5-10 business days after we receive the returned item.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-2">Do you ship internationally?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
