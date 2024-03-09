"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const isValidAmazonProductURL = (url: string) => {
  const notify = () => toast.success("Product Successfully Added!");
  try {
    const parsedURL = new URL(url);
    const hostname = parsedURL.hostname;
    // check if hostname conatins contains amazon.com or amazon.in[any country name]
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(searchPrompt);

    if (!isValidLink)
      return toast.error("Please Provide an Amazon Link", {
        icon: "🙅",
        style: {
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
          border: "1px solid white",
        },
      });

    try {
      setIsLoading(true);

      //Scraping the Product
      const product = await scrapeAndStoreProduct(searchPrompt);
      toast.success("Product Successfully Added!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#000",
          color: "#fff",
          border: "1px solid white",
        },
      });
    } catch (error) {
      toast.error("Something Went Wrong Please TRy Again!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <form className="flex flex-wrap gap-4 mt-12 " onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter Product Link"
          className="searchbar-input"
        />

        <button
          type="submit"
          className="relative z-10 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
    </>
  );
};

export default SearchBar;
