import ProfilMenu from "@/components/header/ProfilMenu";

import LanguageSection from "../buttons/languageSelect";
import { ThemeToggle } from "../buttons/themeToggle";

export default function RightNav() {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-1 self-end">
        <ThemeToggle />
        <LanguageSection />
        <ProfilMenu />
      </nav>
    </div>
  );
}
