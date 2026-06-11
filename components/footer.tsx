import { personalInfo } from "@/app/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto max-w-4xl flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by {personalInfo.name}. The source code is available on{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {personalInfo.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <span className="sr-only">{social.name}</span>
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
