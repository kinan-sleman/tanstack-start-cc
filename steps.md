##### this is the installation guide from cmd:

```bash
D:\Tanstack>npx @tanstack/cli@latest create
Need to install the following packages:
@tanstack/cli@0.69.3
Ok to proceed? (y)
TanStack CLI sends anonymous usage telemetry by default. It never sends project names, paths, raw search text, template URLs, add-on config values, or raw error messages. Disable it with `tanstack telemetry disable` or `TANSTACK_CLI_TELEMETRY_DISABLED=1`.
T  Let's configure your TanStack application
|
o  Select framework:
|  React
|
o  Project name (leave empty to use current directory)
|  tanstack-start-cc
|
o  Select toolchain
|  Biome
|
o  Select deployment adapter:
|  Netlify
|
o  Would you like to include demo/example pages?
|  No
|
o  Keyboard Shortcuts ------------------------------------------------+
|                                                                     |
|  Use ↑/↓ to navigate • Space to select/deselect • Enter to confirm  |
|                                                                     |
+---------------------------------------------------------------------+
|
*  What add-ons would you like for your project? (Space to toggle, Enter to confirm)
|  [ ] WorkOS
|  [ ] Clerk
|  [ ] WorkOS
|  [ ] WorkOS
|  [ ] WorkOS
|  [ ] WorkOS
|  [ ] Clerk
o  What add-ons would you like for your project? (Space to toggle, Enter to confirm)
|  Compiler
|
o  Would you like to initialize a new git repository?
|  Yes
|
•  About to create:
|
|    Project:         tanstack-start-cc
|    Location:        D:\Tanstack\tanstack-start-cc
|    Framework:       React
|    Mode:            file-router
|    Package manager: npm
|
|    Deploy:          Netlify
|    Other add-ons:   Biome, Compiler
|
|    Initialize git:  yes
|    Install deps:    yes
|    Agent skills:    no
|
o  Continue with these settings?
|  Yes
|
o  Initialized git repository
|
o  Installed dependencies
|
O  Generating route tree
> generate-routes
> tsr generate

o  Route tree generated
|
—  Your TanStack app is ready in 'tanstack-start-cc'.

Use the following commands to start your app:
% cd tanstack-start-cc
% npm run dev

Next steps:

Docs for the integrations you picked:
  • Netlify (deploy) — https://docs.netlify.com

Please read the README.md file for information on testing, styling, adding routes, etc.


D:\Tanstack>cd tanstack-start-cc

D:\Tanstack\tanstack-start-cc>code .

D:\Tanstack\tanstack-start-cc>
```
