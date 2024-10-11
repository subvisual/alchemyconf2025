import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = process.env.BASIC_AUTH_USERNAME;
const PASSWORD = process.env.BASIC_AUTH_PASSWORD;
const basicAuth = Buffer.from(`${USERNAME}:${PASSWORD}`).toString("base64");

export const config = {
  matcher: ["/"],
};

export function middleware(request: NextRequest) {
  const authorizationHeader = request.headers.get("authorization");

  if (authorizationHeader) {
    const [type, credentials] = authorizationHeader.split(" ");

    if (type === "Basic" && credentials === basicAuth) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}
