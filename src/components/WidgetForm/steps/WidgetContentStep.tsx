import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, FeedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenShotButton } from "../ScreenShotButton";


interface WidgetContentStepProps {
    TypeSelected: FeedbackType;
    RestartFeedback: () => void;
    onFeedbackSent: () => void;
}


export function WidgetContentStep({ TypeSelected, RestartFeedback, onFeedbackSent }: WidgetContentStepProps) {

    const FeedbackSelected = FeedbackTypes[TypeSelected];
    const [ScreenShot, setScreenShot] = useState<String | null>(null)
    const [comment, setComment] = useState<String>('');


    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault();
        console.log({ ScreenShot, comment })
        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    onClick={RestartFeedback}
                    className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
                >

                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img className="w-6 h-6" alt={FeedbackSelected.image.alt} src={FeedbackSelected.image.src} />
                    {FeedbackSelected.title}
                </span>
                <CloseButton />
            </header>

            <div className='py-8 gap-2 flex w-full'>
                <form onSubmit={handleSubmitFeedback}>
                    <textarea
                        className="min-w-[304px] w-full min-h-[112px] border-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent resize-none rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-2 focus:outline-none hover:border-brand-500 hover:border-2 scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin scrollbar-tr"
                        placeholder="Conte com detalhes o que está acontecendo..."
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <footer className="flex gap-2 mt-2">
                        <ScreenShotButton screenshot={ScreenShot} onScreenShotTaken={setScreenShot} />
                        <button
                            type="submit"
                            disabled={comment.length == 0}
                            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 hover:ring-offset-brand-300 hover:ring-1 hover:ring-brand-300 hover:ring-offset-1 hover:outline-none disabled:hover:ring-0 disabled:ring-offset-0"

                        >
                            Enviar feedback
                        </button>
                    </footer>
                </form>


            </div>
        </>
    )
}