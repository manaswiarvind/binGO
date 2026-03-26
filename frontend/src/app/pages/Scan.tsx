import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Barcode, Image as ImageIcon, CheckCircle2, Package, Droplet, Recycle, Trash2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

type ScanResult = {
  item: string;
  category: string;
  points: number;
  accepted: boolean;
};

const acceptedBarCodeItems = [
  { name: "Plastic Bottles (PET)", icon: "🍾", category: "Plastic", points: 15 },
  { name: "Aluminum Cans", icon: "🥫", category: "Metal", points: 12 },
  { name: "Glass Bottles", icon: "🍶", category: "Glass", points: 18 },
  { name: "Cardboard Boxes", icon: "📦", category: "Paper", points: 20 },
  { name: "Newspaper & Magazines", icon: "📰", category: "Paper", points: 10 },
  { name: "Tin Cans", icon: "🥫", category: "Metal", points: 12 },
];

const acceptedPictureItems = [
  { name: "E-Waste (Electronics)", icon: "📱", category: "E-Waste", points: 50 },
  { name: "Plastic Bags", icon: "🛍️", category: "Plastic", points: 8 },
  { name: "Food Containers", icon: "🥡", category: "Plastic", points: 15 },
  { name: "Batteries", icon: "🔋", category: "Hazardous", points: 25 },
  { name: "Clothes & Textiles", icon: "👕", category: "Textile", points: 30 },
  { name: "Books", icon: "📚", category: "Paper", points: 15 },
];

export function Scan() {
  const [activeTab, setActiveTab] = useState<"barcode" | "picture">("barcode");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleBarcodeScan = () => {
    setScanning(true);
    setResult(null);
    
    setTimeout(() => {
      const randomItem = acceptedBarCodeItems[Math.floor(Math.random() * acceptedBarCodeItems.length)];
      setScanning(false);
      setResult({
        item: randomItem.name,
        category: randomItem.category,
        points: randomItem.points,
        accepted: true,
      });
    }, 2000);
  };

  const handlePictureScan = () => {
    setScanning(true);
    setResult(null);
    
    setTimeout(() => {
      const randomItem = acceptedPictureItems[Math.floor(Math.random() * acceptedPictureItems.length)];
      setScanning(false);
      setResult({
        item: randomItem.name,
        category: randomItem.category,
        points: randomItem.points,
        accepted: true,
      });
    }, 2000);
  };

  const handleConfirm = () => {
    setResult(null);
  };

  return (
    <div className="min-h-full max-w-lg mx-auto pb-24">
      {/* Header */}
      <div className="px-4 py-6 bg-gradient-to-b from-emerald-50 to-transparent">
        <h1 className="text-2xl text-gray-900 mb-2">Scan & Recycle</h1>
        <p className="text-gray-600">Choose your scanning method</p>
      </div>

      {/* Tabs */}
      <div className="px-4">
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "barcode" | "picture")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="barcode" className="flex items-center gap-2">
              <Barcode className="w-4 h-4" />
              Barcode
            </TabsTrigger>
            <TabsTrigger value="picture" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              Picture
            </TabsTrigger>
          </TabsList>

          {/* Barcode Tab */}
          <TabsContent value="barcode" className="space-y-6">
            {!result ? (
              <>
                {/* Scanner Area */}
                <Card className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 border-none overflow-hidden relative">
                  {!scanning ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="w-64 h-64 border-4 border-emerald-500 rounded-2xl relative">
                        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg"></div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg"></div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Barcode className="w-20 h-20 text-emerald-500" />
                        </div>
                      </div>
                      <p className="text-white text-lg mt-6 text-center">Position barcode in frame</p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-24 h-24 border-4 border-emerald-500 border-t-transparent rounded-full"
                      />
                      <p className="text-white text-xl mt-8">Scanning...</p>
                    </div>
                  )}
                </Card>

                {/* Accepted Items List */}
                <div>
                  <h3 className="text-lg text-gray-900 mb-3">We Accept (Barcode):</h3>
                  <div className="space-y-2">
                    {acceptedBarCodeItems.map((item, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <p className="text-sm text-gray-900 font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                            +{item.points} pts
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Scan Button */}
                <Button 
                  onClick={handleBarcodeScan}
                  disabled={scanning}
                  className="w-full h-16 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-lg"
                >
                  <Barcode className="w-6 h-6 mr-2" />
                  {scanning ? "Scanning..." : "Scan Barcode"}
                </Button>
              </>
            ) : (
              /* Result Display */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <Card className="p-8 bg-gradient-to-br from-emerald-500 to-green-600 text-white text-center">
                  <CheckCircle2 className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2">{result.item}</h3>
                  <Badge className="bg-white text-emerald-600 text-lg px-4 py-2">
                    +{result.points} Points
                  </Badge>
                </Card>

                <Card className="p-5">
                  <p className="text-sm text-gray-600 mb-2">Category</p>
                  <p className="text-lg text-gray-900 mb-4">{result.category}</p>
                  <p className="text-sm text-emerald-600">✓ Item Accepted</p>
                </Card>

                <Button 
                  onClick={handleConfirm}
                  className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-lg"
                >
                  Confirm & Earn Points
                </Button>
              </motion.div>
            )}
          </TabsContent>

          {/* Picture Tab */}
          <TabsContent value="picture" className="space-y-6">
            {!result ? (
              <>
                {/* Camera Area */}
                <Card className="aspect-square bg-gradient-to-br from-gray-900 to-gray-700 border-none overflow-hidden relative">
                  {!scanning ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="w-64 h-64 border-4 border-purple-500 rounded-2xl relative">
                        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg"></div>
                        <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg"></div>
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg"></div>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Camera className="w-20 h-20 text-purple-500" />
                        </div>
                      </div>
                      <p className="text-white text-lg mt-6 text-center">Position item in frame</p>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full"
                      />
                      <p className="text-white text-xl mt-8">Analyzing...</p>
                    </div>
                  )}
                </Card>

                {/* Accepted Items List */}
                <div>
                  <h3 className="text-lg text-gray-900 mb-3">We Accept (Picture):</h3>
                  <div className="space-y-2">
                    {acceptedPictureItems.map((item, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                              <p className="text-sm text-gray-900 font-medium">{item.name}</p>
                              <p className="text-xs text-gray-500">{item.category}</p>
                            </div>
                          </div>
                          <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                            +{item.points} pts
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Scan Button */}
                <Button 
                  onClick={handlePictureScan}
                  disabled={scanning}
                  className="w-full h-16 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white text-lg"
                >
                  <Camera className="w-6 h-6 mr-2" />
                  {scanning ? "Analyzing..." : "Take Picture"}
                </Button>
              </>
            ) : (
              /* Result Display */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <Card className="p-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white text-center">
                  <CheckCircle2 className="w-24 h-24 mx-auto mb-4" />
                  <h3 className="text-2xl mb-2">{result.item}</h3>
                  <Badge className="bg-white text-purple-600 text-lg px-4 py-2">
                    +{result.points} Points
                  </Badge>
                </Card>

                <Card className="p-5">
                  <p className="text-sm text-gray-600 mb-2">Category</p>
                  <p className="text-lg text-gray-900 mb-4">{result.category}</p>
                  <p className="text-sm text-purple-600">✓ Item Accepted</p>
                </Card>

                <Button 
                  onClick={handleConfirm}
                  className="w-full h-14 bg-purple-600 hover:bg-purple-700 text-lg"
                >
                  Confirm & Earn Points
                </Button>
              </motion.div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}