# emerald-series-overlays

Broadcast graphics for the VCA Emerald Series, a Minecraft tournament.  
This is a [NodeCG](https://www.nodecg.dev/) bundle, and will **NOT** work without it.

## Development

Use the following scripts for development (Usage: `npm run <script>`)  
During development, the bundle must be built prior to starting NodeCG. To see changes made to extensions, restart NodeCG.
To see changes made to dashboard panels and graphics, simply refresh your browser. Use the `build:watch` command to 
automatically detect changes and re-run the build process.

- `build`: Create a production-ready (slower but smaller) build for the bundle.
- `build:dev`: Create a development (quicker but less optimized) build for the bundle.
- `build:watch`: Same as `build:dev`, but will watch for changes and re-run the build when they are detected.
- `build:clean`: Deletes any build results and creates a new one.
- `clean`: Deletes any existing build results.
- `start`: Starts NodeCG
- `schema-types`: Generates type definitions for replicant JSON schemas (`/schemas` -> `/src/types/schemas`)
- `lint`: Checks for code style issues.
- `lint:fix`: Checks for code style issues and automatically fixes some of them.
