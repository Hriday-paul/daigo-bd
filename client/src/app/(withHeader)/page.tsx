import Dedication from "@/components/Shared/Dedication/Dedication";
import HomeBanner from "@/components/Shared/HomeBanner/HomeBanner";
import HomeDoctors from "@/components/Shared/HomeDoctors/HomeDoctors";
import HomeServices from "@/components/Shared/HomeServices/HomeServices";
import HomeSlider from "@/components/Shared/HomeSlider/HomeSlider";
import TopRatedTest from "@/components/Shared/TopRatedTest/TopRatedTest";

export default function Home() {

  return (
    <main className="">
        <HomeSlider />
        
        <Dedication />

        <HomeServices />

        <TopRatedTest />

        {/* <HomeBanner /> */}

        <HomeDoctors />
        
    </main>
  );
}
