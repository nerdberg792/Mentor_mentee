import { Avatar, AvatarFallback } from "./avatar";
import { Button } from "./button";

import { Card, CardContent } from "./card";

const MenteeCard = ({ name, progress }: { name: string; progress: string }) => (
    <Card className="bg-white shadow-sm rounded-2xl p-4 mb-4">
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-blue-900 font-semibold">{name}</p>
            <p className="text-sm text-blue-700">Progress: {progress}</p>
          </div>
        </div>
        <Button className="bg-blue-100 text-blue-800 hover:bg-blue-200">View</Button>
      </CardContent>
    </Card>
  );
export default MenteeCard;