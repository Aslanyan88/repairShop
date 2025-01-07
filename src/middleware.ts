import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    console.log(req);
    
  },
  {
    isReturnToCurrentPage: true
  }
);

export const config = {
  matcher: [
    // Protected routes
    "/dashboard/:path*",
    "/tickets/:path*",
    "/customers/:path*",
  ]
};