// MenteeDashboard.tsx
"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileSummary = ({ name, title }: { name: string; title: string }) => (
  <Card className="bg-white shadow-sm rounded-2xl p-4">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="/placeholder.jpg" />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-lg font-semibold text-blue-900">{name}</p>
          <p className="text-sm text-blue-700">{title}</p>
        </div>
      </div>
    </CardHeader>
  </Card>
);

const AnnouncementList = ({ announcements }: { announcements: string[] }) => (
  <Card className="bg-white shadow-sm rounded-2xl p-4 mb-4">
    <CardHeader className="text-blue-900 font-semibold">Mentor Announcements</CardHeader>
    <CardContent>
      <ScrollArea className="h-[250px]">
        <ul className="list-disc pl-5 space-y-2 text-blue-800">
          {announcements.map((a, idx) => (
            <li key={idx}>{a}</li>
          ))}
        </ul>
      </ScrollArea>
    </CardContent>
  </Card>
);

const MentorDetails = ({ name, contact }: { name: string; contact: string }) => (
  <Card className="bg-white shadow-sm rounded-2xl p-4 mb-4">
    <CardHeader className="text-blue-900 font-semibold">Mentor Info</CardHeader>
    <CardContent>
      <div className="space-y-2">
        <p className="text-blue-900 font-semibold">Name: {name}</p>
        <p className="text-blue-700">Contact: {contact}</p>
      </div>
    </CardContent>
  </Card>
);

const MenteeDashboard = () => {
  const [achievement, setAchievement] = useState("");
  const [mentorCode, setMentorCode] = useState("");
  const [mentorLinked, setMentorLinked] = useState(false);
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const handleMentorConnect = () => {
    // Simulate mentor connection logic
    setMentorLinked(true);
    setAnnouncements([
      "Complete the ML assignment by Friday",
      "Attend group call on Monday",
      "Submit progress report this week"
    ]);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-blue-50 min-h-screen">
      <div className="col-span-1 space-y-6">
        <ProfileSummary name="Alice Johnson" title="Mentee" />
        <Card className="bg-white shadow-sm rounded-2xl p-4">
          <CardHeader className="text-blue-900 font-semibold">Add Career Achievement</CardHeader>
          <CardContent>
            <Input
              placeholder="e.g. Completed React Bootcamp"
              value={achievement}
              onChange={(e) => setAchievement(e.target.value)}
              className="mb-2"
            />
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Add</Button>
          </CardContent>
        </Card>
      </div>

      <div className="col-span-2 space-y-6">
        {mentorLinked ? (
          <>
            <AnnouncementList announcements={announcements} />
            <MentorDetails name="Layan Jyoti Dutta" contact="layan@example.com" />
          </>
        ) : (
          <>
            <Card className="bg-white shadow-sm rounded-2xl p-4">
              <CardHeader className="text-blue-900 font-semibold">Enter Mentor Code</CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Enter code..."
                    value={mentorCode}
                    onChange={(e) => setMentorCode(e.target.value)}
                  />
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={handleMentorConnect}
                  >
                    Submit
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default MenteeDashboard;
