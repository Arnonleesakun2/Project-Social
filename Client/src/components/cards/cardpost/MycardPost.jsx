import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BtnDeleteMycardPost from "./BtnDeleteMycardPost";

const MycardPost = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={item.userId.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              {item.userId.name}&nbsp;
              {item.userId.lastname}
            </div>
          </div>
          <BtnDeleteMycardPost item={item}/>
         
        </CardTitle>
      </CardHeader>
      <img className=" object-cover h-[400px]" src={item.image} alt="" />
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
      <CardFooter>
       {item.favoriteCount} Like
      </CardFooter>
    </Card>
  );
};

export default MycardPost;
