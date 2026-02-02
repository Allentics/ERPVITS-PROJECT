# How to Connect Google Sheets to Your Application

To automatically save form submissions to a Google Sheet, follow these steps to generate the necessary credentials.

## Step 1: Create a Google Cloud Project
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click on the project dropdown at the top and select **"New Project"**.
3. Name it something like `ERPVITS-Website` and click **Create**.

## Step 2: Enable Google Sheets API
1. In the sidebar, go to **APIs & Services > Library**.
2. Search for **"Google Sheets API"**.
3. Click on it and press **Enable**.

## Step 3: Create a Service Account
1. Go to **APIs & Services > Credentials**.
2. Click **Create Credentials** and select **Service Account**.
3. Name it (e.g., `sheets-editor`) and click **Create & Continue**.
4. (Optional) Skip the role assignment steps (click Done).
5. In the list of Service Accounts, click on the one you just created (email looks like `sheets-editor@your-project.iam.gserviceaccount.com`).
6. Go to the **Keys** tab.
7. Click **Add Key > Create new key**.
8. Select **JSON** and click **Create**.
9. A file will automatically download. **Rename this file to `service-account.json` and save it securely.**

## Step 4: Share the Sheet & Get ID
1. Create a new Google Sheet (or use an existing one).
2. Click the **Share** button in the top right.
3. Copy the **client_email** from your `service-account.json` file (it looks like an email address) and paste it into the Share dialog.
4. Give it **Editor** access and send.
5. In the URL of your Google Sheet, valid the ID. It is the long string of characters between `/d/` and `/edit`.
   - Example: `docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE/edit`
   - **Spreadsheet ID**: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE`

## Next Steps
Once you have the `service-account.json` file and your Spreadsheet ID, please let me know!
I will then:
1. Configure the application to use these credentials.
2. Update the Contact Form to send data to your sheet automatically.
