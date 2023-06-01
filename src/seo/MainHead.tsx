import Head from "next/head";
import Seo from "@/seo/Seo";

interface Props {
  url: string;
  title: string;
  description: string;
  generatorText: string;
  robots?: boolean;
  imgUrl?: string;
}

const MainHead = ({
  description,
  generatorText,
  title,
  url,
  robots,
  imgUrl,
}: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width" />
      <meta name="generator" content={generatorText} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <Seo
        url={url}
        title={title}
        description={description}
        imgUrl={imgUrl}
        robots={robots}
      />
    </Head>
  );
};

export default MainHead;
