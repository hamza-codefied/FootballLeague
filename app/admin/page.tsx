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
import { useFixtures } from "@/hooks/use-fixtures";
import { useCreateFixture } from "@/hooks/use-create-fixture";
import toast from "react-hot-toast";
import ProtectedRoute from "@/components/ProtectedRoute";
import Image from "next/image";
import { fixtures } from "../page";

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
  // const { data: fixtures = [] } = useFixtures();
  const { mutate: createFixture, isPending } = useCreateFixture();

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
    const payload = {
      home_team: newFixture.homeTeam,
      away_team: newFixture.awayTeam,
      fixture_date: newFixture.date,
      fixture_time: newFixture.time,
      venue: newFixture.venue,
      round: newFixture.round,
    };

    createFixture(payload, {
      onSuccess: () => {
        toast.success("Fixture created successfully!");
        setIsCreateDialogOpen(false);
        setNewFixture({
          homeTeam: "",
          awayTeam: "",
          date: "",
          time: "",
          venue: "",
          round: "",
        });
      },
      onError: (error: any) => {
        toast.error("Error creating fixture: " + error.message);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">
              Admin <span className="text-red-500">Dashboard</span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Manage fixtures and league operations
            </p>
          </motion.div>

          {/* Fixtures Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <CardTitle className="text-white text-lg sm:text-xl">
                    Fixture Management
                  </CardTitle>
                  <Dialog
                    open={isCreateDialogOpen}
                    onOpenChange={setIsCreateDialogOpen}
                  >
                    <DialogTrigger asChild>
                      <Button className="bg-red-600 hover:bg-red-700 text-sm sm:text-base">
                        <Plus className="w-4 h-4 mr-1 sm:mr-2" />
                        Create Fixture
                      </Button>
                    </DialogTrigger>

                    {/* Create Fixture Dialog */}
                    <DialogContent className="bg-gray-800 border-gray-700 text-white px-4 py-6 sm:px-6 sm:py-8">
                      <DialogHeader>
                        <DialogTitle className="text-lg sm:text-xl">
                          Create New Fixture
                        </DialogTitle>
                      </DialogHeader>

                      <div className="space-y-5">
                        {/* Team Select */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <Label className="text-sm">Home Team</Label>
                            <Select
                              value={newFixture.homeTeam}
                              onValueChange={(value) =>
                                setNewFixture({
                                  ...newFixture,
                                  homeTeam: value,
                                })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-sm h-10">
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

                          <div className="flex flex-col">
                            <Label className="text-sm">Away Team</Label>
                            <Select
                              value={newFixture.awayTeam}
                              onValueChange={(value) =>
                                setNewFixture({
                                  ...newFixture,
                                  awayTeam: value,
                                })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-sm h-10">
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

                        {/* Date & Time */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <Label className="text-sm">Date</Label>
                            <Input
                              type="date"
                              value={newFixture.date}
                              onChange={(e) =>
                                setNewFixture({
                                  ...newFixture,
                                  date: e.target.value,
                                })
                              }
                              className="bg-gray-700 border-gray-600 text-sm h-10"
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label className="text-sm">Time</Label>
                            <Input
                              type="time"
                              value={newFixture.time}
                              onChange={(e) =>
                                setNewFixture({
                                  ...newFixture,
                                  time: e.target.value,
                                })
                              }
                              className="bg-gray-700 border-gray-600 text-sm h-10"
                            />
                          </div>
                        </div>

                        {/* Venue & Round */}
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <Label className="text-sm">Venue</Label>
                            <Select
                              value={newFixture.venue}
                              onValueChange={(value) =>
                                setNewFixture({ ...newFixture, venue: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-sm h-10">
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

                          <div className="flex flex-col">
                            <Label className="text-sm">Round</Label>
                            <Select
                              value={newFixture.round}
                              onValueChange={(value) =>
                                setNewFixture({ ...newFixture, round: value })
                              }
                            >
                              <SelectTrigger className="bg-gray-700 border-gray-600 text-sm h-10">
                                <SelectValue placeholder="Select round" />
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

                        {/* Create Button */}
                        <Button
                          onClick={handleCreateFixture}
                          className="w-full bg-red-600 hover:bg-red-700 text-sm h-10"
                        >
                          {isPending ? "Creating..." : "Create Fixture"}
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>

              {/* Fixture List */}
              <CardContent>
                <div className="space-y-6">
                  {fixtures?.map((fixture, index) => (
                    <div key={fixture.id} className="group space-y-3">
                      {/* Date */}
                      <div className="text-center">
                        <div className="inline-flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-1 sm:px-6 sm:py-2 border border-gray-600/30 text-xs sm:text-sm">
                          <Calendar className="w-4 h-4 text-yellow-400" />
                          <span>
                            {new Date(fixture.fixture_date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <Clock className="w-4 h-4 text-green-400" />
                          <span>{fixture.fixture_time}</span>
                        </div>
                      </div>

                      {/* Fixture Card */}
                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-800/40 p-4 rounded-xl border border-gray-700 hover:border-yellow-400 transition">
                        {/* Home */}
                        <div className="flex items-center gap-3">
                          <Image
                            src={fixture.home_team_logo}
                            alt={fixture.home_team}
                            width={48}
                            height={48}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                          />
                          <div>
                            <h3 className="text-base sm:text-xl font-bold">
                              {fixture.home_team}
                            </h3>
                            <p className="text-gray-400 text-xs uppercase">
                              Home
                            </p>
                          </div>
                        </div>

                        {/* VS */}
                        <div className="text-center">
                          <div className="bg-yellow-400 text-black text-sm sm:text-lg font-bold px-3 py-1 rounded-full">
                            VS
                          </div>
                          <div className="text-green-400 text-xs mt-1">
                            Upcoming
                          </div>
                        </div>

                        {/* Away */}
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <h3 className="text-base sm:text-xl font-bold">
                              {fixture.away_team}
                            </h3>
                            <p className="text-gray-400 text-xs uppercase">
                              Away
                            </p>
                          </div>
                          <Image
                            src={fixture.away_team_logo}
                            alt={fixture.away_team}
                            width={48}
                            height={48}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Venue */}
                      <div className="text-center text-gray-400 text-xs sm:text-sm flex items-center justify-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-400" />
                        <span>{fixture.venue}</span>
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
