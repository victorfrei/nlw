import { ChatTeardropDots } from 'phosphor-react'
import {Popover} from '@headlessui/react'
import { WidgetForm } from './WidgetForm'

export function Widget() {
    return (
        <Popover className='absolute bottom-6 right-6 flex flex-col items-end'>
            <Popover.Panel><WidgetForm/></Popover.Panel>

            <Popover.Button className='rounded-full bg-brand-500 flex items-center text-white px-3 h-12 group'>
                <ChatTeardropDots className='w-6 h-6' />
                <span className='max-w-0 overflow-hidden group-hover:max-w-sm transition-all duration-300 ease-linear'>Feedback</span>
            </Popover.Button>
        </Popover>
    )
}