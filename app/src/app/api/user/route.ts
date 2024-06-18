import { NextApiResponse } from "next/dist/shared/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: NextApiResponse) {
  const user = {
    id: "id1",
    first_name: "諒星",
    last_name: "小西",
    role: "Web エンジニア",
    profile:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
  };

  return NextResponse.json(user, { status: 200 });
}
