# Node Puppeteer Image Downloader

This application is meant for **experimentation purposes only**, it allows you to download multiple images from a website using Puppeteer.

## Installation:

1. Install dependencies:

`pnpm install`

## Usage

1. Edit the `index.js` file located in the `src` directory:

- Set the `baseUrl` variable to the website you want to download images from.
- Optionally, modify the image selection logic if needed.

2. Run the application:

`pnpm dev`

## Configuration (optional)

**Output directory**: The images will be downloaded to a folder named images in the project directory by default. You can change this by modifying the `outDir` variable in `index.js`.

## Troubleshooting

- Ensure you have Node.js and npm installed.
- Check for any errors in the console output.
- Verify that the website you're targeting allows image downloads.
- Consider network speed and website complexity when downloading large numbers of images.

## Additional Notes

- Be respectful of websites' terms of service and robots.txt rules.
- Use responsible crawling techniques to avoid overloading websites.
- Consider potential copyright implications when downloading images.
