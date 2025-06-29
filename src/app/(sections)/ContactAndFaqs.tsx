import { Container } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const ContactAndFaqs: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-gray-200 border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              Contact support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Get help from our award-winning Customer support team
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2 text-sm">
              Contact us
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 border-0">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">
              FAQs & Troubleshooting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Explore our detailed FAQs to quickly find answers to common
              questions or troubleshooting steps
            </p>
            <Button
              variant="outline"
              className="bg-white hover:bg-gray-100 text-black border border-gray-300 rounded-md px-4 py-2 text-sm"
            >
              Explore now
            </Button>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default ContactAndFaqs;
