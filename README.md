# Lecturers Manager

This project is a simple web application designed for managing lecturer profiles. It provides a user-friendly interface for adding, viewing, and editing lecturer details, with robust image handling capabilities.

## Key Features:

### Add Lecturer:
Create new lecturer profiles by filling out a form with details such as name, surname, and subject.
Upload an image for the lecturer. The image is processed and saved to a dedicated images folder on the server using efficient file handling techniques (stream and buffer).

### View Lecturers:
Browse a list of all lecturers with their associated details and images. Each profile displays the lecturer's name, surname, subject, and their uploaded image.

### Edit Lecturer:
Update the information for an existing lecturer. This includes changing the name, surname, subject, and optionally updating the lecturer's image. If a new image is uploaded, the old one is removed and replaced with the new image in the images folder.

### Image Handling:
Images are processed on the server side using stream and buffer methods to ensure efficient and reliable file management. The use of createWriteStream allows for writing files directly to the server's filesystem, while Buffer.from is used to convert the uploaded image data into a format suitable for saving.








This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
