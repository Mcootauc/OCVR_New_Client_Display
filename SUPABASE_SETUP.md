# Supabase Authentication Setup

To fix the Google authentication redirects, make sure to update the following settings in your Supabase project:

## URL Configuration

1. Go to your [Supabase Dashboard](https://app.supabase.com)
2. Navigate to your project
3. Go to Authentication → URL Configuration
4. Update the Site URL to match your production URL:
    ```
    https://v0-next-js-client-ki7i6w8lc-mcootauc-gmailcoms-projects.vercel.app
    ```
5. Add the following Redirect URLs:
    ```
    https://v0-next-js-client-ki7i6w8lc-mcootauc-gmailcoms-projects.vercel.app/auth/callback
    https://v0-next-js-client-ki7i6w8lc-mcootauc-gmailcoms-projects.vercel.app
    http://localhost:3000/auth/callback
    http://localhost:3000
    ```

## Google OAuth Provider

1. In the Supabase Dashboard, go to Authentication → Providers
2. Make sure Google is enabled
3. Check that your Google OAuth client ID and client secret are correctly configured
4. In your Google Cloud Console, make sure the authorized redirect URIs include:
    ```
    https://uqdolredkukdkoolnubw.supabase.co/auth/v1/callback
    ```

## Vercel Environment Variables

Make sure your Vercel project has the following environment variables set:

```
NEXT_PUBLIC_SUPABASE_URL=https://uqdolredkukdkoolnubw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxZG9scmVka3VrZGtvb2xudWJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4MDc5NjEsImV4cCI6MjA1NzM4Mzk2MX0.IExrd80O0Tx6OrIS6XVaQHw8XQlpLNjEtdoGWsi7-Yg
NEXT_PUBLIC_SITE_URL=https://v0-next-js-client-ki7i6w8lc-mcootauc-gmailcoms-projects.vercel.app
```

After making these changes, redeploy your application to Vercel.
