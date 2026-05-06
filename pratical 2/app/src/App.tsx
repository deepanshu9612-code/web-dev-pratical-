import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Mail, User, AlertCircle, Users } from 'lucide-react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <Skeleton className="h-8 w-64" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center">
        <Alert variant="destructive" className="max-w-md border-0 shadow-lg">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-200">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">User Directory</h1>
              <p className="text-slate-500 text-sm mt-1">Fetched from JSONPlaceholder API</p>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium px-3 py-1">
              {users.length} Users
            </Badge>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <Card
              key={user.id}
              className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-1 cursor-default"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-md">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <CardTitle className="text-base font-semibold text-slate-800 truncate">
                      {user.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-slate-400 font-medium">
                      ID: {user.id}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-2.5 group-hover:bg-indigo-50 transition-colors duration-300">
                  <div className="bg-white p-1.5 rounded-md shadow-sm">
                    <User className="h-4 w-4 text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Username</p>
                    <p className="font-medium text-slate-700">@{user.username}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 rounded-lg p-2.5 group-hover:bg-purple-50 transition-colors duration-300">
                  <div className="bg-white p-1.5 rounded-md shadow-sm">
                    <Mail className="h-4 w-4 text-purple-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Email</p>
                    <p className="font-medium text-slate-700 truncate">{user.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
