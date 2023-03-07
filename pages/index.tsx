import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import Section from "../components/Section";

export default function Index() {
    return (
        <HeaderLayout active={"Home"}>
            <Section
                className="mx-auto max-w-4xl"
                contentClassName="flex gap-4 items-center justify-center max-md:flex-col"
                alternate="none"
            >
                <Image
                    src="/images/about/yubo.png"
                    alt="Yubo’s Figure"
                    width={200}
                    height={300}
                    className="grayscale basis-12 flex-auto max-h-96 object-contain object-left drop-shadow-2xl"
                    style={{ flexGrow: 1 }}
                />
                <div
                    className="flex flex-col basis-96 flex-1 md:mx-16 max-md:basis-16 prose "
                    style={{ flexGrow: 3 }}
                >
                    <h1>Yubo Cao</h1>
                    <p className="text-lg mt-2">
                        I am a motivated sophomore with a passion for
                        programming and artificial intelligence, excited to
                        continue learning and striving for excellence.
                    </p>
                </div>
            </Section>
        </HeaderLayout>
    );
}
