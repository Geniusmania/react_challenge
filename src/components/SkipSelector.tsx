
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProgressIndicator from './ProgressIndicator';
import SkipCard from './SkipCard';

interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const SkipSelector = () => {
  const [selectedSkip, setSelectedSkip] = useState<number | null>(null);

  const skipOptions: SkipOption[] = [
    {"id":17933,"size":4,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":278,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.813","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17934,"size":6,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":305,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:52.992","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17935,"size":8,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":375,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.171","allowed_on_road":true,"allows_heavy_waste":true},
    {"id":17936,"size":10,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":400,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.339","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17937,"size":12,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":439,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.516","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17938,"size":14,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":470,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.69","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":17939,"size":16,"hire_period_days":14,"transport_cost":null,"per_tonne_cost":null,"price_before_vat":496,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:46.897146","updated_at":"2025-04-07T13:16:53.876","allowed_on_road":false,"allows_heavy_waste":false},
    {"id":15124,"size":20,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.434","allowed_on_road":false,"allows_heavy_waste":true},
    {"id":15125,"size":40,"hire_period_days":14,"transport_cost":248,"per_tonne_cost":248,"price_before_vat":992,"vat":20,"postcode":"NR32","area":"","forbidden":false,"created_at":"2025-04-03T13:51:40.344435","updated_at":"2025-04-07T13:16:52.603","allowed_on_road":false,"allows_heavy_waste":false}
  ];

  const steps = [
    { id: 'postcode', title: 'Postcode', completed: true, current: false },
    { id: 'waste-type', title: 'Waste Type', completed: true, current: false },
    { id: 'select-skip', title: 'Select Skip', completed: false, current: true },
    { id: 'permit-check', title: 'Permit Check', completed: false, current: false },
    { id: 'choose-date', title: 'Choose Date', completed: false, current: false },
    { id: 'payment', title: 'Payment', completed: false, current: false },
  ];

  const handleSkipSelect = (skipId: number) => {
    setSelectedSkip(selectedSkip === skipId ? null : skipId);
    console.log('Selected skip:', selectedSkip === skipId ? null : skipId);
  };

  const handleContinue = () => {
    if (selectedSkip) {
      console.log('Continuing with skip:', selectedSkip);
    }
  };

  const handleBack = () => {
    console.log('Going back to previous step');
  };

  const selectedSkipData = skipOptions.find(s => s.id === selectedSkip);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 pb-32">
        <div className="container mx-auto px-4 py-8">
          <ProgressIndicator steps={steps} />
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-6">
              Choose Your Perfect Skip
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Select the ideal skip size for your project. All prices include VAT and delivery to your location in NR32.
            </p>
          </div>

          {/* Skip Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {skipOptions.map((skip) => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip === skip.id}
                onSelect={() => handleSkipSelect(skip.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Back Button */}
            <Button
              variant="outline"
              onClick={handleBack}
              className="px-8 py-3 text-lg font-medium border-slate-300 hover:bg-slate-50 transition-all duration-200"
            >
              ← Back
            </Button>
            
            {/* Selected Skip Info */}
            <div className="flex-1 text-center mx-8">
              {selectedSkipData ? (
                <div className="animate-fade-in">
                  <div className="text-sm font-medium text-slate-600 mb-1">
                    Selected: {selectedSkipData.size} Yard Skip
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    £{(selectedSkipData.price_before_vat * 1.2).toFixed(0)}
                  </div>
                  <div className="text-sm text-slate-500">
                    Including VAT & Delivery
                  </div>
                </div>
              ) : (
                <div className="text-slate-500 text-lg">
                  Select a skip to continue
                </div>
              )}
            </div>
            
            {/* Continue Button */}
            <Button
              onClick={handleContinue}
              disabled={!selectedSkip}
              className={`
                px-8 py-3 text-lg font-semibold transition-all duration-300 transform
                ${selectedSkip 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl hover:scale-105 text-white' 
                  : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                }
              `}
            >
              Continue →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipSelector;
