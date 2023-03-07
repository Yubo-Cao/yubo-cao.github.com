import Image from "next/image";
import { HeaderLayout, Banner } from "@/components";

export default function Index() {
    return (
        <HeaderLayout active={"Home"}>
            <Banner avoidTOC={false} style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
                <div className="flex gap-8 items-center max-w-4xl mx-auto flex-wrap justify-center">
                    <div className="basis-40 flex-grow">
                        <Image
                            src="/images/about/yubo.png"
                            alt="Yubo’s Figure"
                            width={200}
                            height={300}
                            className="figure grayscale basis-12 flex-auto max-h-96 object-contain object-left shadow-indigo-500"
                            style={{ flexGrow: 1 }}
                        />
                    </div>
                    <div
                        className="basis-80 md:mx-16 max-md:basis-16"
                        style={{ flexGrow: 3 }}
                    >
                        <h1>Yubo Cao</h1>
                        <p className="text-lg mt-2">
                            I am a motivated sophomore with a passion for
                            programming and artificial intelligence, excited to
                            continue learning and striving for excellence.
                        </p>
                    </div>
                </div>
            </Banner>
        </HeaderLayout>
    );
}
