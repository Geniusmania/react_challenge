
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Step {
  id: string;
  title: string;
  completed: boolean;
  current: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
}

const ProgressIndicator = ({ steps }: ProgressIndicatorProps) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300
                  ${step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.current 
                    ? 'bg-blue-600 text-white ring-4 ring-blue-200' 
                    : 'bg-gray-200 text-gray-500'
                  }
                `}
              >
                {step.completed ? (
                  <CheckCircle size={20} />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span 
                className={`
                  mt-2 text-xs font-medium text-center max-w-20
                  ${step.current ? 'text-blue-600' : 'text-gray-500'}
                `}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`
                  flex-1 h-0.5 mx-4 transition-colors duration-300
                  ${step.completed ? 'bg-green-500' : 'bg-gray-200'}
                `}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
