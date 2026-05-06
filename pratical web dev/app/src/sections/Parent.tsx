import React, { useState } from "react";
import { Users, Pencil, Save, RotateCcw } from "lucide-react";
import Child from "./Child";

const Parent: React.FC = () => {
  const [name, setName] = useState<string>("Alex Johnson");
  const [age, setAge] = useState<number>(25);
  const [editName, setEditName] = useState<string>(name);
  const [editAge, setEditAge] = useState<string>(String(age));
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setName(editName);
    setAge(Number(editAge));
    setIsEditing(false);
  };

  const handleReset = () => {
    const defaultName = "Alex Johnson";
    const defaultAge = 25;
    setName(defaultName);
    setAge(defaultAge);
    setEditName(defaultName);
    setEditAge(String(defaultAge));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">React Props Demo</h1>
          <p className="text-slate-300">Parent → Child Component Communication</p>
        </div>

        {/* Parent Component Card */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-xl mb-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2.5 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-xl font-bold">Parent Component</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-lg"
                title="Reset"
              >
                <RotateCcw className="w-4 h-4 text-white" />
              </button>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-lg"
                title="Edit"
              >
                <Pencil className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {isEditing ? (
            <div className="space-y-3">
              <div>
                <label className="text-indigo-100 text-sm font-medium mb-1 block">Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div>
                <label className="text-indigo-100 text-sm font-medium mb-1 block">Age</label>
                <input
                  type="number"
                  value={editAge}
                  onChange={(e) => setEditAge(e.target.value)}
                  className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-2.5 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button
                onClick={handleSave}
                className="w-full bg-white text-indigo-600 font-semibold py-2.5 rounded-lg hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-indigo-100 text-sm font-medium mb-1">Variable: name</p>
                <p className="text-white text-2xl font-bold">{name}</p>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-indigo-100 text-sm font-medium mb-1">Variable: age</p>
                <p className="text-white text-2xl font-bold">{age}</p>
              </div>
            </div>
          )}

          {/* Code snippet showing props passing */}
          <div className="mt-4 bg-black/20 rounded-lg p-3 font-mono text-xs text-indigo-100">
            <p className="text-indigo-300 font-semibold mb-1">Passing props:</p>
            <p>{`<Child name="${name}" age={${age}} />`}</p>
          </div>
        </div>

        {/* Child Component - receives props */}
        <Child name={name} age={age} />

        {/* Footer note */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm">
            Edit the values in the Parent to see them update in the Child via props.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parent;
