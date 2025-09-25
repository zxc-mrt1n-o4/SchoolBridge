# Railway Deployment Guide - SchoolBridge

## Overview
This guide will help you deploy the SchoolBridge platform to Railway.

## Environment Variables Required

Set these environment variables in your Railway project settings:

### Required Variables:
- `NODE_ENV` - Set to "production"
- `NEXTAUTH_SECRET` - A secure random string for NextAuth (if using authentication)
- `NEXTAUTH_URL` - Your Railway app URL (Railway provides this automatically)

### Optional Variables:
- `PORT` - Railway sets this automatically, but you can override if needed

## Deployment Steps

1. **Connect Repository**: Connect your GitHub repository to Railway
2. **Set Environment Variables**: Add the required environment variables in Railway dashboard
3. **Deploy**: Railway will automatically build and deploy your application

## Build Process

Railway will:
1. Install dependencies (`npm ci`)
2. Build the Next.js application (`npm run build`)
3. Start the server (`npm start`)

## Health Check

The application includes a health check endpoint at `/api/health` that Railway will use to verify the deployment.

## Features

- **Study Groups**: Students can join or create study groups
- **Learning Resources**: Access to shared educational materials
- **Safe Community**: Moderated environment for educational collaboration
- **Responsive Design**: Works on all devices
- **Modern UI**: Built with Next.js 15 and Tailwind CSS

## Platform Integration

The SchoolBridge platform integrates with the Linker platform at `https://linker.up.railway.app/` for enhanced functionality and user management.

## Support

For deployment issues or questions, check the Railway logs in your project dashboard.
