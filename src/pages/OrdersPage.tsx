
import React from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useShop } from "@/context/ShopContext";

// Sample order data (in a real app this would come from an API)
const sampleOrders = [
  // This would normally come from backend data
];

const OrdersPage = () => {
  const { isAuthenticated } = useShop();

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Orders</h1>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="processing">Processing</TabsTrigger>
              <TabsTrigger value="shipped">Shipped</TabsTrigger>
              <TabsTrigger value="delivered">Delivered</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {sampleOrders.length > 0 ? (
                sampleOrders.map((order) => (
                  <div key={order.id}>
                    {/* Order content would go here */}
                  </div>
                ))
              ) : (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-12">
                      <h3 className="text-xl font-medium mb-2">No orders yet</h3>
                      <p className="text-muted-foreground mb-6">When you place orders, they will appear here</p>
                      <Button asChild>
                        <Link to="/products">Start Shopping</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            
            <TabsContent value="processing" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No processing orders</h3>
                    <p className="text-muted-foreground mb-6">You don't have any orders being processed right now</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="shipped" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No shipped orders</h3>
                    <p className="text-muted-foreground mb-6">You don't have any orders that are currently shipped</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="delivered" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No delivered orders</h3>
                    <p className="text-muted-foreground mb-6">You don't have any delivered orders yet</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Order Help</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Track Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Enter your order number and email to track your order's status and location.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/order-tracking">Track My Order</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Return Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our return process and how to initiate a return for your order.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/faq">Return Policy</Link>
                  </Button>
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

export default OrdersPage;
