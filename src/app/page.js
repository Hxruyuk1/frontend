import Image from "next/image";
import styles from "./page.module.css";
import Card from "../components/card"
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <>
    <div className="mt-2 mb-2">
          <Carousel />
        </div>
    <Card/>
    </>
  );
}
