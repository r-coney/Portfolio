import { NextApiResponse } from "next/dist/shared/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const skills = [
    {
      id: 1,
      name: "TypeScript",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 2,
      name: "PHP",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 3,
      name: "Ruby",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 4,
      name: "Laravel",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 5,
      name: "Next.js",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 6,
      name: "Ruby On Rails",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 7,
      name: "MySQL",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 8,
      name: "Docker",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
    {
      id: 9,
      name: "HTML・CSS",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
    },
  ];

  return NextResponse.json(skills, { status: 200 });
}
