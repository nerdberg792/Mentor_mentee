// MentorDashboard.tsx
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProfileSummary from "@/components/ui/profileSummary";
import MenteeCard from "@/components/ui/menteeCard";
import AnnouncementBox from "@/components/ui/announcment";  




const MentorDashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-blue-50 min-h-screen">
      <div className="col-span-1 space-y-6">
        <ProfileSummary name="Layan Jyoti Dutta" title="Senior Mentor" />
        <AnnouncementBox />
      </div>

      <div className="col-span-2">
        <Card className="bg-white shadow-md rounded-2xl p-6">
          <CardHeader className="text-xl font-semibold text-blue-900 mb-4">Mentees</CardHeader>
          <ScrollArea className="h-[600px] pr-4">
            <MenteeCard name="Alice Johnson" progress="80%" />
            <MenteeCard name="Bob Smith" progress="65%" />
            <MenteeCard name="Charlie Brown" progress="95%" />
            {/* Add more MenteeCard components here */}
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

export default MentorDashboard;
