import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { useEffect } from "react";

const ToogleTheme = () => {
  const systemPreferences = window.matchMedia('(prefers-color-scheme: dark)').matches
  const pagesClass = document.documentElement.classList

  const toggle = () => {
    pagesClass.toggle('dark');
  }

  useEffect(() => {
    systemPreferences && pagesClass.add('dark')
  }, [systemPreferences, pagesClass]);

  return (
    <div className="hidden sm:block">
      <MoonIcon className="h-8 text-gray-100 block dark:hidden cursor-pointer" onClick={toggle} />
      <SunIcon className="h-8 text-gray-100 hidden dark:block cursor-pointer" onClick={toggle} />
    </div>
  )
}

export default ToogleTheme;
