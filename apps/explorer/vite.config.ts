// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/// <reference types="vitest" />
import { pathAlias } from '@mysten/core/vite.config';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// Assign the Vercel Analytics ID into a vite-safe name:
process.env.VITE_VERCEL_ANALYTICS_ID = process.env.VERCEL_ANALYTICS_ID;
process.env.VITE_VERCEL_ENV = process.env.VERCEL_ENV;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        globals: true,
        environment: 'happy-dom',
    },
    build: {
        // Set the output directory to match what CRA uses:
        outDir: 'build',
        sourcemap: true,
    },
    resolve: {
        alias: {
            '~': new URL('./src', import.meta.url).pathname,
            ...pathAlias(import.meta.url),
        },
    },
});
