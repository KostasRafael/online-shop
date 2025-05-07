
import React from "react";
import { Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useShop } from "@/context/ShopContext";

const AccountPage = () => {
  const { user, isAuthenticated, logout } = useShop();

  // Redirect to login page if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Left sidebar with account navigation */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Navigation</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="flex flex-col">
                    <Link to="/profile" className="p-3 border-b text-sm hover:bg-gray-50">
                      Profile
                    </Link>
                    <Link to="/orders" className="p-3 border-b text-sm hover:bg-gray-50">
                      Orders
                    </Link>
                    <Link to="/wishlist" className="p-3 border-b text-sm hover:bg-gray-50">
                      Wishlist
                    </Link>
                    <Link to="/address" className="p-3 border-b text-sm hover:bg-gray-50">
                      Address Book
                    </Link>
                    <Link to="/payment-methods" className="p-3 border-b text-sm hover:bg-gray-50">
                      Payment Methods
                    </Link>
                    <button 
                      onClick={logout} 
                      className="p-3 text-sm hover:bg-gray-50 text-left text-red-600"
                    >
                      Logout
                    </button>
                  </nav>
                </CardContent>
              </Card>
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>Manage your account details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Name</h3>
                      <p>{user?.name}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p>{user?.email}</p>
                    </div>
                    
                    <div className="pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/edit-profile">Edit Profile</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your most recent purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">You have no recent orders.</p>
                  <div className="mt-4">
                    <Button asChild>
                      <Link to="/products">Start Shopping</Link>
                    </Button>
                  </div>
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

export default AccountPage;
