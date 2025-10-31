import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";
import PageHeader from "../components/ui/PageHeader";
import Button from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { mockPosts } from "../data/mockData";

export default function Community(){
  const [posts] = useState(mockPosts);
  const navigate = useNavigate();
  return (
    <div className="container-px max-w-6xl mx-auto">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Community</h1>
        <p className="text-zinc-600 dark:text-zinc-200 mt-1">Team announcements, discussions, and updates.</p>
      </div>

      <div className="grid gap-4 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => (
          <Card
            key={p.id}
            onClick={() => navigate(`/post/${p.id}`)}
            className="cursor-pointer hover:scale-[1.01] transition-transform max-w-sm"
          >
            {/* Square image at top */}
            <img
              src={p.image || "/assets/SqaureImageForCommunityCards.png"}
              alt={p.title}
              className="w-full aspect-square object-cover rounded-2xl mb-3"
            />
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">{p.body}</p>

            <div className="mt-3 space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} /><span>{new Date(p.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} /><span>{p.location || "To be announced"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /><span>{p.days || "Sun-Fri"}</span><span className="ml-1">{p.time || "9:30AM - 11PM"}</span>
              </div>
            </div>

            <div className="mt-4">
              <Button className="w-full">Volunteer</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
