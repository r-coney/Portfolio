import { NextApiResponse } from "next/dist/shared/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const works = [
    {
      id: 1,
      title: "株式会社Gizumo入社",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
    {
      id: 2,
      title: "test",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
    {
      id: 3,
      title: "hoge",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
    {
      id: 4,
      title: "hogehogehoge",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
    {
      id: 5,
      title: "testtesttesttest",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
    {
      id: 6,
      title: "testtesthogehoge",
      description:
        "hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge",
      start_datetime: "2020/06",
      end_datetime: null,
    },
  ];

  return NextResponse.json(works, { status: 200 });
}
