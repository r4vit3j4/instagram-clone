import React, { useEffect, useState } from "react";
import faker from "@faker-js/faker";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div
      className="flex items-center space-x-2 bg-white
    mt-8 border-gray-200 border rounded-sm p-6
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black whitespace-nowrap"
    >
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {/* Story */}
      {suggestions.map((profile) => (
        <Story
          className="float-none"
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
