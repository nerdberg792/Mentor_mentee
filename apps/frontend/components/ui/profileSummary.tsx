import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardHeader } from "./card";



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

export default ProfileSummary;  