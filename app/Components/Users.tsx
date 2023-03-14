"use client";

import useSWR from "swr";
import { User } from "../../typings";
import { fetcher } from "./ClientProvider";
const user: User = { id: 6, name: "Lucas", location: "Berlin" };
type Props = {};
const Users = (props: Props) => {
  const { mutate, data, error, isLoading } = useSWR<User[]>(`/api/users`);

  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="space-x-4">
      <ul className="list-disc">
        {data &&
          data.map((user) => (
            <li key={user.id}>
              {user.name}, {user.location}
            </li>
          ))}
      </ul>
      <button
        className="bg-gray-500 p-2 px-4"
        onClick={async () => {
          mutate(
            await fetcher("/api/users", {
              method: "POST",
              body: JSON.stringify(user),
            }),
            { optimisticData: [...data!, user] }
          );
        }}
      >
        Add User
      </button>
    </div>
  );
};

export default Users;
