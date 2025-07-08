"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Calendar,
  Clock,
  MapPin,
  Edit,
  Trash2,
  Users,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";

const teams = [
  "Dakshin Surma",
  "Golapgonj",
  "Fenchugonj",
  "Balaganj",
  "Jagannathpur",
  "Bishwanath",
  "Beani Bazar",
  "Habigonj",
  "Moulvibazar",
  "Osmaninagar",
];

const venues = [
  "Central Stadium",
  "Sports Complex",
  "District Ground",
  "Municipal Stadium",
  "Community Ground",
];

export default function AdminPage() {
  const [fixtures, setFixtures] = useState([
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
  ]);

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newFixture, setNewFixture] = useState({
    homeTeam: "",
    awayTeam: "",
    date: "",
    time: "",
    venue: "",
    round: "Round 1",
  });

  const handleCreateFixture = () => {
    if (
      newFixture.homeTeam &&
      newFixture.awayTeam &&
      newFixture.date &&
      newFixture.time &&
      newFixture.venue
    ) {
      const fixture = {
        id: fixtures.length + 1,
        ...newFixture,
        status: "upcoming",
      };
      setFixtures([...fixtures, fixture]);
      setNewFixture({
        homeTeam: "",
        awayTeam: "",
        date: "",
        time: "",
        venue: "",
        round: "Round 1",
      });
      setIsCreateDialogOpen(false);
    }
  };

  const handleDeleteFixture = (id: number) => {
    setFixtures(fixtures.filter((f) => f.id !== id));
  };

  const stats = [
    {
      title: "Total Fixtures",
      value: fixtures.length,
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: "Teams",
      value: teams.length,
      icon: Users,
      color: "text-green-500",
    },
    {
      title: "Venues",
      value: venues.length,
      icon: MapPin,
      color: "text-purple-500",
    },
    {
      title: "Upcoming",
      value: fixtures.filter((f) => f.status === "upcoming").length,
      icon: Trophy,
      color: "text-red-500",
    },
  ];

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
              Admin <span className="text-red-500">Dashboard</span>
            </h1>
            <p className="text-gray-400">
              Manage fixtures and league operations
            </p>
          </motion.div>

          {/* Stats Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {stat.value}
                        </p>
                      </div>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div> */}

          {/* Fixtures Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">
                    Fixture Management
                  </CardTitle>
                  <Dialog
                    open={isCreateDialogOpen}
                    onOpenChange={setIsCreateDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Fixture
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray-800 border-gray-700 text-white">
                      <DialogHeader>
                        <DialogTitle>Create New Fixture</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="homeTeam">Home Team</Label>
                            <Select
                              value={newFixture.homeTeam}
                              onValueChange={(value) =>
                                setNewFixture({
                                  ...newFixture,
                                  homeTeam: value,
                                })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600">
                                <SelectValue placeholder="Select home team" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-700 border-gray-600">
                                {teams.map((team) => (
                                  <SelectItem key={team} value={team}>
                                    {team}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="awayTeam">Away Team</Label>
                            <Select
                              value={newFixture.awayTeam}
                              onValueChange={(value) =>
                                setNewFixture({
                                  ...newFixture,
                                  awayTeam: value,
                                })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600">
                                <SelectValue placeholder="Select away team" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-700 border-gray-600">
                                {teams
                                  .filter(
                                    (team) => team !== newFixture.homeTeam
                                  )
                                  .map((team) => (
                                    <SelectItem key={team} value={team}>
                                      {team}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Date</Label>
                            <Input
                              type="date"
                              value={newFixture.date}
                              onChange={(e) =>
                                setNewFixture({
                                  ...newFixture,
                                  date: e.target.value,
                                })
                              }
                              className="bg-gray-700 border-gray-600"
                            />
                          </div>
                          <div>
                            <Label htmlFor="time">Time</Label>
                            <Input
                              type="time"
                              value={newFixture.time}
                              onChange={(e) =>
                                setNewFixture({
                                  ...newFixture,
                                  time: e.target.value,
                                })
                              }
                              className="bg-gray-700 border-gray-600"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="venue">Venue</Label>
                            <Select
                              value={newFixture.venue}
                              onValueChange={(value) =>
                                setNewFixture({ ...newFixture, venue: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600">
                                <SelectValue placeholder="Select venue" />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-700 border-gray-600">
                                {venues.map((venue) => (
                                  <SelectItem key={venue} value={venue}>
                                    {venue}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="round">Round</Label>
                            <Select
                              value={newFixture.round}
                              onValueChange={(value) =>
                                setNewFixture({ ...newFixture, round: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent className="bg-gray-700 border-gray-600">
                                <SelectItem value="Round 1">Round 1</SelectItem>
                                <SelectItem value="Round 2">Round 2</SelectItem>
                                <SelectItem value="Semi Final">
                                  Semi Final
                                </SelectItem>
                                <SelectItem value="Final">Final</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button
                          onClick={handleCreateFixture}
                          className="w-full bg-red-600 hover:bg-red-700"
                        >
                          Create Fixture
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fixtures.map((fixture) => (
                    <div
                      key={fixture.id}
                      className="bg-gray-700 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-2">
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
                              {fixture.status.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="text-lg font-semibold text-white mb-2">
                            {fixture.homeTeam} vs {fixture.awayTeam}
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {fixture.date}
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
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white bg-transparent"
                            onClick={() => handleDeleteFixture(fixture.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
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
  );
}
