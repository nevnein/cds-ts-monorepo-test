import React from "react";
import Head from "next/head";

const Seo = ({ title, description, url, image, imageAlt, author, authorTwitter }) => (
  <Head>
    { title && <title>{title}</title> }
    { description && <meta name="description" content={description} /> }
    {/* Open Graph / Facebook: https://developers.facebook.com/tools/debug */}
    { title && <meta property="og:title" content={title} key="og-title" /> }
    { url && <meta property="og:url" content={url} key="og-url" /> }
    { image && <meta property="og:image" content={image} key="og-image" /> }
    { imageAlt && <meta property="og:image:alt" content={imageAlt} key="og-image-alt" /> }
    { description && <meta property="og:description" content={description} key="og-desc" /> }
    { author && <meta property="article:author" content={author} key="og-author" /> }
    {/* Twitter: https://cards-dev.twitter.com/validator */}
    { url && <meta name="twitter:url" content={url} /> }
    { title && <meta name="twitter:title" content={title} /> }
    { authorTwitter && <meta name="twitter:creator" content={authorTwitter} />}
    { description && <meta name="twitter:description" content={description} /> }
    {/* 2:1 ratio, 300x157 to 4096x4096, max 5MB */}
    { image && <meta name="twitter:image" content={image} /> }
    { imageAlt && <meta name="twitter:image:alt" content={imageAlt} /> }
  </Head>
);

export default Seo;