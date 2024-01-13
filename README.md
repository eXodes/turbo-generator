# Turborepo Generator

## What's inside?

This is a template repository for Turborepo. It contains a generator script that will create NextJS 13 boilerplate files for you to get started with Turborepo.


## Getting Started

1. Use the following command to download the generator script:

    ```bash
    npx degit eXodes/turbo-generator/turbo ./turbo --force
    ``` 
   
2. Update `./turbo/generators/_utils/_prompts` according to your project needs.

### Supported Commands


`turbo gen api <name>` - Generates a new API route

`turbo gen page <name>` - Generates a new Next page component

`turbo gen layout <name>` - Generates a new Next layout component

`turbo gen component <name>` - Generates a new React component

`turbo gen hook <name>` - Generates a new React hook

`turbo gen context <name>` - Generates a new React context

`turbo gen function <name>` - Generates a new utility function

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
