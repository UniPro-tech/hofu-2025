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

export default function Home() {
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
    <div className="grid grid-rows-[20px_1fr_20px] items-center font-yujiboku justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col space-y-4 pt-20">
        <h1 className="text-6xl font-bold text-center">
          新年あけましておめでとうございます！！
        </h1>
        <p className="text-center text-4xl text-gray-600">
          今年の抱負をみんなで共有しましょう！
        </p>
        <Link href="https://forms.gle/qgEPcpScEckdFNvU7" className="block mt-4 text-center text-blue-500">
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