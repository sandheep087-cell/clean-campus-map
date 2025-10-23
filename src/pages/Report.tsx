import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, MapPin, Upload, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Report = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Report Submitted! 🎉",
      description: "You've earned 50 eco-points for reporting waste.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <Card className="p-12 max-w-md w-full text-center space-y-6 animate-scale-in">
          <div className="w-20 h-20 bg-gradient-eco rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Report Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for helping keep our community clean. You've earned 50 eco-points!
            </p>
          </div>
          <div className="space-y-3">
            <Button
              variant="hero"
              className="w-full"
              onClick={() => setSubmitted(false)}
            >
              Report More Waste
            </Button>
            <Button variant="outline" className="w-full" onClick={() => window.location.href = "/"}>
              Go to Home
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="space-y-2 mb-8">
          <h1 className="text-4xl font-bold">Report Waste</h1>
          <p className="text-muted-foreground">
            Help keep your community clean by reporting waste locations
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label htmlFor="image">Waste Photo *</Label>
              <div className="relative">
                {imagePreview ? (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setImagePreview(null)}
                      className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-secondary/50 transition-colors"
                  >
                    <Upload className="w-12 h-12 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-muted-foreground mt-1">
                      PNG, JPG up to 10MB
                    </span>
                  </label>
                )}
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location *</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Enter address or coordinates"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Waste Type */}
            <div className="space-y-2">
              <Label htmlFor="type">Waste Type *</Label>
              <select
                id="type"
                required
                className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
              >
                <option value="">Select waste type</option>
                <option value="organic">Organic</option>
                <option value="recyclable">Recyclable</option>
                <option value="hazardous">Hazardous</option>
                <option value="electronic">Electronic</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="Add any additional details about the waste..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="hero" className="w-full" size="lg">
              <Camera className="w-5 h-5" />
              Submit Report
            </Button>
          </form>
        </Card>

        {/* Info Card */}
        <Card className="p-6 mt-6 bg-secondary/50">
          <h3 className="font-semibold mb-2">💡 Reporting Tips</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Take clear, well-lit photos</li>
            <li>• Include landmarks for easy location</li>
            <li>• Report hazardous waste immediately</li>
            <li>• Earn 50 eco-points per valid report</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Report;
