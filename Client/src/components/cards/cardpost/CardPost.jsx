import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import FavoriteToggleButton from "./FavoriteToggleButton";

const CardPost = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Avatar>
            <AvatarImage src={item.userId.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Link to={`/user/userdetail/${item.userId._id}`}>
            <Button className="cursor-pointer" variant="link">
              {item.userId.name}&nbsp;
              {item.userId.lastname}
            </Button>
          </Link>
        </CardTitle>
      </CardHeader>
      <img className=" object-cover h-[400px]" src={item.image} alt="" />
      <CardContent>
        <p>{item.description}</p>
      </CardContent>
      <CardFooter>
        <FavoriteToggleButton postId={item._id} isFavorite={item.isFavorite}/>
      </CardFooter>
    </Card>
  );
};

export default CardPost;
