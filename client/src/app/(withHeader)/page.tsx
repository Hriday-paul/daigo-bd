import Dedication from "@/components/Shared/Dedication/Dedication";
import HomeBanner from "@/components/Shared/HomeBanner/HomeBanner";
import HomeDoctors from "@/components/Shared/HomeDoctors/HomeDoctors";
import HomeServices from "@/components/Shared/HomeServices/HomeServices";
import HomeSlider from "@/components/Shared/HomeSlider/HomeSlider";

export default function Home() {

  return (
    <main className="">
        <HomeSlider />
        
        <Dedication />

        <HomeServices />

        {/* <HomeBanner /> */}

        <HomeDoctors />
        
    </main>
  );
}
