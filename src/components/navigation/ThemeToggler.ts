type Theme = "dark" | "light";

class ThemeToggler extends HTMLElement {
  private currentTheme: Theme;

  constructor() {
    super();
    this.currentTheme = this.getTheme();
    this.init();
  }

  private getTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return (
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  }

  private setTheme(theme: Theme): void {
    this.currentTheme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
    this.updateButton();
  }

  private toggleTheme(): void {
    this.setTheme(this.currentTheme === "dark" ? "light" : "dark");
  }

  private updateButton(): void {
    const button = this.querySelector('button');
    const icon = this.querySelector('.theme-icon');

    if (button) {
      button.setAttribute('aria-label', `Switch to ${this.currentTheme === "dark" ? "light" : "dark"} mode`);
    }

    if (icon) {
      if (this.currentTheme === "dark") {
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary h-6 w-6"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
      } else {
        icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-secondary-white h-6 w-6"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
      }
    }
  }

  private init(): void {
    this.setTheme(this.currentTheme);

    this.innerHTML = `
      <button
        type="button"
        class="dark:bg-secondary-dark bg-background-light dark:border-secondary-dark dark:shadow-primary rounded-xl border border-white p-2 shadow-md transition-all duration-400 hover:scale-90 hover:cursor-pointer active:scale-90 lg:ml-4 dark:shadow-md"
        aria-label="Switch to ${this.currentTheme === "dark" ? "light" : "dark"} mode"
      >
        <div class="theme-icon"></div>
      </button>
    `;

    this.updateButton();
    this.querySelector('button')?.addEventListener('click', () => this.toggleTheme());
  }
}

customElements.define('theme-toggler', ThemeToggler);
