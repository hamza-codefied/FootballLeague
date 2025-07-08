"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const fixtures = [
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
    homeTeam: "Beani Bazar",
    awayTeam: "Habigonj",
    date: "2025-01-18",
    time: "17:00",
    venue: "Municipal Stadium",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 5,
    homeTeam: "Moulvibazar",
    awayTeam: "Osmaninagar",
    date: "2025-01-19",
    time: "16:30",
    venue: "Community Ground",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 6,
    homeTeam: "Fenchugonj",
    awayTeam: "Balaganj",
    date: "2025-01-16",
    time: "18:00",
    venue: "Sports Complex",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 7,
    homeTeam: "Jagannathpur",
    awayTeam: "Bishwanath",
    date: "2025-01-17",
    time: "15:30",
    venue: "District Ground",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 8,
    homeTeam: "Beani Bazar",
    awayTeam: "Habigonj",
    date: "2025-01-18",
    time: "17:00",
    venue: "Municipal Stadium",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 9,
    homeTeam: "Moulvibazar",
    awayTeam: "Osmaninagar",
    date: "2025-01-19",
    time: "16:30",
    venue: "Community Ground",
    status: "upcoming",
    round: "Round 1",
  },
  {
    id: 10,
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
  {
    id: 11,
    homeTeam: "Balaganj",
    awayTeam: "Jagannathpur",
    date: "2025-01-13",
    time: "18:00",
    venue: "Sports Complex",
    status: "completed",
    homeScore: 0,
    awayScore: 3,
    round: "Round 1",
  },
];

export default function FixturesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roundFilter, setRoundFilter] = useState("all");

  const filteredFixtures = fixtures.filter((fixture) => {
    const matchesSearch =
      fixture.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fixture.awayTeam.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || fixture.status === statusFilter;
    const matchesRound = roundFilter === "all" || fixture.round === roundFilter;

    return matchesSearch && matchesStatus && matchesRound;
  });

  const upcomingFixtures = filteredFixtures.filter(
    (f) => f.status === "upcoming"
  );
  const completedFixtures = filteredFixtures.filter(
    (f) => f.status === "completed"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Match <span className="text-green-500">Fixtures</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Complete schedule of all matches in the Luton Sylhet Division Cup
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 font-medium">Filter by:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search teams..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400 w-full sm:w-64"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="all">All Matches</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={roundFilter} onValueChange={setRoundFilter}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white w-full sm:w-40">
                  <SelectValue placeholder="Round" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="all">All Rounds</SelectItem>
                  <SelectItem value="Round 1">Round 1</SelectItem>
                  <SelectItem value="Round 2">Round 2</SelectItem>
                  <SelectItem value="Semi Final">Semi Final</SelectItem>
                  <SelectItem value="Final">Final</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Fixtures */}
      {upcomingFixtures.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Upcoming <span className="text-red-500">Matches</span>
              </h2>
              <p className="text-gray-400">
                Don't miss these exciting upcoming fixtures
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingFixtures.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="secondary"
                          className="bg-green-600 text-white"
                        >
                          UPCOMING
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-400"
                        >
                          {fixture.round}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center flex-1">
                            <div className="text-lg font-semibold text-white mb-2">
                              {fixture.homeTeam}
                            </div>
                            <div className="w-12 h-12 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                H
                              </span>
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-red-500 mx-4">
                            VS
                          </div>
                          <div className="text-center flex-1">
                            <div className="text-lg font-semibold text-white mb-2">
                              {fixture.awayTeam}
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                A
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3 text-sm text-gray-400">
                        <div className="flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(fixture.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {fixture.time}
                        </div>
                        <div className="flex items-center justify-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {fixture.venue}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Fixtures */}
      {completedFixtures.length > 0 && (
        <section className="py-16 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Recent <span className="text-red-500">Results</span>
              </h2>
              <p className="text-gray-400">Latest match results and scores</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedFixtures.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-center">
                        <Badge
                          variant="secondary"
                          className="bg-gray-600 text-white"
                        >
                          COMPLETED
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-gray-600 text-gray-400"
                        >
                          {fixture.round}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center flex-1">
                            <div className="text-lg font-semibold text-white mb-2">
                              {fixture.homeTeam}
                            </div>
                            <div className="w-12 h-12 bg-red-600 rounded-full mx-auto flex items-center justify-center mb-2">
                              <span className="text-white font-bold text-sm">
                                H
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-white">
                              {fixture.homeScore}
                            </div>
                          </div>
                          <div className="text-xl font-bold text-gray-500 mx-4">
                            -
                          </div>
                          <div className="text-center flex-1">
                            <div className="text-lg font-semibold text-white mb-2">
                              {fixture.awayTeam}
                            </div>
                            <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-2">
                              <span className="text-white font-bold text-sm">
                                A
                              </span>
                            </div>
                            <div className="text-2xl font-bold text-white">
                              {fixture.awayScore}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm text-gray-400 text-center">
                        <div className="flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(fixture.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center justify-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {fixture.venue}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredFixtures.length === 0 && (
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                No fixtures found
              </h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setRoundFilter("all");
                }}
                className="bg-red-600 hover:bg-red-700"
              >
                Clear Filters
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
