
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqCategories = [
    { id: "all", name: "All FAQs" },
    { id: "orders", name: "Orders & Shipping" },
    { id: "returns", name: "Returns & Refunds" },
    { id: "products", name: "Products" },
    { id: "account", name: "Account" },
    { id: "payment", name: "Payment" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mb-8">Find answers to the most common questions about our products and services.</p>
          
          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Input 
                placeholder="Search for answers..." 
                className="pl-4 pr-10"
              />
              <Button 
                variant="ghost" 
                className="absolute right-0 top-0 h-full aspect-square" 
                aria-label="Search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </Button>
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((category) => (
              <Button 
                key={category.id}
                variant={category.id === "all" ? "default" : "outline"}
                size="sm"
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">How do I track my order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>You can track your order by logging into your account and navigating to the "Orders" section. There you'll find a list of all your orders and their current status. Click on any order to see detailed tracking information.</p>
                <p className="mt-2">Alternatively, you can use the tracking number provided in your shipping confirmation email on our carrier's website.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">What is your return policy?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>We accept returns within 30 days of purchase for items that are in their original condition with all tags attached. To start a return, log into your account and select the order containing the item you wish to return.</p>
                <p className="mt-2">Some items, such as personalized products or intimate apparel, cannot be returned for hygiene reasons.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">How long will it take to receive my refund?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>Once we receive your returned item and verify its condition, we'll process your refund within 3-5 business days. The funds may take an additional 5-10 business days to appear in your account, depending on your financial institution.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">Do you ship internationally?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on the destination. Customs duties and taxes may apply for international orders and are the responsibility of the customer.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">How do I reset my password?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>To reset your password, click on the "Login" link at the top of the page, then select "Forgot Password". Enter the email address associated with your account, and we'll send you instructions on how to create a new password.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">What payment methods do you accept?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. We also offer financing options through Affirm for eligible customers.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">How can I apply a promo code to my order?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>You can apply a promo code during the checkout process. After adding items to your cart and proceeding to checkout, you'll see a field labeled "Promo Code" or "Discount Code" where you can enter your code. Click "Apply" to see the discount reflected in your order total.</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border rounded-lg px-4">
              <AccordionTrigger className="text-lg">Can I modify or cancel my order after it's placed?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>We process orders quickly to ensure fast delivery. If you need to modify or cancel an order, please contact our customer service team immediately. We can usually accommodate changes if the order hasn't shipped yet. Once an order has shipped, it cannot be modified or canceled, but you can return it according to our return policy.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="mt-12 text-center">
            <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
            <p className="text-muted-foreground mb-4">Our customer service team is here to help</p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
