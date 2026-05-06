import React from "react";
import { User, Calendar, ArrowDown } from "lucide-react";

interface ChildProps {
  name: string;
  age: number;
}

const Child: React.FC<ChildProps> = ({ name, age }) => {
  return (
    <div className="relative">
      {/* Arrow indicator showing props flow */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center animate-bounce">
          <ArrowDown className="w-6 h-6 text-indigo-400" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-white/20 p-2.5 rounded-xl">
            <User className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-white text-xl font-bold">Child Component</h2>
        </div>

        <div className="space-y-4">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-emerald-100 text-sm font-medium mb-1">Name (prop)</p>
            <p className="text-white text-2xl font-bold">{name}</p>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-emerald-100" />
              <p className="text-emerald-100 text-sm font-medium">Age (prop)</p>
            </div>
            <p className="text-white text-2xl font-bold">{age} years</p>
          </div>
        </div>

        <div className="mt-4 bg-black/20 rounded-lg p-3 font-mono text-xs text-emerald-100">
          <p className="text-emerald-300 font-semibold mb-1">Received via props:</p>
          <p>{"{ name, age }"}</p>
        </div>
      </div>
    </div>
  );
};

export default Child;
