
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const WINDOWID: string;
	export const COLORTERM: string;
	export const XDG_SESSION_PATH: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NODE: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_scripts_check_watch: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_peerDependencies_svelte: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_exports___svelte: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const PNPM_HOME: string;
	export const npm_package_scripts_build: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const XAUTHORITY: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const MOTD_SHOWN: string;
	export const npm_package_scripts_package: string;
	export const HOME: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_files_0: string;
	export const npm_package_files_1: string;
	export const npm_package_files_2: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_format: string;
	export const npm_package_scripts_preview: string;
	export const ALACRITTY_SOCKET: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_svelte: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_exports___types: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const npm_package_devDependencies_eslint: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_scripts_lint: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_svelte: string;
	export const XDG_RUNTIME_DIR: string;
	export const NODE_PATH: string;
	export const PYENV_ROOT: string;
	export const DEBUGINFOD_URLS: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_dev: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_scripts_check: string;
	export const PATH: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_config_node_gyp: string;
	export const ALACRITTY_LOG: string;
	export const GDMSESSION: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const HG: string;
	export const MAIL: string;
	export const npm_config_registry: string;
	export const ALACRITTY_WINDOW_ID: string;
	export const npm_node_execpath: string;
	export const npm_config_engine_strict: string;
	export const OLDPWD: string;
	export const npm_package_types: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		WINDOWID: string;
		COLORTERM: string;
		XDG_SESSION_PATH: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NODE: string;
		npm_package_devDependencies_tslib: string;
		npm_package_scripts_check_watch: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies_publint: string;
		npm_package_peerDependencies_svelte: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		XDG_SEAT: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		npm_package_exports___svelte: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		PNPM_HOME: string;
		npm_package_scripts_build: string;
		npm_package_scripts_prepublishOnly: string;
		XAUTHORITY: string;
		npm_package_devDependencies_prettier: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		XDG_GREETER_DATA_DIR: string;
		MOTD_SHOWN: string;
		npm_package_scripts_package: string;
		HOME: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		npm_package_version: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_files_0: string;
		npm_package_files_1: string;
		npm_package_files_2: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		npm_package_scripts_format: string;
		npm_package_scripts_preview: string;
		ALACRITTY_SOCKET: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_svelte_check: string;
		XDG_SESSION_CLASS: string;
		npm_package_svelte: string;
		TERM: string;
		npm_package_name: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_exports___types: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		npm_package_devDependencies_eslint: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_scripts_lint: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_svelte: string;
		XDG_RUNTIME_DIR: string;
		NODE_PATH: string;
		PYENV_ROOT: string;
		DEBUGINFOD_URLS: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_dev: string;
		XDG_DATA_DIRS: string;
		npm_package_scripts_check: string;
		PATH: string;
		npm_package_devDependencies__types_eslint: string;
		npm_config_node_gyp: string;
		ALACRITTY_LOG: string;
		GDMSESSION: string;
		npm_package_devDependencies__sveltejs_kit: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		HG: string;
		MAIL: string;
		npm_config_registry: string;
		ALACRITTY_WINDOW_ID: string;
		npm_node_execpath: string;
		npm_config_engine_strict: string;
		OLDPWD: string;
		npm_package_types: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
