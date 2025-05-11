"use client"
import { Button } from "./button";
import { Card, CardContent, CardHeader } from "./card";
import { Textarea } from "./textarea";

const AnnouncementBox = () => {
   
  
    return (
      <Card className="bg-white shadow-sm rounded-2xl pl-0 pr-0 pt-2 pb-2">
        <CardHeader className="text-blue-900 font-semibold">New Announcement</CardHeader>
        <CardContent>
          <Textarea className="border rounded-md min-h-[100px]" />
          <Button className="mt-3 bg-blue-600 text-white hover:bg-blue-700">Post</Button>
        </CardContent>
      </Card>
    );
  };

export default AnnouncementBox;         