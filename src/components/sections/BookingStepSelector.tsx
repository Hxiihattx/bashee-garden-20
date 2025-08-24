import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Calendar } from "lucide-react";

interface BookingStepSelectorProps {
  onSelection: (type: "buy" | "hire") => void;
}

const BookingStepSelector = ({ onSelection }: BookingStepSelectorProps) => {
  const [selectedType, setSelectedType] = useState<"buy" | "hire" | null>(null);

  const handleSelection = (type: "buy" | "hire") => {
    setSelectedType(type);
    onSelection(type);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">What would you like to do?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div
            className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
              selectedType === "buy" 
                ? "border-primary bg-primary/5 shadow-md" 
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => handleSelection("buy")}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Do you want to Buy</h3>
                <p className="text-sm text-muted-foreground">Purchase equipment for permanent use</p>
              </div>
            </div>
          </div>

          <div
            className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
              selectedType === "hire" 
                ? "border-primary bg-primary/5 shadow-md" 
                : "border-border hover:border-primary/50"
            }`}
            onClick={() => handleSelection("hire")}
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Do you want to Hire</h3>
                <p className="text-sm text-muted-foreground">Rent equipment for temporary use</p>
              </div>
            </div>
          </div>
        </div>

        {selectedType && (
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              You selected: <span className="font-semibold text-primary">
                {selectedType === "buy" ? "Purchase" : "Hire"}
              </span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingStepSelector;