import { FeedbackType, FeedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";


interface WidgetTypeStepProps {
    onTypeSelect: (type: FeedbackType) => void;
}


export function WidgetTypeStep({ onTypeSelect }: WidgetTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>

            <div className='py-8 gap-2 flex w-full'>
                {Object.entries(FeedbackTypes).map(([key, item]) => {
                    return (
                        <button
                            key={key}
                            type='button'
                            onClick={() => onTypeSelect(key as FeedbackType)}
                            className='bg-zinc-800 p-2 rounded-lg flex flex-col items-center py-5 w-24 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'>
                            <img src={item.image.src} alt={item.image.alt} />
                            <span className='text-sm leading-6 pt-2'>{item.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}