import { useTheme } from "../contexts/ThemeContext";
import Logo from "../svg/Logo";
import IconMoon from "../svg/IconMoon";
import IconSun from "../svg/IconSun";

export default function Header() {
  const { isDark, setIsDark } = useTheme();
  return (
    <header>
      <div className="flex items-center justify-between h-[72px] bg-neutral-0 p-3 border border-neutral-200 rounded-2xl shadow shadow-neutral-600/10 dark:bg-neutral-800 dark:border-neutral-600">
        <h1 className="hidden">
          Browser extensions manager UI Frontend Mentor
        </h1>
        <Logo className={"fill-neutral-900 dark:fill-neutral-0"} />
        <button
          onClick={() => setIsDark(!isDark)}
          className="flex items-center justify-center h-full aspect-square bg-neutral-100 rounded-[10px] hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-neutral-600"
          type="button"
          aria-label="theme switcher"
        >
          {isDark ? <IconSun /> : <IconMoon />}
        </button>
      </div>
    </header>
  );
}
