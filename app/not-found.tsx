import Link from "next/link";
import { Arrow } from "@/components/site-shell";

export default function NotFound() {
  return <div className="wrap interior page-header"><h1>Page not found.</h1><Link className="action-link" href="/">Return home <Arrow /></Link></div>;
}
