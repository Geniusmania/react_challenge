
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Shield, Truck, CheckCircle } from 'lucide-react';

interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: () => void;
}

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  
  return (
    <Card 
      className={`
        relative overflow-hidden transition-all duration-500 cursor-pointer group
        ${isSelected 
          ? 'ring-4 ring-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-white' 
          : 'hover:shadow-xl hover:scale-102 bg-white hover:bg-gradient-to-br hover:from-slate-50 hover:to-white'
        }
        transform-gpu
      `}
      onClick={onSelect}
    >
      {/* Selection Indicator */}
      {isSelected && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-green-500 text-white rounded-full p-2 shadow-lg animate-scale-in">
            <CheckCircle size={20} />
          </div>
        </div>
      )}
      
      {/* Size Badge */}
      <div className="absolute top-4 right-4 z-10">
        <Badge 
          variant="secondary" 
          className={`
            font-bold text-lg px-4 py-2 shadow-lg transition-colors duration-300
            ${isSelected 
              ? 'bg-blue-600 text-white' 
              : 'bg-white text-blue-700 border-2 border-blue-200'
            }
          `}
        >
          {skip.size} Yards
        </Badge>
      </div>
      
      <CardContent className="p-0">
        {/* Skip Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src="/assets/recycle.png"
            alt={`${skip.size} yard skip container`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`
            absolute inset-0 transition-all duration-300
            ${isSelected 
              ? 'bg-gradient-to-t from-blue-900/30 to-blue-600/10' 
              : 'bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/50'
            }
          `}></div>
          
          {/* Price Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className={`
              backdrop-blur-md rounded-xl p-4 transition-all duration-300
              ${isSelected 
                ? 'bg-white/90 border-2 border-blue-200' 
                : 'bg-white/80 group-hover:bg-white/90'
              }
            `}>
              <div className="text-3xl font-bold text-slate-800">
                £{totalPrice.toFixed(0)}
              </div>
              <div className="text-sm text-slate-600">
                (£{skip.price_before_vat} + {skip.vat}% VAT)
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              {skip.size} Yard Skip
            </h3>
            <div className="flex items-center text-slate-600 mb-4">
              <Calendar size={18} className="mr-2 text-blue-600" />
              <span className="font-medium">{skip.hire_period_days} day hire period</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-3">
            {skip.allowed_on_road && (
              <Badge variant="outline" className="text-green-700 border-green-300 bg-green-50 px-3 py-1 font-medium">
                <Shield size={14} className="mr-1" />
                Road Legal
              </Badge>
            )}
            {skip.allows_heavy_waste && (
              <Badge variant="outline" className="text-blue-700 border-blue-300 bg-blue-50 px-3 py-1 font-medium">
                <Truck size={14} className="mr-1" />
                Heavy Waste
              </Badge>
            )}
          </div>

          {/* Action Button */}
          <Button 
            className={`
              w-full py-3 text-lg font-semibold transition-all duration-300 transform
              ${isSelected 
                ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg hover:scale-105'
              }
            `}
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            {isSelected ? (
              <>
                <CheckCircle size={20} className="mr-2" />
                Selected
              </>
            ) : (
              'Select This Skip'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkipCard;
