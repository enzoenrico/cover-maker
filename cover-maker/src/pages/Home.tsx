import { Card, CardBody, Input } from "@nextui-org/react";
import { useState, useEffect } from "react";

const Home = () => {
    const [word, setWord] = useState<string>("easiest")

    useEffect(() => {
        const interval = setInterval(() => {
            setWord("fastest");
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-screen h-screen  flex flex-col items-center justify-between">
            <div className="m-auto flex flex-col gap-5">
                <h1 className="text-6xl text-white font-bold text-center">Cover Buddy</h1>
                <p className="text-white text-lg text-center ">The {word} way to make a cover</p>
                <Card isBlurred>
                    <CardBody>
                        <p>
                            Just paste a link to your favorite song and we'll generate a backing track for you!
                        </p>
                    </CardBody>
                </Card>
            </div>
            <div className="w-full my-5 p-5 flex justify-center">
                <Input variant="bordered" className="w-5/6" radius="full" classNames={{
                    input: "text-xl text-center",
                }
                }
                    endContent={<span className="text-md">🎤</span>} placeholder="Paste a link to your favorite song"
                    onKeyDown={(e: Event) => {
                        if (e.key === "Enter") {
                            alert(e.target.value);
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Home;
