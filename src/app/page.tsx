"use client"
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

type Item = {
  hofu: string;
  discord: string;
  description: string;
};

import { metadata } from "./meta";

export default function Home() {
  useEffect(() => {
    // 動的に<head>にメタタグを追加
    const head = document.head;
    document.title = metadata.title;
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", metadata.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }

    
    // Open Graph メタタグ
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = metadata.openGraph.title;
    head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content = metadata.openGraph.description;
    head.appendChild(ogDescription);

    const ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    ogUrl.content = metadata.openGraph.url;
    head.appendChild(ogUrl);

    const ogImage = document.createElement("meta");
    ogImage.setAttribute("property", "og:image");
    ogImage.content = metadata.openGraph.images[0].url;
    head.appendChild(ogImage);

    // Twitter メタタグ
    const twitterCard = document.createElement("meta");
    twitterCard.setAttribute("name", "twitter:card");
    twitterCard.content = metadata.twitter.card;
    head.appendChild(twitterCard);

    const twitterSite = document.createElement("meta");
    twitterSite.setAttribute("name", "twitter:site");
    twitterSite.content = metadata.twitter.site;
    head.appendChild(twitterSite);

    const twitterTitle = document.createElement("meta");
    twitterTitle.setAttribute("name", "twitter:title");
    twitterTitle.content = metadata.twitter.title;
    head.appendChild(twitterTitle);

    const twitterDescription = document.createElement("meta");
    twitterDescription.setAttribute("name", "twitter:description");
    twitterDescription.content = metadata.twitter.description;
    head.appendChild(twitterDescription);

    const twitterImage = document.createElement("meta");
    twitterImage.setAttribute("name", "twitter:image");
    twitterImage.content = metadata.twitter.images[0].url;
    head.appendChild(twitterImage);

    // クリーンアップ（再レンダリング時の重複を防止）
    return () => {
      head.removeChild(ogTitle);
      head.removeChild(ogDescription);
      head.removeChild(ogUrl);
      head.removeChild(ogImage);
      head.removeChild(twitterCard);
      head.removeChild(twitterSite);
      head.removeChild(twitterTitle);
      head.removeChild(twitterDescription);
      head.removeChild(twitterImage);
    };
  }, []);
  const [data, setData] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwAGQW3Ax6ilZyDAh3BdXO-EO2LM12fw28njVlG7foie3pqAwE_4XD16Z1hYeFaqagJQw/exec"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "データの取得中にエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="h6">読み込み中...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center font-yujiboku justify-items-center min-h-screen p-8 pb-20 mt-[100px] gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col space-y-4 py-[200px]">
        <h1 className="text-6xl font-bold text-center">
          新年あけましておめでとうございます！！
        </h1>
        <p className="text-center text-4xl text-gray-600">
          今年の抱負をみんなで共有しましょう！
        </p>
        <Link href="https://forms.gle/qgEPcpScEckdFNvU7" className="text-xl h-[100px] text-center text-blue-500">
          Googleフォーム
        </Link>
      </div>
      <main className="pt-[100px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <Card key={index} sx={{ minWidth: 275, fontFamily: ["Yuji Boku", "serif"].join(",") }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14, fontFamily: ["Yuji Boku", "serif"].join(",") }}
              >
                今年の抱負は、
              </Typography>
              <Typography variant="h5" component="div" sx={{ fontFamily: ["Yuji Boku", "serif"].join(",") }}>
                {item.hofu}
              </Typography>
              <Typography variant="body1" component="div" sx={{ fontFamily: ["Yuji Boku", "serif"].join(",") }}>
                {item.description}
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: ["Yuji Boku", "serif"].join(",") }}>by {item.discord}</Typography>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}