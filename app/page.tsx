"use client";

import { returnSchema } from "./templates/firstElement";
import { generateDOMTree } from "./generateTemplate";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Home() {
  const router = useRouter();

  const handleClick = async () => {
    const elements = await webflow.getAllElements();
    const body = elements[0];
    const sampleElement = await returnSchema("beautifulStyle");

    if (body && body?.type === "Body") {
      body.prepend(await generateDOMTree(sampleElement, body));
      router.push("/tuto");
    } else {
      await webflow.notify({
        type: "Error",
        message: "Server error occurred. Please try again later.",
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4 p-4">
      <div className="text-center">
        <p>Welcome to Webflow!</p>
        <p>Choose a game below to get started.</p>
      </div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image="https://assets-global.website-files.com/64f9399ca7d13575ff21a675/64f9399ca7d13575ff21d699_SYBG_ArchiveWorkspace_2400x1400.jpg"
            alt="webflow logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Grid Basics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              laboriosam magnam veniam obcaecati corporis optio quos consequatur
              similique delectus nobis enim blanditiis, in hic! Quae dignissimos
              debitis temporibus quia aperiam?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            component="img"
            height="140"
            image="https://assets-global.website-files.com/64f9399ca7d13575ff21a675/64f9399ca7d13575ff21d699_SYBG_ArchiveWorkspace_2400x1400.jpg"
            alt="webflow logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Flexbox Basics
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              laboriosam magnam veniam obcaecati corporis optio quos consequatur
              similique delectus nobis enim blanditiis, in hic! Quae dignissimos
              debitis temporibus quia aperiam?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </main>
  );
}
