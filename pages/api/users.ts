// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../typings";

type Data = User[];
const users: User[] = [
  { id: 1, name: "Luke", location: "" },
  { id: 2, name: "Leia", location: "" },
  { id: 3, name: "Yoda", location: "" },
  { id: 4, name: "Han", location: "" },
  { id: 5, name: "Docu", location: "" },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await setTimeout(function () {}, 10000);
  console.log("Request", users);
  res.status(200).json(users);
}
