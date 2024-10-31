// components/Header.js
import Link from "next/link";
import { ThreadCreateButton } from "./thread/createThreadButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* ロゴ */}
        <div className="text-2xl font-bold">
          <Link href="/">MyLogo</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* ナビゲーションリンク */}

          <nav className="space-x-4  text-center">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </nav>
          <ThreadCreateButton />
        </div>

        {/* モバイルメニュー（ハンバーガーメニュー） */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>キコエル</DropdownMenuLabel>
              <DropdownMenuSeparator className="items-center" />
              <DropdownMenuItem className="m-auto justify-center">
                Home
              </DropdownMenuItem>
              <DropdownMenuItem className="m-auto justify-center">
                About
              </DropdownMenuItem>
              <DropdownMenuItem className="m-auto justify-center">
                Service
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ThreadCreateButton />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
