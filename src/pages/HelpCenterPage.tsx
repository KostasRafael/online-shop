
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HelpCenterPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Help Center</h1>
          <p className="text-muted-foreground mb-8">Find answers to common questions and get support</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Browse our comprehensive FAQ section to find quick answers to common questions.</p>
                <Link to="/faq" className="text-shop-purple hover:underline">
                  View FAQs →
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Need personalized help? Our support team is ready to assist you.</p>
                <Link to="/contact" className="text-shop-purple hover:underline">
                  Contact Us →
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Order Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get help with tracking, returns, and other order-related questions.</p>
                <Link to="/orders" className="text-shop-purple hover:underline">
                  Order Management →
                </Link>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Learn about our shipping policies, delivery times, and tracking information.</p>
                <Link to="/shipping" className="text-shop-purple hover:underline">
                  Shipping Details →
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Returns & Refunds</h3>
                <p className="text-sm text-muted-foreground">How to return items and get refunded</p>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Payment Issues</h3>
                <p className="text-sm text-muted-foreground">Troubleshoot payment problems</p>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Account Management</h3>
                <p className="text-sm text-muted-foreground">Update profile and security</p>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Product Availability</h3>
                <p className="text-sm text-muted-foreground">Check stock and notifications</p>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Shipping Delays</h3>
                <p className="text-sm text-muted-foreground">Information on delivery times</p>
              </div>
              
              <div className="p-4 border rounded-lg hover:border-shop-purple transition-colors">
                <h3 className="font-medium mb-2">Promotional Codes</h3>
                <p className="text-sm text-muted-foreground">How to use discount codes</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenterPage;
