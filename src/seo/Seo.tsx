import { siteData } from "@/utils/constants";

interface Props {
  robots?: boolean;
  url: string;
  title: string;
  description: string;
  imgUrl?: string;
}

const Seo = ({ robots = true, description, url, imgUrl, title }: Props) => {
  return (
    <>
      <link rel="canonical" href={url} />

      {/* <!-- Open Graph --> */}
      <meta property="og:site_name" content="untitled's Blog" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl || siteData.image.src} />
      <meta property="og:image:url" content={imgUrl || siteData.image.src} />
      <meta
        property="og:image:secure_url"
        content={imgUrl || siteData.image.src}
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      <meta property="og:image:alt" content={imgUrl || siteData.image.alt} />

      {/* <!-- Twitter --> */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imgUrl || siteData.image.src} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:domain" content={url} />

      {robots && <meta name="robots" content="noindex, nofollow" />}
    </>
  );
};

export default Seo;
