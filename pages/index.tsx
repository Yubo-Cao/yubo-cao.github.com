import Image from "next/image";
import HeaderLayout from "../components/HeaderLayout";
import Section from "../components/Section";
import Title from "../components/Title";

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
                    <Title
                        level={1}
                        containerClassName={"-mb-2"}
                    >
                        Yubo Cao
                    </Title>
                    <p className="text-lg mt-2">
                        I am a highly motivated and ambitious sophomore with a
                        passion for programming and artificial intelligence. I
                        am excited to continue exploring and learning about
                        these fields, and I am committed to strive for
                        excellence in all of my endeavors.
                    </p>
                </div>
            </Section>
        </HeaderLayout>
    );
}
