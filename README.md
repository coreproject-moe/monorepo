# coreproject-moe/monorepo

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/coreproject-moe/monorepo/release.yml?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/coreproject-moe/monorepo?style=flat-square)
![GitHub License](https://img.shields.io/github/license/coreproject-moe/monorepo?style=flat-square)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/coreproject-moe/monorepo?style=flat-square)
![Website](https://img.shields.io/website?url=https%3A%2F%2Fcoreproject-moe.github.io%2F&style=flat-square)

JS monorepo for [@coreproject-moe](https://github.com/coreproject-moe) powered by nx.

## Packages

The monorepo contains the following package:

| Package                                                        | Description                                                                                              
----------------------------------------------------------------| -------------
| **[@coreproject-moe/icons](packages/icons/README.md)**       | A webcomponent based Icon pack library for coreproject-moe. |

> Note: Each package has its own README.md with detailed documentation on usage and APIs.

## Getting Started

To contribute to this monorepo or use its packages in your project, follow these setup steps:\
Clone the monorepo:

```bash
git clone https://github.com/coreproject-moe/monorepo.git coreporject-monorepo
cd coreporject-monorepo
```

Install dependencies:
```bash
npm install --verbose
```

## Development

To build all packages within the monorepo: `pnpm run build`\
To start a local development environment for all packages: `pnpm run dev`

### Scripts

Here's a brief explanation of the scripts available in the root package.json:

* `build`: Builds all packages using nx.
* `changelog`: Adds a changeset to generate changelog and version updates.
* `dev`: Runs all packages in development/watch mode.
* `format`: Formats the codebase using Prettier.
* `lint`: Lints the codebase using ESLint.
* `test`: Runs tests across all packages.

For a full list of available scripts, see the `scripts` section in `package.json`.

## Contributing

We welcome contributions to any of the packages in this monorepo. Please read our [Contributing Guidelines](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to the project.

## License

[MIT](LICENSE) © [CoreProject](https://coreproject.moe)
