"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Trophy, Star, Bell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";

const userFixtures = [
  {
    id: 1,
    homeTeam: "Dakshin Surma",
    awayTeam: "Golapgonj",
    date: "2025-01-15",
    time: "16:00",
    venue: "Central Stadium",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 2,
    homeTeam: "Fenchugonj",
    awayTeam: "Balaganj",
    date: "2025-01-16",
    time: "18:00",
    venue: "Sports Complex",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 3,
    homeTeam: "Jagannathpur",
    awayTeam: "Bishwanath",
    date: "2025-01-17",
    time: "15:30",
    venue: "District Ground",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 4,
    homeTeam: "Golapgonj",
    awayTeam: "Fenchugonj",
    date: "2025-01-12",
    time: "16:00",
    venue: "Central Stadium",
    status: "completed",
    homeScore: 2,
    awayScore: 1,
    round: "Round 1",
  },
];

const notifications = [
  {
    id: 1,
    message: "New fixture scheduled: Dakshin Surma vs Golapgonj",
    time: "2 hours ago",
    type: "fixture",
  },
  {
    id: 2,
    message: "Match result updated: Golapgonj 2-1 Fenchugonj",
    time: "1 day ago",
    type: "result",
  },
  {
    id: 3,
    message: "Venue changed for Jagannathpur vs Bishwanath",
    time: "2 days ago",
    type: "update",
  },
];

export default function DashboardPage() {
  const upcomingFixtures = userFixtures.filter((f) => f.status === "upcoming");
  const recentResults = userFixtures.filter((f) => f.status === "completed");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-2">
              Welcome to Your <span className="text-red-500">Dashboard</span>
            </h1>
            <p className="text-gray-400">
              Stay updated with the latest fixtures and results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Fixtures */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-red-500" />
                      Upcoming Fixtures
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingFixtures.map((fixture) => (
                        <div
                          key={fixture.id}
                          className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <Badge
                              variant="outline"
                              className="border-gray-600 text-gray-400"
                            >
                              {fixture.round}
                            </Badge>
                            <Badge
                              variant="secondary"
                              className="bg-green-600 text-white"
                            >
                              UPCOMING
                            </Badge>
                          </div>
                          <div className="text-center mb-4">
                            <div className="flex items-center justify-between">
                              <div className="text-lg font-semibold text-white">
                                {fixture.homeTeam}
                              </div>
                              <div className="text-xl font-bold text-red-500 mx-4">
                                VS
                              </div>
                              <div className="text-lg font-semibold text-white">
                                {fixture.awayTeam}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(fixture.date).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {fixture.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {fixture.venue}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
