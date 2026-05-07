import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Flag, Rocket } from "lucide-react";

const states = [
  { name: "Alabama", fee: 236 }, { name: "Alaska", fee: 250 }, { name: "Arizona", fee: 85 },
  { name: "Arkansas", fee: 45 }, { name: "California", fee: 70 }, { name: "Colorado", fee: 50 },
  { name: "Connecticut", fee: 120 }, { name: "Delaware", fee: 160 }, { name: "District of Columbia", fee: 99 },
  { name: "Florida", fee: 125 }, { name: "Georgia", fee: 105 }, { name: "Hawaii", fee: 51 },
  { name: "Idaho", fee: 103 }, { name: "Illinois", fee: 153 }, { name: "Indiana", fee: 97 },
  { name: "Iowa", fee: 50 }, { name: "Kansas", fee: 166 }, { name: "Kentucky", fee: 40 },
  { name: "Louisiana", fee: 105 }, { name: "Maine", fee: 178 }, { name: "Maryland", fee: 155 },
  { name: "Massachusetts", fee: 520 }, { name: "Michigan", fee: 50 }, { name: "Minnesota", fee: 155 },
  { name: "Mississippi", fee: 53 }, { name: "Missouri", fee: 51 }, { name: "Montana", fee: 35 },
  { name: "Nebraska", fee: 103 }, { name: "Nevada", fee: 436 }, { name: "New Hampshire", fee: 102 },
  { name: "New Jersey", fee: 129 }, { name: "New Mexico", fee: 51 }, { name: "New York", fee: 205 },
  { name: "North Carolina", fee: 128 }, { name: "North Dakota", fee: 135 }, { name: "Ohio", fee: 99 },
  { name: "Oklahoma", fee: 104 }, { name: "Oregon", fee: 100 }, { name: "Pennsylvania", fee: 125 },
  { name: "Rhode Island", fee: 156 }, { name: "South Carolina", fee: 125 }, { name: "South Dakota", fee: 150 },
  { name: "Tennessee", fee: 307 }, { name: "Texas", fee: 300 }, { name: "Utah", fee: 59 },
  { name: "Vermont", fee: 155 }, { name: "Virginia", fee: 100 }, { name: "Washington", fee: 200 },
  { name: "West Virginia", fee: 130 }, { name: "Wisconsin", fee: 130 }, { name: "Wyoming", fee: 104 },
];

const FOUNDO_FEE = 249;

interface StatePricingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const StatePricingModal = ({ open, onOpenChange }: StatePricingModalProps) => {
  const [selectedState, setSelectedState] = useState(states[0].name);
  const stateData = states.find((s) => s.name === selectedState)!;
  const totalCost = FOUNDO_FEE + stateData.fee;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden border-none">
        {/* Header */}
        <div className="hero-gradient px-6 pt-6 pb-5">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <DialogTitle className="text-primary-foreground text-xl font-bold font-display">
                  State Pricing
                </DialogTitle>
                <DialogDescription className="text-primary-foreground/70 text-sm">
                  Select your state to see pricing
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 pt-5 space-y-4">
          {/* State selector */}
          <div>
            <label className="text-sm font-semibold text-foreground mb-2 block">Choose Your State</label>
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="h-12 rounded-xl border-border text-base font-medium">
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-primary" />
                  <SelectValue />
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {states.map((s) => (
                  <SelectItem key={s.name} value={s.name}>
                    {s.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Total Cost */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.04] p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-primary font-semibold">Total Cost</p>
              <p className="text-3xl font-bold text-primary font-display">${totalCost}</p>
              <p className="text-xs text-primary/60 mt-0.5">All-inclusive · No hidden fees</p>
            </div>
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Rocket className="h-5 w-5 text-primary" />
            </div>
          </div>

          {/* CTA */}
          <Button asChild className="w-full h-12 rounded-xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl transition-all duration-300">
            <Link to="/checkout" onClick={() => onOpenChange(false)}>
              <Rocket className="mr-2 h-4 w-4" /> Start Your Business <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          {/* Footer info */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-muted/50 border border-border rounded-full px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-medium text-muted-foreground">
                All-inclusive pricing · State fees included
              </span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              No hidden fees • Transparent pricing
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StatePricingModal;
