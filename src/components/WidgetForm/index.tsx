
import { useState } from 'react';
import bugWidgetImage from '../../assets/bug.svg';
import ideiaWidgetImage from '../../assets/ideia.svg';
import thoughtWidgetImage from '../../assets/thought.svg';
import { CloseButton } from '../CloseButton';
import { WidgetContentStep } from './steps/WidgetContentStep';
import { WidgetSuccessStep } from './steps/WidgetSuccessStep';
import { WidgetTypeStep } from './steps/WidgetTypeStep';

export const FeedbackTypes = {
    Bug: {
        title: 'Problema',
        image: {
            src: bugWidgetImage,
            alt: 'Imagem de um problema'
        },

    },
    Ideia: {
        title: 'Ideia',
        image: {
            src: ideiaWidgetImage,
            alt: 'Imagem de uma lâmpada'
        },
    },
    Other: {
        title: 'Outro',
        image: {
            src: thoughtWidgetImage,
            alt: 'Imagem de uma nuvem de pensamentos'
        },
    }
}

export type FeedbackType = keyof typeof FeedbackTypes;



export function WidgetForm() {
    const [FeedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [isFeedbackSent, setIsFeedbackSent] = useState(false);

    function handleFeedbackRestart() {
        setIsFeedbackSent(false);
        setFeedbackType(null);
    }


    return (
        <div className="bg-zinc-900 rounded-2xl flex flex-col items-center p-4 mb-4 relative shadow-lg w-full">

            {isFeedbackSent ?

                <WidgetSuccessStep RestartFeedback={handleFeedbackRestart}/>

                :
                <>
                    {!FeedbackType ?
                        <WidgetTypeStep onTypeSelect={setFeedbackType} />
                        :
                        <WidgetContentStep onFeedbackSent={() => setIsFeedbackSent(true)} RestartFeedback={handleFeedbackRestart} TypeSelected={FeedbackType} />
                    }

                    <footer className="text-xs text-zinc-400">
                        Feito com ♥ durante o NLW return
                    </footer>
                </>
            }
        </div>
    )
}